import mongoose from "mongoose";
import { NextResponse } from "next/server";
import slugify from "slugify";

import Account from "@/database/account.model";
import User from "@/database/user.model";
import handleError from "@/lib/handlers/error";
import { ValidationError } from "@/lib/http-errors";
import dbConnect from "@/lib/mongoose";
import { SignInWithOAuthSchema } from "@/lib/validations";

// post request that allows users to sign in with OAuth providers
export async function POST(request: Request) {
    const { provider, providerAccountId, user } = await request.json();

    await dbConnect();

    const session = await mongoose.startSession();
    session.startTransaction();

    try {
        // first trying to sign the user in using OAuth
        const validatedData = SignInWithOAuthSchema.safeParse({ provider, providerAccountId, user });

        if (!validatedData.success)
        throw new ValidationError(validatedData.error.flatten().fieldErrors);

        const { name, username, email, image } = user;

        const slugifiedUsername = slugify(username, {
            lower: true,
            strict: true,
            trim: true,
        });

        // if everything is good we generate its username, then we try to find that user
        let existingUser = await User.findOne({ email }).session(session);

        // if the user doesn't exist, we create it
        if (!existingUser) {
            [existingUser] = await User.create(
                [{ name, username: slugifiedUsername, email, image }],
                { session }
            );
        } else {
            // if the user exists, we check if the username or image has changed
            const updatedData: { name?: string; image?: string } = {};

            if (existingUser.name !== name) updatedData.name = name;
            if (existingUser.image !== image) updatedData.image = image;

            if (Object.keys(updatedData).length > 0) {
                await User.updateOne({ _id: existingUser._id },{ $set: updatedData }).session(session);
            }
        }

        // find the existing account attached to that user ID
        const existingAccount = await Account.findOne({userId: existingUser._id, provider, providerAccountId,}).session(session);

        // if that account doesn't exist, we create it
        if (!existingAccount) {
            await Account.create(
                [{
                    userId: existingUser._id,
                    name,
                    image,
                    provider,
                    providerAccountId,
                }],
                { session }
            );
        }


        await session.commitTransaction();

        return NextResponse.json({ success: true });
    } catch (error: unknown) {
        await session.abortTransaction();
        return handleError(error, "api") as APIErrorResponse;
    } finally {
        session.endSession();
    }
}