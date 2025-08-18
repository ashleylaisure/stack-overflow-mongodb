import { cookies } from "next/headers"
import NavBar from "@/components/navigation/navbar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { ReactNode } from "react";
import LeftSidebar from "@/components/navigation/LeftSidebar";


export default async function HomeLayout({ children }: { children: ReactNode }) {
    const cookieStore = await cookies()
    const defaultOpen = cookieStore.get("sidebar_state")?.value === "true"

    return (
        <>
        <SidebarProvider defaultOpen={defaultOpen}>
            <LeftSidebar />
            <main className="w-full">
                <NavBar />
                <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-5 max-md:pb-14 sm:px-14">
                    <div className="mx-auto w-full max-w-5xl">
                        {children}
                    </div>
                </section>
            </main>
        </SidebarProvider>
        </>
    );
}