import { useState } from "react";
import CourseReviews from "./CourseReviews";

export default function CourseViewBody() {
    const [section, setSection] = useState("overview");

    return (
        <>
            <div className="py-[80px] bg-[#f9f9f9] mt-[50px]">
                <div className="container mx-auto ">
                    <ul className="flex gap-4 justify-center">
                        <li
                            className={`border px-4 py-2 rounded-md cursor-pointer ${
                                section === "overview"
                                    ? "bg-gradient-to-r from-purple-500 to-pink-500 font-semibold px-5 rounded text-white"
                                    : ""
                            }`}
                            onClick={() => setSection("overview")}
                        >
                            কোর্স ওভারভিউ
                        </li>
                        <li
                            className={`border px-4 py-2 rounded-md cursor-pointer ${
                                section === "curriculum"
                                    ? "bg-gradient-to-r from-purple-500 to-pink-500 font-semibold px-5 rounded text-white"
                                    : ""
                            }`}
                            onClick={() => setSection("curriculum")}
                        >
                            কোর্স কারিকুলাম
                        </li>
                    </ul>
                    <div className="bg-white rounded-lg p-6 mt-4">
                        <div className=" max-w-[1020px] m-auto">
                            {section === "overview" && (
                                <div className="overview">
                                    <h2 className="border-l border-primary pl-4 text-2xl font-bold mt-8">
                                        কোর্স ওভারভিউ
                                    </h2>
                                    <p className="mt-4 text-lg text-gray-600">
                                        ওয়েব ডেভেলপমেন্ট হল আধুনিক প্রযুক্তির
                                        অন্যতম চাহিদাসম্পন্ন দক্ষতা, যা আপনাকে
                                        একটি সফল ক্যারিয়ার গড়তে সহায়তা করবে।
                                        এটি মূলত দুটি ভাগে বিভক্ত: ফ্রন্টএন্ড
                                        (যেখানে ওয়েবসাইটের ডিজাইন ও ইউজার
                                        ইন্টারফেস তৈরি হয়) এবং ব্যাকএন্ড
                                        (যেখানে ওয়েবসাইটের ডাটা ম্যানেজমেন্ট ও
                                        সার্ভার সাইড কাজ করা হয়)। এই কোর্সে
                                        আমরা আপনাকে শিখাবো কিভাবে এই দুটি ভাগের
                                        কাজ করতে হয়। ওয়েব ডেভেলপমেন্ট হল
                                        আধুনিক প্রযুক্তির অন্যতম চাহিদাসম্পন্ন
                                        দক্ষতা, যা আপনাকে একটি সফল ক্যারিয়ার
                                        গড়তে সহায়তা করবে। এটি মূলত দুটি ভাগে
                                        বিভক্ত: ফ্রন্টএন্ড (যেখানে ওয়েবসাইটের
                                        ডিজাইন ও ইউজার ইন্টারফেস তৈরি হয়) এবং
                                        ব্যাকএন্ড (যেখানে ওয়েবসাইটের ডাটা
                                        ম্যানেজমেন্ট ও সার্ভার সাইড কাজ করা
                                        হয়)। এই কোর্সে আমরা আপনাকে শিখাবো
                                        কিভাবে এই দুটি ভাগের কাজ করতে হয়। ওয়েব
                                        ডেভেলপমেন্ট হল আধুনিক প্রযুক্তির অন্যতম
                                        চাহিদাসম্পন্ন দক্ষতা, যা আপনাকে একটি সফল
                                        ক্যারিয়ার গড়তে সহায়তা করবে। এটি মূলত
                                        দুটি ভাগে বিভক্ত: ফ্রন্টএন্ড (যেখানে
                                        ওয়েবসাইটের ডিজাইন ও ইউজার ইন্টারফেস
                                        তৈরি হয়) এবং ব্যাকএন্ড (যেখানে
                                        ওয়েবসাইটের ডাটা ম্যানেজমেন্ট ও সার্ভার
                                        সাইড কাজ করা হয়)। এই কোর্সে আমরা আপনাকে
                                        শিখাবো কিভাবে এই দুটি ভাগের কাজ করতে
                                        হয়।
                                    </p>
                                </div>
                            )}

                            {section === "curriculum" && (
                                <div className="curiculam">
                                    <h2 className="border-l border-primary pl-4 text-2xl font-bold mt-8">
                                        কোর্স কারিকুলাম
                                    </h2>
                                    <ul className="mt-4 text-lg grid grid-cols-2 lg:grid-cols-4 text-gray-600">
                                        <li className="flex items-center gap-2">
                                            <span className="rounded -mt-1 w-[12px] h-[12px] bg-gray-600 inline-block"></span>
                                            <span className="block">HTML</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="rounded -mt-1 w-[12px] h-[12px] bg-gray-600 inline-block"></span>
                                            <span className="block">HTML</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="rounded -mt-1 w-[12px] h-[12px] bg-gray-600 inline-block"></span>
                                            <span className="block">HTML</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="rounded -mt-1 w-[12px] h-[12px] bg-gray-600 inline-block"></span>
                                            <span className="block">HTML</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="rounded -mt-1 w-[12px] h-[12px] bg-gray-600 inline-block"></span>
                                            <span className="block">HTML</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="rounded -mt-1 w-[12px] h-[12px] bg-gray-600 inline-block"></span>
                                            <span className="block">HTML</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="rounded -mt-1 w-[12px] h-[12px] bg-gray-600 inline-block"></span>
                                            <span className="block">HTML</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="rounded -mt-1 w-[12px] h-[12px] bg-gray-600 inline-block"></span>
                                            <span className="block">HTML</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="rounded -mt-1 w-[12px] h-[12px] bg-gray-600 inline-block"></span>
                                            <span className="block">HTML</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="rounded -mt-1 w-[12px] h-[12px] bg-gray-600 inline-block"></span>
                                            <span className="block">HTML</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="rounded -mt-1 w-[12px] h-[12px] bg-gray-600 inline-block"></span>
                                            <span className="block">HTML</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="rounded -mt-1 w-[12px] h-[12px] bg-gray-600 inline-block"></span>
                                            <span className="block">HTML</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="rounded -mt-1 w-[12px] h-[12px] bg-gray-600 inline-block"></span>
                                            <span className="block">HTML</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="rounded -mt-1 w-[12px] h-[12px] bg-gray-600 inline-block"></span>
                                            <span className="block">HTML</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="rounded -mt-1 w-[12px] h-[12px] bg-gray-600 inline-block"></span>
                                            <span className="block">HTML</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="rounded -mt-1 w-[12px] h-[12px] bg-gray-600 inline-block"></span>
                                            <span className="block">HTML</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="rounded -mt-1 w-[12px] h-[12px] bg-gray-600 inline-block"></span>
                                            <span className="block">HTML</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="rounded -mt-1 w-[12px] h-[12px] bg-gray-600 inline-block"></span>
                                            <span className="block">HTML</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="rounded -mt-1 w-[12px] h-[12px] bg-gray-600 inline-block"></span>
                                            <span className="block">HTML</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="rounded -mt-1 w-[12px] h-[12px] bg-gray-600 inline-block"></span>
                                            <span className="block">HTML</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="rounded -mt-1 w-[12px] h-[12px] bg-gray-600 inline-block"></span>
                                            <span className="block">HTML</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="rounded -mt-1 w-[12px] h-[12px] bg-gray-600 inline-block"></span>
                                            <span className="block">HTML</span>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
