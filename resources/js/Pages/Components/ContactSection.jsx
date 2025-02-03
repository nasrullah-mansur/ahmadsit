import React from "react";
import { FaRegAddressBook } from "react-icons/fa6";
import { MdOutlineAlternateEmail, MdOutlinePhoneInTalk } from "react-icons/md";

export default function ContactSection() {
    return (
        <div>
            <h2 className="text-[36px] font-semibold mb-[15px]">
                আমাদের সাথে যোগাযোগ করুন
            </h2>
            <p className="text-[18px] mb-[30px]">
                আমাদের কোর্স সম্পর্কে বিস্তারিত জানতে যেকোন সময় আমাদের আই টি
                সেন্টারে ভিজিট করতে পারেন অথবা আমাদের সাথে যোগাযোগ করতে নিচের
                ফোন নাম্বারে কল করতে পারেন
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
                <span className="font-semibold pl-2">মোবাইল নং</span>
            </h3>
            <ul className="mb-5">
                <li className="mb-1">
                    <a href="tel:01728619733">01728619733 (ওয়েব ডেভলপমেন্ট)</a>
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
                    <a href="tel:01700000000">01700000000 (সার্বিক তথ্য)</a>
                </li>
            </ul>

            <h3 className=" text-xl flex items-center mb-2">
                <MdOutlineAlternateEmail />
                <span className="font-semibold pl-2">ইমেইল</span>
            </h3>
            <ul className="mb-5">
                <li className="mb-1">
                    <a href="mailto:nasrullah.cit.bd@gmail.com">
                        nasrullah.cit.bd@gmail.com
                    </a>
                </li>
            </ul>
        </div>
    );
}
