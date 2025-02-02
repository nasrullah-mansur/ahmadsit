import { IoMdStarOutline } from "react-icons/io";
import { MdOutlineStar } from "react-icons/md";

export default function PageBanner({ course }) {
    const domain = window.location.origin;
    return (
        <div className="px-5 max-w-screen-xl mx-auto">
            <div className="grid grid-col-1 lg:grid-cols-2 items-center gap-6 container mx-auto mt-[120px]">
                <div className="order-2 lg:order-1">
                    <h1 className="flex text-[26px] lg:text-[36px] font-bold items-center">
                        <IoMdStarOutline className="-mt-2" />
                        <span className="ml-2">{course.title}</span>
                    </h1>
                    <div className="flex items-center mt-2">
                        <div className="flex items-center">
                            <MdOutlineStar className="text-primary" />
                            <MdOutlineStar className="text-primary" />
                            <MdOutlineStar className="text-primary" />
                            <MdOutlineStar className="text-primary" />
                            <MdOutlineStar className="text-primary" />
                        </div>

                        <p className="font-bangla text-lg font-semibold ml-3">
                            {course.studentCount}+ শিক্ষার্থী
                        </p>
                    </div>
                    <p className="mt-3">{course.details}</p>
                    <div className="grid gap-3 mt-8 grid-cols-1 lg:grid-cols-2 items-center">
                        <div className="border rounded-sm text-center p-2">
                            <span className="block">কোর্স ফি</span>
                            <span className="block font-semibold">
                                ৳ {course.courseFee}
                            </span>
                        </div>
                        <div className="border rounded-sm text-center p-2">
                            <span className="block">কোর্সের মেয়াদ</span>
                            <span className="block font-semibold">
                                {course.courseDuration}
                            </span>
                        </div>
                        <div className="border rounded-sm text-center p-2">
                            <span className="block">লেকচার</span>
                            <span className="block font-semibold">
                                {course.courseLecture}
                            </span>
                        </div>
                        <div className="border rounded-sm text-center p-2">
                            <span className="block">প্রাকটিক্যাল প্রজেক্ট</span>
                            <span className="block font-semibold">
                                {course.courseProject}
                            </span>
                        </div>
                    </div>
                    <p className="bg-gradient-to-r from-purple-500 to-pink-500 font-semibold px-5 py-3 rounded mt-5 text-center text-white">
                        ভর্তির জন্য যোগাযোগ : {course.phone}
                    </p>
                </div>

                <div className="lg:py-0 order-1 lg:order-2 mb-5 lg:mb-0">
                    <div
                        style={{
                            backgroundImage: `url('${domain}/images/bg-design-2.png')`,
                            backgroundSize: "100% 100%",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                        }}
                        className="relative bg-center bg-contain bg-no-repeat"
                    >
                        <div className="px-5 lg:py-8">
                            <div>
                                <img
                                    className="w-full"
                                    src={`${domain}/uploads/${course.image}`}
                                    alt="Ahmad's IT Institute"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
