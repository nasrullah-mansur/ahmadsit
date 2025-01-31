import { Link } from "@inertiajs/react";
import { useState } from "react";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const domain = window.location.origin;

    return (
        <div className="border-b border-b-[#f1f1f1] absolute top-0 left-0 w-full">
            <div className="flex items-center container mx-auto py-5 px-2 ">
                <div className="me-auto">
                    <Link href="/">
                        <img
                            className="w-56"
                            src={`${domain}/images/logo.png`}
                            alt="আহমাদ’স আইটি ইনিস্টিটিউট"
                        />
                    </Link>
                </div>
                <ul className="hidden lg:flex">
                    <li className="mx-2 p-1 transition-colors hover:text-primary">
                        <Link href={route("home")}>হোম</Link>
                    </li>
                    <li className="mx-2 p-1 transition-colors hover:text-primary">
                        <Link href={route("about")}>আমাদের সম্পর্কে</Link>
                    </li>
                    <li className="mx-2 p-1 transition-colors hover:text-primary">
                        <Link href={route("courses")}>কোর্সসমূহ</Link>
                    </li>
                    <li className="mx-2 p-1 transition-colors hover:text-primary">
                        <Link href={route("success")}>সাফল্যের গল্প</Link>
                    </li>
                </ul>
                <div className="flex">
                    <Link
                        className="bg-gradient-to-r from-purple-500 to-pink-500 font-semibold px-5 py-3 rounded ml-3 text-white"
                        href={route("contact")}
                    >
                        যোগাযোগ
                    </Link>
                    <button
                        className="bg-gradient-to-r lg:hidden from-purple-500 to-pink-500 font-semibold px-5 py-3 rounded ml-3 text-white"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <HiMiniBars3BottomRight className="text-2xl" />
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="block lg:hidden">
                    <div
                        onClick={() => setIsOpen(!isOpen)}
                        className="bg-black bg-opacity-50 absolute top-0 left-0 w-screen z-10 h-screen"
                    />
                    <div className="w-64 bg-white fixed top-0 left-0 h-screen z-50 p-3 border-r ">
                        <IoMdClose
                            onClick={() => setIsOpen(!isOpen)}
                            className="absolute top-3 right-3 text-3xl"
                        />
                        <div className="me-auto px-4 mt-12">
                            <Link href="/">
                                <img
                                    className="w-56"
                                    src={`${domain}/images/logo.png`}
                                    alt="আহমাদ’স আইটি ইনিস্টিটিউট"
                                />
                            </Link>
                        </div>
                        <ul className="mt-8">
                            <li className="mx-2 p-1 transition-colors hover:text-primary">
                                <Link>হোম</Link>
                            </li>
                            <li className="mx-2 p-1 transition-colors hover:text-primary">
                                <Link>আমাদের সম্পর্কে</Link>
                            </li>
                            <li className="mx-2 p-1 transition-colors hover:text-primary">
                                <Link>কোর্সসমূহ</Link>
                            </li>
                            <li className="mx-2 p-1 transition-colors hover:text-primary">
                                <Link>সাফল্যের গল্প</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
}
