import GuestLayout from "@/Layouts/GuestLayout";
import React from "react";
import { FaRegAddressBook } from "react-icons/fa";
import { MdOutlineAlternateEmail, MdOutlinePhoneInTalk } from "react-icons/md";

export default function Index() {
    return (
        <GuestLayout>
            <div className="mt-[120px] min-h-[calc(100vh-290px)] max-w-screen-xl mx-auto">
                <div className="mt-[80px] px-3 lg:px-0">
                    <div className="container mx-auto ">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div className="order-2">
                                <div className="p-4 bg-gray-100 rounded-lg">
                                    <h2 className="text-[26px] font-semibold mb-[15px]">
                                        আপনার জিজ্ঞাসাটি আমাদের কাছে পাঠান
                                    </h2>

                                    <form>
                                        <div className="mb-5">
                                            <label
                                                htmlFor="password"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                            >
                                                আপনার নাম
                                            </label>
                                            <input
                                                type="password"
                                                id="password"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                required
                                            />
                                        </div>
                                        <div className="mb-5">
                                            <label
                                                htmlFor="password"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                            >
                                                মোবাইল নং
                                            </label>
                                            <input
                                                type="password"
                                                id="password"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                required
                                            />
                                        </div>
                                        <div className="mb-5">
                                            <label
                                                htmlFor="password"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                            >
                                                জিজ্ঞাসার বিষয়
                                            </label>
                                            <input
                                                type="password"
                                                id="password"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="message"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                            >
                                                আপনার মেসেজ
                                            </label>
                                            <textarea
                                                id="message"
                                                rows="4"
                                                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            ></textarea>
                                        </div>
                                        <button className="bg-primary px-6 py-2 rounded-lg text-white mt-5">
                                            মেসেজটি সেন্ট করুন
                                        </button>
                                    </form>
                                </div>
                            </div>
                            <div>
                                <h2 className="text-[26px] font-semibold mb-[15px]">
                                    আমাদের সাথে যোগাযোগ করুন
                                </h2>

                                <h3 className=" text-xl flex items-center mb-2">
                                    <FaRegAddressBook />
                                    <span className="font-semibold pl-2">
                                        ঠিকানা
                                    </span>
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
                                    <span className="font-semibold pl-2">
                                        ইমেইল
                                    </span>
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
            </div>
        </GuestLayout>
    );
}
