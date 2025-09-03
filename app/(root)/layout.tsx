import { cookies } from "next/headers"
import NavBar from "@/components/navigation/navbar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { ReactNode } from "react";
import LeftSidebar from "@/components/navigation/LeftSidebar";
import RightSidebar from "@/components/navigation/RightSidebar";


export default async function HomeLayout({ children }: { children: ReactNode }) {
    const cookieStore = await cookies()
    const defaultOpen = cookieStore.get("sidebar_state")?.value === "true"

    return (
        <>
        <SidebarProvider defaultOpen={defaultOpen}>
            <LeftSidebar />
            <main className="background-light850_dark100 relative w-full">
                <NavBar />
                <div className="flex">
                    <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-5 max-md:pb-14 sm:px-14">
                        <div className="mx-auto w-full max-w-5xl">
                            {children}
                        </div>
                    </section>
                
                    <RightSidebar />
                </div>
            </main>
        </SidebarProvider>
        </>
    );
}