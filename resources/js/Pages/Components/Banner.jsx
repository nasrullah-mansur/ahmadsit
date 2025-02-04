import CourseBtn from "./CourseBtn";
import { FaPlay } from "react-icons/fa";
import PopupVideo from "./PopupVideo";
import { useState } from "react";

export default function Banner({ bannerSection }) {
    const [isOpen, setIsOpen] = useState(false);
    const domain = window.location.origin;
    return (
        <div
            className="pt-[90px] max-w-screen-xl mx-auto"
            style={{
                backgroundImage: `url('${domain}/images/${
                    bannerSection ? bannerSection.image : "banner-bg.png"
                } ')`,
            }}
        >
            {isOpen && (
                <PopupVideo
                    videoLink={
                        bannerSection
                            ? bannerSection.iframe
                            : "https://www.youtube.com/embed/5TRoZSTCRwA?si=0L6mqIKossGS_aTu"
                    }
                    isOpen={() => setIsOpen(!isOpen)}
                />
            )}
            <div className="container mx-auto ">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center px-5">
                    <div className="py-10">
                        <div className="flex items-center">
                            <img
                                src={`${domain}/images/stars.png`}
                                alt="stars"
                            />
                            <span className="ml-3 text-md lg:text-xl font-semibold">
                                {bannerSection
                                    ? bannerSection.subtitle
                                    : "স্বাগতম! আপনাকে পেয়ে আমরা আনন্দিত"}
                            </span>
                        </div>

                        <h1
                            dangerouslySetInnerHTML={{
                                __html: bannerSection
                                    ? bannerSection.title
                                    : "আপনাকে দক্ষ করতে আপনার পাশে আহমাদ’স আইটি ইনিস্টিটিউট",
                            }}
                            className="text-[26px] lg:text-[36px] font-bold banner-span-primary"
                        ></h1>
                        <p className="text-[#3D3D3D]">
                            আহমাদ’স আইটি ইনিস্টিটিউট আপনার ক্যারিয়ার গড়ার
                            নির্ভরযোগ্য ঠিকানা! আমরা শেখাই ওয়েব ডেভেলপমেন্ট,
                            ডিজিটাল মার্কেটিং, গ্রাফিক ডিজাইন ও ভিডিও এডিটিং, যা
                            আপনাকে দক্ষ করে তুলবে ফ্রিল্যান্সিং ও চাকরির বাজারে।
                            আজই যোগ দিন এবং দক্ষতা অর্জন করুন!
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
                                        className="rounded-lg"
                                        src={`${domain}/uploads/${
                                            bannerSection
                                                ? bannerSection.image
                                                : "banner-img.jpg"
                                        }`}
                                        alt="Ahmad's IT Institute"
                                    />
                                    <div
                                        onClick={() => setIsOpen(true)}
                                        className="absolute top-1/2 left-1/2 w-[56px] h-[56px] rounded-full bg-white flex justify-center items-center -translate-x-1/2 -translate-y-1/2 outline outline-offset-2 outline-8 cursor-pointer outline-[#D7CDDB]"
                                    >
                                        <button>
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
