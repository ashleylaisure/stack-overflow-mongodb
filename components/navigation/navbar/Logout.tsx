"use client";
import { SignOut } from "@/lib/supabase/actions/auth";
import Link from "next/link";
import React, { useState } from "react";

const Logout = () => {
  const [loading, setLoading] = useState(false);

  const handleLogout = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);

    await SignOut();
    setLoading(false);
  };

    return (
        <div>
            <Link href="/logout" onClick={handleLogout} className="flex items-center gap-4">
                {loading ? "Signing out..." : "Sign out"}
            </Link>
        </div>
    );
};

export default Logout;