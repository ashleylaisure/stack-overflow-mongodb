import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupAction,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuBadge,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
    SidebarSeparator,
} from "@/components/ui/sidebar"
import { sidebarLinks } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import BrandLogo from "../BrandLogo"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { ChevronDown, ChevronUp, Plus, Projector, User2 } from "lucide-react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible"
import NavLinks from "./navbar/NavLinks"

export default function AppSidebar() {
    return (
        <Sidebar collapsible="icon">
            {/* HEADER */}
            <SidebarHeader className="py-4">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                        <Link href="/">
                            <Image
                                src="/images/site-logo.svg"
                                width={23}
                                height={23}
                                alt="DevFlow Logo"
                            />
                            <p className="h2-bold font-space-grotesk text-dark-100 dark:text-light-900">
                                Dev<span className="text-primary-500">Flow</span>
                            </p>
                        </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarSeparator />

            {/* NAVLINKS */}
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel className="hidden">Application</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                        {/* {sidebarLinks.map((item) => (
                            <SidebarMenuItem key={item.title}>
                                <SidebarMenuButton asChild>
                                    <Link href={item.url}>
                                        <Image 
                                            src={item.icon} 
                                            alt={item.title} 
                                            width={16} 
                                            height={16} 
                                            className="invert-colors"/>
                                        <span>{item.title}</span>
                                    </Link>
                                </SidebarMenuButton>
                                {item.title === "Questions" && (
                                    <SidebarMenuBadge className="bg-sidebar-border">24</SidebarMenuBadge>
                                )}
                            </SidebarMenuItem>
                        ))} */}
                        <NavLinks />
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                {/* ACTION */}
                <SidebarGroup>
                    <SidebarGroupLabel>Projects</SidebarGroupLabel>
                    <SidebarGroupAction>
                        <Plus /> <span className="sr-only">Add Project</span>
                    </SidebarGroupAction>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <Link href="/#">
                                    <Projector />
                                    See All Projects
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <Link href="/#">
                                    <Plus />
                                    Add Project
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                {/* COLLAPSIBLE */}
                <Collapsible defaultOpen className="group/collapsible">
                <SidebarGroup>
                    <SidebarGroupLabel asChild>
                        <CollapsibleTrigger>
                            Collapsable Group
                            <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                        </CollapsibleTrigger>
                    </SidebarGroupLabel>
                    <CollapsibleContent>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                <SidebarMenuItem>
                                    <SidebarMenuButton asChild>
                                        <Link href="/#">
                                            <Projector />
                                            See All Projects
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                                <SidebarMenuItem>
                                    <SidebarMenuButton asChild>
                                        <Link href="/#">
                                            <Plus />
                                            Add Project
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </CollapsibleContent>
                </SidebarGroup>
            </Collapsible>

            {/* NESTED */}
            <SidebarGroup>
                <SidebarGroupLabel>Nested Items</SidebarGroupLabel>
                <SidebarGroupContent>
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <SidebarMenuButton asChild>
                                <Link href="/#">
                                    <Projector />
                                    See All Projects
                                </Link>
                            </SidebarMenuButton>
                            <SidebarMenuSub>
                                <SidebarMenuSubItem>
                                    <SidebarMenuSubButton asChild>
                                    <Link href="/#">
                                        <Plus />
                                        Add Project
                                    </Link>
                                    </SidebarMenuSubButton>
                                </SidebarMenuSubItem>
                                <SidebarMenuSubItem>
                                    <SidebarMenuSubButton asChild>
                                    <Link href="/#">
                                        <Plus />
                                        Add Category
                                    </Link>
                                    </SidebarMenuSubButton>
                                </SidebarMenuSubItem>
                            </SidebarMenuSub>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarGroupContent>
            </SidebarGroup>

            </SidebarContent>

            {/* FOOTER */}
            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <SidebarMenuButton className="group">
                                    <User2 /> Username
                                    <ChevronDown className="ml-auto transition-transform group-data-[state=open]:rotate-180" />
                                </SidebarMenuButton>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                side="top"
                                align="end"
                                className="w-[--radix-popper-anchor-width] min-w-[200px]"
                            >
                                <DropdownMenuItem>
                                    <span>Account</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <span>Billing</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <span>Sign out</span>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    )
}