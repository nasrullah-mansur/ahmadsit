import Footer from "@/Pages/Components/Footer";
import HeadSection from "@/Pages/Components/HeadSection";
import Navbar from "@/Pages/Components/Navbar";

export default function GuestLayout({ children }) {
    return (
        <>
            <HeadSection />
            <Navbar />
            <div className="min-h-[calc(100vh-288px)]">{children}</div>
            <Footer />
        </>
    );
}
