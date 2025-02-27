import React from "react";

export default function Contact() {
    return (
        <div className="mt-[80px]">
            <div className="container mx-auto">
                <div className="grid grid-cols-2 gap-8">
                    <div>
                        <iframe
                            className="w-full h-full"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.0905007216297!2d90.47117617589616!3d23.708461990383977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b70054decb79%3A0x5cd9f2b094411fd2!2sAhmad&#39;s%20Education!5e0!3m2!1sen!2sbd!4v1738044175691!5m2!1sen!2sbd"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                    <div>
                        <h2 className="text-[36px] font-semibold mb-[15px]">
                            আমাদের সাথে যোগাযোগ করুন
                        </h2>
                        <p className="text-[18px] mb-[50px]">
                            Lorem Ipsum হল মুদ্রণ এবং টাইপসেটিং শিল্পের ডামি
                            পাঠ্য। লোরেম ইপসাম 1500 এর দশক থেকে শিল্পের মানক
                            ডামি টেক্সট হয়েছে, যখন একটি অজানা প্রিন্টার টাইপের
                            একটি গ্যালি নিয়েছিল এবং একটি টাইপ নমুনা
                        </p>
                        <form>
                            <div className="mb-5">
                                <label
                                    htmlFor="name"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    আপনার নাম*
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="এখানে লিখুন"
                                />
                                <div className="grid grid-cols-2 gap-5 mt-5">
                                    <div>
                                        <label
                                            htmlFor="phone"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            ফোন নম্বর*
                                        </label>
                                        <input
                                            type="text"
                                            name="phone"
                                            id="phone"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="এখানে লিখুন"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            আপনার ইমেইল*
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="এখানে লিখুন"
                                        />
                                    </div>
                                </div>

                                <div className="mt-5">
                                    <label
                                        htmlFor="message"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        আপনি কোন কোর্স টি করতে চান ?*
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="4"
                                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="বিস্তারিত লিখুন ..."
                                    ></textarea>
                                </div>
                                <button className="bg-primary text-white px-6 py-3 font-semibold rounded-lg mt-5">
                                    মেসেজ সেন্ট করুন
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
