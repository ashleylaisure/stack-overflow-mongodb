import Image from "next/image";
import { ReactNode } from "react";

import SocialAuthForm from "@/components/forms/SocialAuthForm";
import BrandLogo from "@/components/BrandLogo";

const AuthLayout = ({ children }: { children: ReactNode }) => {
    return (
        <main className="flex min-h-screen items-center justify-center bg-auth-light bg-cover bg-center bg-no-repeat px-4 py-10 dark:bg-auth-dark">
            <section className="light-border background-light800_dark200 shadow-light100_dark100 min-w-full rounded-[10px] border px-4 py-10 shadow-md sm:min-w-[520px] sm:px-8">

                {children}

                <SocialAuthForm />
            </section>
        </main>
    );
};

export default AuthLayout;

