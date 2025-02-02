import { MdOutlinePhoneInTalk } from "react-icons/md";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaRegAddressBook } from "react-icons/fa";

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
                    <div>
                        <h2 className="text-[36px] font-semibold mb-[15px]">
                            আমাদের সাথে যোগাযোগ করুন
                        </h2>
                        <p className="text-[18px] mb-[30px]">
                            Lorem Ipsum হল মুদ্রণ এবং টাইপসেটিং শিল্পের ডামি
                            পাঠ্য। লোরেম ইপসাম 1500 এর দশক থেকে শিল্পের মানক
                            ডামি টেক্সট হয়েছে, যখন একটি অজানা প্রিন্টার টাইপের
                            একটি গ্যালি নিয়েছিল এবং একটি টাইপ নমুনা
                        </p>
                        <h3 className=" text-xl flex items-center mb-2">
                            <FaRegAddressBook />
                            <span className="font-semibold pl-2">ঠিকানা</span>
                        </h3>
                        <ul className="mb-5">
                            <li className="mb-1">
                                অপরুপা টাওয়ার, <br />
                                ডগাইর বাজার, <br />
                                সাইনবোর্ড, ডেমরা, ঢাকা
                            </li>
                        </ul>
                        <h3 className=" text-xl flex items-center mb-2">
                            <MdOutlinePhoneInTalk />{" "}
                            <span className="font-semibold pl-2">
                                মোবাইল নং
                            </span>
                        </h3>
                        <ul className="mb-5">
                            <li className="mb-1">
                                <a href="tel:01700000000">
                                    01700000000 (ওয়েব)
                                </a>
                            </li>
                            <li className="mb-1">
                                <a href="tel:01700000000">
                                    01700000000 (গ্রাফিক্স এন্ড ভিডিও)
                                </a>
                            </li>
                            <li className="mb-1">
                                <a href="tel:01700000000">
                                    01700000000 (ডিজিটাল মার্কেটিং)
                                </a>
                            </li>
                            <li className="mb-1">
                                <a href="tel:01700000000">
                                    01700000000 (সার্বিক তথ্য)
                                </a>
                            </li>
                        </ul>

                        <h3 className=" text-xl flex items-center mb-2">
                            <MdOutlineAlternateEmail />
                            <span className="font-semibold pl-2">ইমেইল</span>
                        </h3>
                        <ul className="mb-5">
                            <li className="mb-1">
                                <a href="tel:01700000000">
                                    nasrullah.cit.bd@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
