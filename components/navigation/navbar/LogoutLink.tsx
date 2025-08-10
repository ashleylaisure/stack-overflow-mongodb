"use client";

import { signOut } from "next-auth/react";
import ROUTES from "@/constants/routes";
import Link from "next/link";
import React, { useState } from "react";

const LogoutLink = () => {
    const [loading, setLoading] = useState(false);
    
    const handleLogout = async (event: React.FormEvent) => {
        event.preventDefault();
        setLoading(true);
        await signOut({ redirectTo: ROUTES.SIGN_IN });

        setLoading(false);
    };

    return (
        <div>
            <Link href="#" 
                onClick={handleLogout} 
                className="flex items-center gap-4">
                {loading ? "Signing out..." : "Sign out"}
            </Link>
        </div>
    );
};

export default LogoutLink;