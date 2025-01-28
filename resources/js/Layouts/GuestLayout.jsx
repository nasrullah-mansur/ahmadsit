import Footer from "@/Pages/Components/Footer";
import Navbar from "@/Pages/Components/Navbar";

export default function GuestLayout({ children }) {
    return (
        <>
            <Navbar />
            <div>{children}</div>
            <Footer />
        </>
    );
}
