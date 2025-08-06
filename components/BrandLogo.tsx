import { cookies } from 'next/headers';
import React from 'react'
import Image from "next/image";
import Link from "next/link";
import ROUTES from '@/constants/routes';
import { cn } from '@/lib/utils';

const BrandLogo = ({isMobileNav, isOpen} : {isMobileNav?: boolean, isOpen?: boolean}) => {
    const showText = isMobileNav || isOpen;  

    return (
        <div>
            {/* TODO: if user is logged in go to dashboard if not go to landing page */}
            <Link href={ROUTES.LANDING_PAGE} className="flex items-center gap-1">
                <Image
                    src="/images/site-logo.svg"
                    width={23}
                    height={23}
                    alt="DevFlow Logo"
                />

                {showText && (
                    <p className="h2-bold font-space-grotesk text-dark-100 dark:text-light-900">
                        Dev<span className="text-primary-500">Flow</span>
                    </p>
                )}
            </Link>
        </div>
    )
}

export default BrandLogo
