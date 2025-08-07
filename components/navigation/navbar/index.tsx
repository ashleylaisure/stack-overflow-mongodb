import React from "react";
import Theme from "./Theme";
import UserMenu from "@/components/navigation/navbar/UserMenu";
import { SidebarTrigger } from "@/components/ui/sidebar";

const Navbar = async () => {

    return (
        <nav className="flex-between background-light900_dark200 sticky top-0 z-50 w-full gap-5 p-6 shadow-light-300 dark:shadow-none sm:px-12">

            {/* LEFT */}
            <SidebarTrigger />

            {/* CENTER */}
            <p>Global Search</p>

            {/* RIGHT */}
            <div className="flex items-center gap-4 mr-4">
                <Theme />
                <UserMenu />
            </div>
        </nav>
    );
};

export default Navbar;
