import React from "react";

export default function AnotherCourse() {
    return (
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
                                href={route("courses.view", course.slug)}
                                className="flex w-full bg-gradient-to-r from-purple-500 to-pink-500 justify-center items-center py-2 rounded-lg mt-[50px] text-white"
                            >
                                বিস্তারিত দেখুন <FaChevronRight />
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
