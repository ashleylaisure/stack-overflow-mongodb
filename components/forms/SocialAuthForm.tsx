"use client";

import Image from "next/image";
import { signIn } from "next-auth/react";
import ROUTES from "@/constants/routes";
import { toast } from "sonner";
import { Button } from "../ui/button";

const SocialAuthForm = () => {

  const handleSignIn = async (provider: 'google' | 'github') => {
    try {
      await signIn(provider, {
          callbackUrl: ROUTES.HOME,
      })
    } catch (error) {
        console.log("Error during sign-in:", error);
        // Display a toast notification with the error message
        toast.error("Sign in failed", {
            description:
                error instanceof Error
                    ? error.message
                    : "An error occured while signing in",
        });
    }
  };

  return (
    <>
      <div className="flex items-center justify-center gap-4 my-4">
        <hr className="flex-grow border-t-1.5 border-dark-500_light400" />
        <span className="text-xs text-dark500_light400 font-medium">OR</span>
        <hr className="flex-grow border-t-1.5 border-dark-500_light400" />
      </div>

      <div className="flex flex-wrap gap-2.5">
        <Button className='button-primary' onClick={() => handleSignIn('github')}>
          <Image
            src="/icons/github.svg"
            alt="Github Logo"
            width={20}
            height={20}
            className="invert-colors mr-2.5 object-contain"
            />
          <span>Log in with GitHub</span>
        </Button>

        <Button className='button-primary' onClick={() => handleSignIn('google')}>
          <Image
            src="/icons/google.svg"
            alt="Google Logo"
            width={20}
            height={20}
            className="mr-2.5 object-contain"
            />
          <span>Log in with Google</span>
        </Button>
      </div>
    </>
  );
};

export default SocialAuthForm;