import BrandLogo from "@/components/BrandLogo"
import UserAvatar from "@/components/navigation/navbar/UserAvatar"
import Link from "next/link"

export function NavBar() {
    return (
        
        <nav className="flex-between background-light900_dark200 fixed z-50 w-full gap-5 p-6 shadow-light-300 dark:shadow-none sm:px-12">

            <BrandLogo isOpen/>
            <Link className="text-lg" href="/dashboard">
                dashboard
            </Link>

            <Link className="text-lg" href="#">
                Features
            </Link>

            <Link className="text-lg" href="/#pricing">
                Pricing
            </Link>

            <Link className="text-lg" href="#">
                About
            </Link>
            
            <div className='flex flex-col gap-3'>
                <UserAvatar />
            </div>
        </nav>

    )
}