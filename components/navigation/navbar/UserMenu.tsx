
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { createClient } from "@/lib/supabase/server"
import { LogOut, Settings, User } from "lucide-react"
import Link from "next/link"
import Logout from "./Logout"

const UserMenu = async () => {
    const supabase = await createClient();
    const {data: { user }} = await supabase.auth.getUser();

    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Avatar>
                        <AvatarImage src="/icons/user.svg" className="invert-colors"/>
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="start">
                    <DropdownMenuLabel>{user?.email}</DropdownMenuLabel>
                    <DropdownMenuGroup>
                        <DropdownMenuItem>
                            <Link href={`/profile/${user?.id}`} className="flex items-center gap-4">
                                <User className="h-[1.2rem] w-[1.2rem]" />
                                Profile
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Settings className="h-[1.2rem] w-[1.2rem] mr-2" />
                            Settings
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem variant="destructive">
                        <LogOut className="h-[1.2rem] w-[1.2rem] mr-2" />
                        <Logout />
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
    </>
    )
}

export default UserMenu;
