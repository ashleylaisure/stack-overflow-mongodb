import React from 'react'

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Image from 'next/image'
import Link from 'next/link'
import ROUTES from '@/constants/routes'
import { Button } from '@/components/ui/button'
import NavLinks from './NavLinks'
import BrandLogo from '@/components/BrandLogo'

const MobileNavigation = () => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Image
                    src="/icons/hamburger.svg"
                    alt="Menu"
                    width={36}
                    height={36}
                    className="invert-colors sm:hidden"
                />
            </SheetTrigger>
            <SheetContent side="left" className="background-light900_dark200 border-none p-4">
                
                <SheetTitle className='hidden'>Navigation</SheetTitle>

                <BrandLogo isMobileNav/>

                <div className="no-scrollbar flex h-[calc(100vh-80px)] flex-col justify-between overflow-y-auto">
                    <SheetClose asChild>
                        <section className='flex h-full flex-col gap-6 pt-16'>
                            <NavLinks isMobileNav/>
                        </section>
                    </SheetClose>
                </div>
                
            </SheetContent>
        </Sheet>
    )
}

export default MobileNavigation