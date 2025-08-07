"use client";
import React from "react";

import AuthForm from "@/components/forms/AuthForm";
import { SignUpSchema } from "@/lib/validations";

const SignUp = () => {
    return (
        <AuthForm
            formHeader="Create Your Account"
            formSubHeader="Enter your details to create your account"
            formType="SIGN_UP"
            schema={SignUpSchema}
            defaultValues={{ email: "", password: "", name: "", username: "" }}
            onSubmit={(data) => Promise.resolve({ success: true, data })}
        />
    );
};

export default SignUp;
