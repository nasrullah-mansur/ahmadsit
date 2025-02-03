import { useState } from "react";
import CourseReviews from "./CourseReviews";

export default function CourseViewBody({ courseCurriculum, details }) {
    const [section, setSection] = useState("overview");

    return (
        <>
            <div className="py-[80px] bg-[#f2f2f2] mt-[50px] ">
                <div className="container mx-auto max-w-screen-xl">
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
                                    <p
                                        dangerouslySetInnerHTML={{
                                            __html: details,
                                        }}
                                        className="mt-4 text-lg text-gray-600"
                                    ></p>
                                </div>
                            )}

                            {section === "curriculum" && (
                                <div className="curiculam">
                                    <h2 className="border-l border-primary pl-4 text-2xl font-bold mt-8">
                                        কোর্স কারিকুলাম
                                    </h2>
                                    <ul className="mt-4 text-lg grid grid-cols-2 lg:grid-cols-4 text-gray-600">
                                        {courseCurriculum
                                            .split(",")
                                            .map((item, index) => (
                                                <li
                                                    key={index}
                                                    className="flex items-center gap-2 mb-3"
                                                >
                                                    <span className="rounded -mt-1 w-[12px] h-[12px] bg-gray-600 inline-block"></span>
                                                    <span className="block">
                                                        {item}
                                                    </span>
                                                </li>
                                            ))}
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
