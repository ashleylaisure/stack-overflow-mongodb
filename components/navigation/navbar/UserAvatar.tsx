
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
import { LogOut, Settings, User } from "lucide-react"
import Link from "next/link"
import Logout from "./LogoutLink"
import { auth } from "@/auth"
import { Button } from "@/components/ui/button"
import ROUTES from "@/constants/routes"
import Image from "next/image"

const UserAvatar =  async () => {
    const session = await auth()
    const { id, email, name, image } = session?.user || {}
    return (
        <>
        {id ? (
            // <>
            //     <Link href={ROUTES.PROFILE(id)}>
            //         <Avatar className='h-9 w-9 cursor-pointer'>
            //             {image ? (
            //                 <Image
            //                     src={image}
            //                     alt={name || "User Avatar"}
            //                     className="object-cover"
            //                     width={36}
            //                     height={36}
            //                     quality={100}
            //                 />
            //             ) : (
            //                 <AvatarFallback className="primary-gradient font-space-grotesk font-bold tracking-wider text-white">
            //                     {name?.charAt(0).toUpperCase()}
            //                 </AvatarFallback>
            //             )}
            //         </Avatar>
            //     </Link>
            // </>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Avatar className='h-9 w-9 cursor-pointer'>
                        {image ? (
                            <Image
                                src={image}
                                alt={name || "User Avatar"}
                                className="object-cover"
                                width={36}
                                height={36}
                                quality={100}
                            />
                        ) : (
                            <AvatarFallback className="primary-gradient font-space-grotesk font-bold tracking-wider text-white">
                                {name?.charAt(0).toUpperCase()}
                            </AvatarFallback>
                        )}
                    </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                    className="w-56" align="start">
                    <DropdownMenuLabel>{email}</DropdownMenuLabel>
                    <DropdownMenuGroup>
                        <DropdownMenuItem>
                            <Link href={ROUTES.PROFILE(id)} className="flex items-center gap-4">
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

        ) : (
            <div>
                <Link href={ROUTES.SIGN_IN}>
                    <Button className='small-medium btn-secondary w-full min-h-[41px] rounded-lg px-4 py-3'>
                        <span className='primary-text-gradient'>Log In</span>
                    </Button>
                </Link>

                <Link href={ROUTES.SIGN_UP}>
                    <Button className='small-medium light-border-2 btn-tertiary min-h-[41px]
                    w-full rounded-lg border px-4 py-3 shadow-none'>
                        <span className='primary-text-gradient'>Sign Up</span>
                    </Button>
                </Link>
            </div>
        )}
    </>
    )
}

export default UserAvatar;;
