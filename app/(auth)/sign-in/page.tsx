import AuthForm from '@/components/forms/AuthForm'
import React from 'react'

const SignIn = () => {
    return (
        <>
            <AuthForm 
                title="Welcome Back"
                subtitle="To get your questions answered"
                OAuthText="Log in with Google"
                formType="SIGN_IN"
            />
        </>
    )
}

export default SignIn
