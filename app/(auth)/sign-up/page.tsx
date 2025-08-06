import AuthForm from '@/components/forms/AuthForm'
import React from 'react'

const SignUp = () => {
    return (
        <>
            <AuthForm
                title="Create an Account"
                subtitle="To get your questions answered"
                OAuthText="Sign up with Google"
                formType="SIGN_UP"
            />
        </>
    )
}

export default SignUp
