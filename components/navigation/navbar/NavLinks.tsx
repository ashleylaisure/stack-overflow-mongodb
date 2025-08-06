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


const NavLinks = () => {
    const pathname = usePathname()
    const userId = 1; // Replace with actual user ID logic

    return (
        <>
        {sidebarLinks.map((link) => {

            const isActive = (pathname.includes(link.route) && link.route.length > 1) || pathname === link.route;

            if (link.route === "/profile") {
                if (userId) link.route = `${link.route}/${userId}`;
                else return null;
            }

            const LinkComponent = (
                <SidebarMenuItem key={link.label}>
                    <SidebarMenuButton asChild>
                        <Link 
                            href={link.route} 
                            className={cn (
                                isActive
                                ? 'primary-gradient rounded-lg text-light-900' 
                                : 'text-dark300_light900'
                                , 'flex items-center justify-start gap-4 bg-transparent p-4'
                            )}>
                            <Image
                                src={link.icon}
                                alt={link.label}
                                width={20}
                                height={20}
                                className={cn(
                                    isActive ? 'invert-colors' : 'invert-colors opacity-60'
                                )}
                                />
                            <p className={cn(isActive ? 'medium' : '', 'text-sm text-dark300_light900')}>
                                {link.label}
                            </p>
                        </Link>
                    </SidebarMenuButton>
                    {link.label === "Questions" && (
                        <SidebarMenuBadge className="bg-sidebar-border">24</SidebarMenuBadge>
                    )}
                </SidebarMenuItem>
            )
            return LinkComponent;
        })}
        </>
    )
}

export default NavLinks