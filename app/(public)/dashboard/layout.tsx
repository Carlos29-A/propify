import { Sidebar, TopMenu } from "@/src/features/dashboard/components";
import { Footer } from "@/src/shared/ui";
import { ToastContainer } from "react-toastify";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {


    return (
        <>
            <div className="bg-white text-gray-900 min-h-screen">

                {/* Top Navigation */}
                <TopMenu />

                {/* Sidebar + Main layout */}
                <div className="flex pt-16 min-h-screen">
                    <Sidebar />
                    {/* Main Content */}
                    <main className="flex-1 bg-white p-8 md:p-12">
                        {children}
                    </main>
                </div>

                <Footer />

                {/* Mobile Nav */}
                <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-lg px-6 py-4 z-50 flex justify-around items-center">
                    {[
                        { label: "My Prop", href: "#" },
                        { label: "Saved", href: "#" },
                        { label: "Inbox", href: "#" },
                        { label: "Account", href: "#" },
                    ].map(({ label, href }) => (
                        <a key={label} className="flex flex-col items-center gap-1 text-gray-500 text-[10px] font-bold" href={href}>
                            {label}
                        </a>
                    ))}
                </div>

            </div>
            <ToastContainer />
        </>
    )
}