import { IoMdStarOutline } from "react-icons/io";
import { MdOutlineStar } from "react-icons/md";

export default function PageBanner() {
    const domain = window.location.origin;
    return (
        <div className="px-5 max-w-screen-xl mx-auto">
            <div className="grid grid-col-1 lg:grid-cols-2 items-center gap-6 container mx-auto mt-[120px]">
                <div className="order-2 lg:order-1">
                    <h1 className="flex text-[26px] lg:text-[40px] font-bold items-center">
                        <IoMdStarOutline className="-mt-2" />
                        <span className="ml-2">
                            প্রফেশনাল ওয়েব ডেভেলপমেন্ট
                        </span>
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
                            ২০০০+ শিক্ষার্থী
                        </p>
                    </div>
                    <p className="mt-3">
                        আপনি যদি একটি আধুনিক কাঠামো আয়ত্ত করতে চান এবং
                        বিশ্বব্যাপী কোম্পানিগুলির সাথে সুযোগ খুঁজছেন, তাহলে
                        ASP.NET Core আপনার আদর্শ পছন্দ হতে পারে এই কোর্সের জন্য
                        মৌলিক প্রোগ্রামিং জ্ঞান প্রয়োজন।
                    </p>
                    <div className="grid gap-3 mt-8 grid-cols-1 lg:grid-cols-2 items-center">
                        <div className="border rounded-sm text-center p-2">
                            <span className="block">কোর্স ফি</span>
                            <span className="block font-semibold">
                                ৳ ১০০০০ (মাসিক)
                            </span>
                        </div>
                        <div className="border rounded-sm text-center p-2">
                            <span className="block">কোর্সের মেয়াদ</span>
                            <span className="block font-semibold">৮ মাস</span>
                        </div>
                        <div className="border rounded-sm text-center p-2">
                            <span className="block">লেকচার</span>
                            <span className="block font-semibold">৫০ টি</span>
                        </div>
                        <div className="border rounded-sm text-center p-2">
                            <span className="block">প্রাকটিক্যাল প্রজেক্ট</span>
                            <span className="block font-semibold">৩০০ টি</span>
                        </div>
                    </div>
                    <p className="bg-gradient-to-r from-purple-500 to-pink-500 font-semibold px-5 py-3 rounded mt-5 text-center text-white">
                        ভর্তির জন্য যোগাযোগ : 01829878788
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
    );
}
