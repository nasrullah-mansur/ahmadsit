import DashboardHeader from "@/Components/DashboardHeader";
import DashboardNavbar from "@/Components/DashboardNavbar";
import HeadSection from "@/Pages/Components/HeadSection";
import { useEffect, useState } from "react";

export default function AuthenticatedLayout({ children }) {
    const [isNavbarShow, setIsNavbarShow] = useState(window.innerWidth > 1020);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 1020) {
                setIsNavbarShow(false);
            } else {
                setIsNavbarShow(true);
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            <HeadSection />
            <div
                className={`grid ${
                    isNavbarShow ? "lg:grid-cols-[256px,1fr]" : "grid-cols-1"
                } bg-[#f5f5f5] dark:bg-[#1E1E1E] grid-rows-[60px,1fr]`}
            >
                <DashboardNavbar
                    onNavbarShow={() => setIsNavbarShow(!isNavbarShow)}
                    className={!isNavbarShow && "hidden "}
                />
                <div>
                    <DashboardHeader
                        isNavbarShow={() => setIsNavbarShow(!isNavbarShow)}
                    />
                    <div className="p-5 min-h-[calc(100vh-60px)]">
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
}
