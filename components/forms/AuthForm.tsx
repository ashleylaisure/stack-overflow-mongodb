"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import {
    DefaultValues,
    FieldValues,
    Path,
    SubmitHandler,
    useForm,
} from "react-hook-form";
import { z, ZodType } from "zod";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import ROUTES from "@/constants/routes";
import BrandLogo from "../BrandLogo";

interface AuthFormProps<T extends FieldValues> {
    formHeader?: string;
    formSubHeader?: string;
    schema: ZodType<T>;
    defaultValues: T;
    onSubmit: (data: T) => Promise<{ success: boolean }>;
    formType: "SIGN_IN" | "SIGN_UP";
}

const AuthForm = <T extends FieldValues>({
    formHeader,
    formSubHeader,
    schema,
    defaultValues,
    formType,
    onSubmit,
}: AuthFormProps<T>) => {

    // 1. Define your form.
    const form = useForm<z.infer<typeof schema>>({
        resolver: zodResolver(schema),
        defaultValues: defaultValues as DefaultValues<T>,
    });


    const handleSubmit: SubmitHandler<T> = async () => {
        // TODO: Authenticate User
    };

    const buttonText = formType === "SIGN_IN" ? "Sign In" : "Sign Up";

    return (
        <>
        <div className="flex-center flex-col gap-3">
            <BrandLogo isOpen/>

            <h1 className="text-2xl font-semibold text-dark900_light100">
                {formHeader}
            </h1>
            <p className="paragraph-regular text-dark500_light400">{formSubHeader}</p>
        </div>

        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(handleSubmit)}
                className="mt-10 space-y-6"
            >
                {Object.keys(defaultValues).map((field) => (
                <FormField
                    key={field}
                    control={form.control}
                    name={field as Path<T>}
                    render={({ field }) => (
                    <FormItem className="flex w-full flex-col gap-2.5">
                        <FormLabel className="paragraph-medium text-dark400_light700">
                            {field.name === "email"
                                ? "Email Address"
                                : field.name.charAt(0).toUpperCase() + field.name.slice(1)}
                        </FormLabel>
                        <FormControl>
                            <Input
                                required
                                type={field.name === "password" ? "password" : "text"}
                                // placeholder={field.name === "email" ? "Enter your email" : `Enter your ${field.name}`}
                                {...field}
                                className="paragraph-regular background-light900_dark300 light-border-2 text-dark300_light700 no-focus min-h-12 rounded-1.5 border"
                            />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />
                ))}

                <Button
                    disabled={form.formState.isSubmitting}
                    className="primary-gradient paragraph-medium min-h-12 w-full rounded-2 px-4 mt-3 font-inter !text-light-900"
                >
                    {form.formState.isSubmitting
                        ? buttonText === "Sign In"
                            ? "Signing In..."
                            : "Signing Up..."
                        : buttonText}
                </Button>

                {formType === "SIGN_IN" ? (
                    <div className="flex-center gap-4 flex-col">
                        <p className="text-sm text-dark500_light400">
                            Don&apos;t have an account?{" "}
                            <Link
                                href={ROUTES.SIGN_UP}
                                className="paragraph-semibold primary-text-gradient"
                            >
                            Sign up
                            </Link>
                        </p>
                        <p className="text-sm text-dark500_light400">
                            Forgot Your Password?{" "}
                            <Link
                                href={ROUTES.FORGOT_PASSWORD}
                                className="paragraph-semibold primary-text-gradient"
                            >
                                Reset Password
                            </Link>
                        </p>
                    </div>
                ) : (
                    <p className="text-center text-sm text-dark500_light400">
                        Already have an account?{" "}
                        <Link
                            href={ROUTES.SIGN_IN}
                            className="paragraph-semibold primary-text-gradient"
                        >
                            Sign in
                        </Link>
                    </p>
                )}
            </form>
        </Form>
        </>
    );
};

export default AuthForm;
