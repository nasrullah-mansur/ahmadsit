import { MdOutlinePhoneInTalk } from "react-icons/md";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaRegAddressBook } from "react-icons/fa";
import ContactSection from "./ContactSection";

export default function Contact() {
    return (
        <div className="mt-[80px] px-3 max-w-screen-xl mx-auto">
            <div className="container mx-auto ">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="order-2">
                        <iframe
                            className="w-full h-[320px] lg:h-full"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.0905007216297!2d90.47117617589616!3d23.708461990383977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b70054decb79%3A0x5cd9f2b094411fd2!2sAhmad&#39;s%20Education!5e0!3m2!1sen!2sbd!4v1738044175691!5m2!1sen!2sbd"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                    <ContactSection />
                </div>
            </div>
        </div>
    );
}
