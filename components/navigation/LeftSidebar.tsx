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
import { 
    DropdownMenu, 
    DropdownMenuContent, 
    DropdownMenuGroup, 
    DropdownMenuItem, 
    DropdownMenuSeparator, 
    DropdownMenuTrigger 
} from "../ui/dropdown-menu"
import { ChevronDown, ChevronUp, Layers, LogOut, Plus, Projector, Settings, User, User2 } from "lucide-react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible"
import NavLinks from "./NavLinks"
import UserMenu from "./navbar/UserAvatar"
import { auth } from "@/auth"
import LogoutLink from "./navbar/LogoutLink"
import ROUTES from "@/constants/routes"

export default async function LeftSidebar() {
    const session = await auth()
    const userId = session?.user?.id

    return (
        <Sidebar collapsible="icon">
            {/* HEADER */}
            <SidebarHeader className="min-h-[85px] flex-center">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                        <Link href="/">
                            <Image
                                src="/images/site-logo.svg"
                                width={25}
                                height={25}
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
                            <NavLinks userId={userId}/>
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
                                <DropdownMenuGroup>
                                    <DropdownMenuItem>
                                        <Link href={`/profile/${userId}`} className="flex items-center gap-4">
                                            <User className="h-[1.2rem] w-[1.2rem]" />
                                            Profile
                                        </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <Settings className="h-[1.2rem] w-[1.2rem] mr-2" />
                                        Settings
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <Layers className="h-[1.2rem] w-[1.2rem] mr-2" />
                                        <span>Billing</span>
                                    </DropdownMenuItem>
                                </DropdownMenuGroup>
                                <DropdownMenuSeparator />
                                    <DropdownMenuItem variant="destructive">
                                        <LogOut className="h-[1.2rem] w-[1.2rem] mr-2" />
                                        <LogoutLink />
                                    </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    )
}