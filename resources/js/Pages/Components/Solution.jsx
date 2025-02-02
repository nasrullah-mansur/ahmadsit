import React from "react";

export default function Solution() {
    const domain = window.location.origin;
    return (
        <div className="px-3 max-w-screen-xl mx-auto">
            <div className="container mx-auto mt-[80px]">
                <div className="max-w-[860px] mx-auto text-center">
                    <h2 className="text-[48px] font-semibold mb-[15px]">
                        এক্সক্লুসিভ সলিউশনস
                    </h2>
                    <p className="text-[18px] mb-[50px]">
                        Lorem Ipsum হল মুদ্রণ এবং টাইপসেটিং শিল্পের ডামি পাঠ্য।
                        লোরেম ইপসাম 1500 এর দশক থেকে শিল্পের মানক ডামি টেক্সট
                        হয়েছে, যখন একটি অজানা প্রিন্টার টাইপের একটি গ্যালি
                        নিয়েছিল এবং একটি টাইপ নমুনা বই তৈরি করতে এটিকে
                        স্ক্র্যাম্বল করেছিল। এটা আছে
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                    <div className="border-[#F2F2F2] border-[15px] rounded-[15px] p-[15px] ">
                        <div className="flex items-center">
                            <div className="w-[100px] h-[100px] rotate-[45deg] bg-[#D300A6] rounded-full">
                                <div className="w-[100px] h-[100px] bg-[#fff] rounded-full -ms-2 flex justify-center items-center">
                                    <img
                                        className="-rotate-[45deg]"
                                        src={`${domain}/images/career.png`}
                                        alt="students"
                                    />
                                </div>
                            </div>
                            <h4 className="text-[22px] font-semibold ml-[15px]">
                                ক্যারিয়ার প্লেসমেন্ট
                            </h4>
                        </div>
                        <p className="text-[18px] text-[#3D3D3D] mt-[30px]">
                            Lorem Ipsum হল মুদ্রণ এবং টাইপসেটিং শিল্পের ডামি
                            পাঠ্ লোরেম ইপসাম 1500 এর দশক থেকে শিল্পের মানক ডামি
                            টেক্সট হয়েছে, যখন একটি অজানা প্রিন্টার টাইপের একটি
                            গ্যালি নিয়েছিল এবং একটি টাইপ নমুনা বই তৈরি করতে
                            এটিকে স্ক্র্যাম্বল করেছিল। এটা আছে
                        </p>
                    </div>
                    <div className="border-[#F2F2F2] border-[15px] rounded-[15px] p-[15px] ">
                        <div className="flex items-center">
                            <div className="w-[100px] h-[100px] rotate-[45deg] bg-[#0034E0] rounded-full">
                                <div className="w-[100px] h-[100px] bg-[#fff] rounded-full -ms-2 flex justify-center items-center">
                                    <img
                                        className="-rotate-[45deg]"
                                        src={`${domain}/images/help.png`}
                                        alt="students"
                                    />
                                </div>
                            </div>
                            <h4 className="text-[22px] font-semibold ml-[15px]">
                                আজীবন সহায়তা
                            </h4>
                        </div>
                        <p className="text-[18px] text-[#3D3D3D] mt-[30px]">
                            Lorem Ipsum হল মুদ্রণ এবং টাইপসেটিং শিল্পের ডামি
                            পাঠ্ লোরেম ইপসাম 1500 এর দশক থেকে শিল্পের মানক ডামি
                            টেক্সট হয়েছে, যখন একটি অজানা প্রিন্টার টাইপের একটি
                            গ্যালি নিয়েছিল এবং একটি টাইপ নমুনা বই তৈরি করতে
                            এটিকে স্ক্র্যাম্বল করেছিল। এটা আছে
                        </p>
                    </div>
                    <div className="border-[#F2F2F2] border-[15px] rounded-[15px] p-[15px] ">
                        <div className="flex items-center">
                            <div className="w-[100px] h-[100px] rotate-[45deg] bg-[#BB0AF9] rounded-full">
                                <div className="w-[100px] h-[100px] bg-[#fff] rounded-full -ms-2 flex justify-center items-center">
                                    <img
                                        className="-rotate-[45deg]"
                                        src={`${domain}/images/video.png`}
                                        alt="students"
                                    />
                                </div>
                            </div>
                            <h4 className="text-[22px] font-semibold ml-[15px]">
                                ভিডিও রেকর্ড ক্লাস
                            </h4>
                        </div>
                        <p className="text-[18px] text-[#3D3D3D] mt-[30px]">
                            Lorem Ipsum হল মুদ্রণ এবং টাইপসেটিং শিল্পের ডামি
                            পাঠ্ লোরেম ইপসাম 1500 এর দশক থেকে শিল্পের মানক ডামি
                            টেক্সট হয়েছে, যখন একটি অজানা প্রিন্টার টাইপের একটি
                            গ্যালি নিয়েছিল এবং একটি টাইপ নমুনা বই তৈরি করতে
                            এটিকে স্ক্র্যাম্বল করেছিল। এটা আছে
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
