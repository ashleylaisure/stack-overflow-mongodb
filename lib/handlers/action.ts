"use server";

import { Session } from "next-auth";
import { ZodError, ZodSchema } from "zod";

import { auth } from "@/auth";

import { UnauthorizedError, ValidationError } from "../http-errors";
import dbConnect from "../mongoose";

type ActionOptions<T> = {
    params?: T;
    schema?: ZodSchema<T>;
    authorize?: boolean;
};


async function action<T>({params, schema, authorize = false,}: ActionOptions<T>) {
    // 1. Checking whether the schema and params are provided and validated.
    if (schema && params) {
        try {
            schema.parse(params);
        } catch (error) {
            if (error instanceof ZodError) {
                return new ValidationError(
                    error.flatten().fieldErrors as Record<string, string[]>
                );
            } else {
                return new Error("Schema validation failed");
            }
        }
    }
    
    let session: Session | null = null;
    
    // 2. Checking whether the user is authorized.
    if (authorize) {
        session = await auth();
        
        if (!session) {
            return new UnauthorizedError();
        }
    }
    
    // 3. Connecting to the database.
    await dbConnect();
    
    // 4. Returning the params and session.
    return { params, session };
}

export default action