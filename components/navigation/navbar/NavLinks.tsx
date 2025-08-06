'use client'
import { SheetClose } from '@/components/ui/sheet'
import { SidebarMenuBadge, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar'
import { sidebarLinks } from '@/constants/'
import { cn } from '@/lib/utils'
import { Item } from '@radix-ui/react-dropdown-menu'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'


const NavLinks = ({isMobile = false} : {isMobile?: boolean}) => {
    const pathname = usePathname()

    return (
        <>
        {sidebarLinks.map((link) => {

            const isActive = (pathname.includes(link.url) && link.url.length > 1) || pathname === link.url;

            const LinkComponent = (
                <SidebarMenuItem key={link.title}>
                    <SidebarMenuButton asChild>
                        <Link 
                            href={link.url} 
                            className={cn (
                                isActive
                                ? 'primary-gradient rounded-lg text-light-900' 
                                : 'text-dark300_light900'
                                , 'flex items-center justify-start gap-4 bg-transparent p-4'
                            )}>
                            <Image
                                src={link.icon}
                                alt={link.title}
                                width={20}
                                height={20}
                                className={cn(
                                    isActive ? 'invert-colors' : 'invert-colors opacity-60'
                                )}
                                />
                            <p className={cn(isActive ? 'medium' : '', 'text-sm text-dark300_light900')}>
                                {link.title}
                            </p>
                        </Link>
                    </SidebarMenuButton>
                    {link.title === "Questions" && (
                        <SidebarMenuBadge className="bg-sidebar-border">24</SidebarMenuBadge>
                    )}
                </SidebarMenuItem>
            )
            return LinkComponent;
            // return isMobile ? (
            //     <SheetClose asChild key={link.title}>
            //         {LinkComponent}
            //     </SheetClose>
            // ) : ( 
            //     <React.Fragment key={link.title}>
            //         {LinkComponent}
            //     </React.Fragment>
            // )
        })}
        </>
    )
}

export default NavLinks