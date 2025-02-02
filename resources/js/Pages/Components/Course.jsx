import { Link } from "@inertiajs/react";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";

export default function Course() {
    const domain = window.location.origin;

    const courses = [
        {
            id: 1,
            title: "প্রফেশনাল ওয়েব ডেভেলপমেন্ট",
            fee: 6500,
            duration: "10 মাস",
            image: `${domain}/images/web-development.png`,
        },
        {
            id: 2,
            title: "প্রফেশনাল ওয়েব ডিজাইন",
            fee: 6500,
            duration: "10 মাস",
            image: `${domain}/images/web-design.png`,
        },
        {
            id: 3,
            title: "ডিজিটাল মার্কেটিং",
            fee: 6500,
            duration: "7 মাস",
            image: `${domain}/images/digital-marketing.png`,
        },
        {
            id: 4,
            title: "প্রফেশনাল ওয়েব অ্যানালিটিক্স",
            fee: 6500,
            duration: "7 মাস",
            image: `${domain}/images/web analytics.png`,
        },
        {
            id: 5,
            title: "প্রফেশনাল গ্রাফিক ডিজাইন",
            fee: 6500,
            duration: "7 মাস",
            image: `${domain}/images/graphic-design.png`,
        },
        {
            id: 6,
            title: "ভিডিও এডিটিং",
            fee: 6500,
            duration: "7 মাস",
            image: `${domain}/images/video-editing.png`,
        },
    ];

    return (
        <div className="mt-[80px] px-3 max-w-screen-xl mx-auto">
            <div className="container mx-auto">
                <div className="text-center max-w-[875px] mx-auto">
                    <h2 className="text-[48px] font-bold mb-[18px]">
                        আমাদের জনপ্রিয় কোর্স সমূহ
                    </h2>
                    <p className="text-[#3D3D3D] mb-[50px] text-[18px]">
                        আপনার দক্ষতা উন্নত করতে আমরা দিচ্ছি বেশ কয়েকটি বিষয় এর
                        উপর প্রফেশনাল ট্রেনিং। প্রতিটি কোর্স সাজানো হয়েছে
                        হাতে-কলমে শেখার সুযোগ, বাস্তব প্রজেক্ট এবং অভিজ্ঞ
                        মেন্টরদের গাইডলাইনের মাধ্যমে।
                    </p>
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 lg:px-0">
                    {courses.map((course) => (
                        <div
                            key={course.id}
                            className="bg-[#F2F2F2] p-4 rounded-[20px]"
                        >
                            <div className="bg-white rounded-[20px]">
                                <img
                                    className="w-full"
                                    src={course.image}
                                    alt="Web design and development"
                                />

                                <div className="px-4 pb-4 ">
                                    <h3 className="text-[22px] font-semibold mt-[20px]">
                                        {course.title}
                                    </h3>

                                    <div className="flex w-full items-center mt-[15px]">
                                        <p>কোর্স ফি - {course.fee}৳ (মাসিক)</p>
                                        <FaArrowRightLong className="mx-4" />
                                        <p>মেয়াদ - {course.duration}</p>
                                    </div>

                                    <Link className="flex w-full bg-gradient-to-r from-purple-500 to-pink-500 justify-center items-center py-2 rounded-lg mt-[50px] text-white">
                                        বিস্তারিত দেখুন <FaChevronRight />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
