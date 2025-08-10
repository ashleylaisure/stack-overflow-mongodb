"use client";
import React from "react";

import AuthForm from "@/components/forms/AuthForm";
import { SignInSchema } from "@/lib/validations";
import { signInWithCredentials } from "@/lib/actions/auth.action";

const SignIn = () => {
    return (
        <AuthForm
            formHeader="Welcome Back"
            formSubHeader="Enter your credentials to access your account"
            formType="SIGN_IN"
            schema={SignInSchema}
            defaultValues={{ email: "", password: "" }}
            // onSubmit={(data) => Promise.resolve({ success: true, data })}
            onSubmit={signInWithCredentials}
        />
    );
};

export default SignIn;
