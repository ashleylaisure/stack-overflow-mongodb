
import BrandLogo from "@/components/BrandLogo";
import React from "react";

import Theme from "./Theme";
import { createClient } from "@/lib/supabase/server";
import UserBtn from "@/components/navigation/navbar/UserMenu";
import MobileNavigation from "./MobileNavigation";
import UserMenu from "@/components/navigation/navbar/UserMenu";
import { SidebarTrigger } from "@/components/ui/sidebar";

const Navbar = async () => {
    

    return (
        <nav className="p-4 flex items-center justify-between sticky top-0 bg-background z-10">

            {/* LEFT */}
            <SidebarTrigger />

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
