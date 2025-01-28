import CourseBtn from "./CourseBtn";
import { FaPlay } from "react-icons/fa";
import PopupVideo from "./PopupVideo";
import { useState } from "react";

export default function Banner() {
    const [isOpen, setIsOpen] = useState(false);
    const domain = window.location.origin;
    return (
        <div
            className="pt-[90px]"
            style={{
                backgroundImage: `url('${domain}/images/banner-bg.png')`,
            }}
        >
            {isOpen && <PopupVideo isOpen={() => setIsOpen(!isOpen)} />}
            <div className="container mx-auto ">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center px-5">
                    <div className="py-10">
                        <div className="flex items-center">
                            <img
                                src={`${domain}/images/stars.png`}
                                alt="stars"
                            />
                            <span className="ml-3 text-md lg:text-xl font-semibold">
                                স্বাগতম! আপনাকে পেয়ে আমরা আনন্দিত
                            </span>
                        </div>
                        <h1 className="text-[32px] lg:text-[46px] font-bold">
                            আপনাকে দক্ষ করতে আপনার পাশে{" "}
                            <span className="text-primary">
                                আহমাদ’স আইটি ইনিস্টিটিউট
                            </span>
                        </h1>
                        <p className="text-[#3D3D3D]">
                            Lorem Ipsum হল মুদ্রণ এবং টাইপসেটিং শিল্পের ডামি
                            পাঠ্য লোরেম ইপসাম 1500 এর দশক থেকে শিল্পের মানক ডামি
                            টেক্সট হয়েছে, যখন একটি অজানা প্রিন্টার টাইপের একটি
                            গ্যালি নিয়েছিল এবং একটি টাইপ নমুনা বই তৈরি করতে
                            এটিকে স্ক্র্যাম্বল করেছিল।
                        </p>
                        <CourseBtn className="mt-6" />
                    </div>
                    <div className="lg:py-10">
                        <div
                            style={{
                                backgroundImage: `url('${domain}/images/bg-design.png')`,
                            }}
                            className="relative bg-center bg-contain bg-no-repeat"
                        >
                            <div className="px-5 lg:py-8">
                                <div>
                                    <img
                                        src={`${domain}/images/banner-img.png`}
                                        alt="Ahmad's IT Institute"
                                    />
                                    <div className="absolute top-1/2 left-1/2 w-[56px] h-[56px] rounded-full bg-white flex justify-center items-center -translate-x-1/2 -translate-y-1/2 outline outline-offset-2 outline-8 cursor-pointer outline-[#D7CDDB]">
                                        <button onClick={() => setIsOpen(true)}>
                                            <FaPlay />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
