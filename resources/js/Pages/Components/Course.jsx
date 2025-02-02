import { Link } from "@inertiajs/react";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";

export default function Course({ courses }) {
    const domain = window.location.origin;

    return (
        <div className="mt-[80px] px-3 max-w-screen-xl mx-auto">
            <div className="container mx-auto">
                <div className="text-center max-w-[875px] mx-auto">
                    <h2 className="text-[26px] lg:text-[36px] font-bold mb-[18px]">
                        আমাদের জনপ্রিয় কোর্স সমূহ
                    </h2>
                    <p className="text-[#3D3D3D] mb-[50px] ">
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
                                    src={domain + "/uploads/" + course.image}
                                    alt="Web design and development"
                                />

                                <div className="px-4 pb-4 ">
                                    <h3 className="text-[22px] font-semibold mt-[20px]">
                                        {course.title}
                                    </h3>

                                    <div className="flex w-full items-center mt-[15px]">
                                        <p>কোর্স ফি - {course.courseFee}৳</p>
                                        <FaArrowRightLong className="mx-4" />
                                        <p>মেয়াদ - {course.courseDuration}</p>
                                    </div>

                                    <Link
                                        href={route(
                                            "courses.view",
                                            course.slug
                                        )}
                                        className="flex w-full bg-gradient-to-r from-purple-500 to-pink-500 justify-center items-center py-2 rounded-lg mt-[50px] text-white"
                                    >
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
