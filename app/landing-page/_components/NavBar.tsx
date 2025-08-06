import BrandLogo from "@/components/BrandLogo"
import { Button } from "@/components/ui/button"
import ROUTES from "@/constants/routes"
import Link from "next/link"

export function NavBar() {
    return (
        
        <nav className="flex-between background-light900_dark200 fixed z-50 w-full gap-5 p-6 shadow-light-300 dark:shadow-none sm:px-12">

            <BrandLogo />
            <Link className="text-lg" href="/">
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
        </nav>

    )
}