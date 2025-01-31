import GuestLayout from "@/Layouts/GuestLayout";
import SuccessHistory from "@/Pages/Components/SuccessHistory";

import { IoMdStarOutline } from "react-icons/io";

export default function Index() {
    const domain = window.location.origin;
    return (
        <GuestLayout>
            <div className="mt-[120px]">
                <div className="px-5">
                    <div className="grid grid-col-1 lg:grid-cols-2 items-center gap-6 container mx-auto mt-[120px]">
                        <div className="order-2 lg:order-1">
                            <h1 className="flex text-[26px] lg:text-[40px] font-bold items-center">
                                <IoMdStarOutline className="-mt-2" />
                                <span className="ml-2">
                                    আমাদের সম্পর্কে জানুন
                                </span>
                            </h1>

                            <p className="mt-3 text-lg">
                                আপনি যদি একটি আধুনিক কাঠামো আয়ত্ত করতে চান এবং
                                বিশ্বব্যাপী কোম্পানিগুলির সাথে সুযোগ খুঁজছেন,
                                তাহলে ASP.NET Core আপনার আদর্শ পছন্দ হতে পারে এই
                                কোর্সের জন্য মৌলিক প্রোগ্রামিং জ্ঞান প্রয়োজন।
                                আপনি যদি একটি আধুনিক কাঠামো আয়ত্ত করতে চান এবং
                                বিশ্বব্যাপী কোম্পানিগুলির সাথে সুযোগ খুঁজছেন,
                                তাহলে ASP.NET Core আপনার আদর্শ পছন্দ হতে পারে এই
                                কোর্সের জন্য মৌলিক প্রোগ্রামিং জ্ঞান প্রয়োজন।
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
                                            src={`${domain}/images/digital-marketing.png`}
                                            alt="Ahmad's IT Institute"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-gray-100 py-10 mt-[50px]">
                <div className="text-center max-w-[875px] mx-auto pt-[40px]">
                    <h2 className="text-[48px] font-bold mb-[18px]">
                        আমাদের দেশসেরা শিক্ষকবৃন্দ
                    </h2>
                    <p className="text-[#3D3D3D] mb-[50px] text-[18px]">
                        আপনার দক্ষতা উন্নত করতে আমরা দিচ্ছি বেশ কয়েকটি বিষয় এর
                        উপর প্রফেশনাল ট্রেনিং। প্রতিটি কোর্স সাজানো হয়েছে
                        হাতে-কলমে শেখার সুযোগ, বাস্তব প্রজেক্ট এবং অভিজ্ঞ
                        মেন্টরদের গাইডলাইনের মাধ্যমে।
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 px-4 lg:grid-cols-3 xl:grid-cols-4 container mx-auto gap-5">
                    <div className=" bg-white border  rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                        <img
                            className="w-full h-64 object-cover object-center rounded-t-lg"
                            src={`${domain}/images/web-design.png`}
                            alt=""
                        />

                        <div className="p-5">
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                নাছরুল্লাহ মানছুর
                            </h5>

                            <small className="block mb-2 font-semibold">
                                Web Developer
                            </small>
                            <p className="mb-3 text-gray-700 dark:text-gray-400">
                                Here are the biggest enterprise technology
                                acquisitions of 2021 so far, in reverse
                                chronological order.
                            </p>
                        </div>
                    </div>
                    <div className=" bg-white border  rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                        <img
                            className="w-full h-64 object-cover object-center rounded-t-lg"
                            src={`${domain}/images/web-design.png`}
                            alt=""
                        />

                        <div className="p-5">
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                নাছরুল্লাহ মানছুর
                            </h5>

                            <small className="block mb-2 font-semibold">
                                Web Developer
                            </small>
                            <p className="mb-3 text-gray-700 dark:text-gray-400">
                                Here are the biggest enterprise technology
                                acquisitions of 2021 so far, in reverse
                                chronological order.
                            </p>
                        </div>
                    </div>
                    <div className=" bg-white border  rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                        <img
                            className="w-full h-64 object-cover object-center rounded-t-lg"
                            src={`${domain}/images/web-design.png`}
                            alt=""
                        />

                        <div className="p-5">
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                নাছরুল্লাহ মানছুর
                            </h5>

                            <small className="block mb-2 font-semibold">
                                Web Developer
                            </small>
                            <p className="mb-3 text-gray-700 dark:text-gray-400">
                                Here are the biggest enterprise technology
                                acquisitions of 2021 so far, in reverse
                                chronological order.
                            </p>
                        </div>
                    </div>
                    <div className=" bg-white border  rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                        <img
                            className="w-full h-64 object-cover object-center rounded-t-lg"
                            src={`${domain}/images/web-design.png`}
                            alt=""
                        />

                        <div className="p-5">
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                নাছরুল্লাহ মানছুর
                            </h5>

                            <small className="block mb-2 font-semibold">
                                Web Developer
                            </small>
                            <p className="mb-3 text-gray-700 dark:text-gray-400">
                                Here are the biggest enterprise technology
                                acquisitions of 2021 so far, in reverse
                                chronological order.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <SuccessHistory />
        </GuestLayout>
    );
}
