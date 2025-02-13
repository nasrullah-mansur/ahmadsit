import GuestLayout from "@/Layouts/GuestLayout";
import React from "react";
import Select from "react-select";

export default function Enroll() {
    const options = [
        { value: "chocolate", label: "Chocolate" },
        { value: "strawberry", label: "Strawberry" },
        { value: "vanilla", label: "Vanilla" },
    ];

    const styles = {
        control: (baseStyles, state) => ({
            ...baseStyles,
            color: "white",
        }),
    };

    return (
        <GuestLayout>
            <div className="mt-[120px]"></div>
            <h2 className="text-[26px] lg:text-[36px] font-bold mb-[18px] text-center">
                আমাদের জনপ্রিয় কোর্স সমূহ
            </h2>
            <p className="max-w-screen-md text-center mx-auto">
                অনলাইনে ভর্তি হতে নিচের ফর্মটি সঠিক তথ্য দিয়ে ইংরেজিতে পুরণ করুন
            </p>
            <form className="rounded-md max-w-screen-lg p-[50px] mx-auto my-[60px] bg-gradient-to-r from-purple-500 to-pink-500 transition-all items-center  font-semibold">
                <div className="grid gap-x-4 grid-cols-2 ">
                    <div className="mb-6">
                        <label
                            htmlFor="name"
                            className="block mb-2 text-sm font-medium text-white "
                        >
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="rounded-md block w-full px-4 py-2 text-white border border-white bg-transparent focus:border-white"
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="f-name"
                            className="block mb-2 text-sm font-medium text-white dark:text-white"
                        >
                            Father's Name
                        </label>
                        <input
                            type="text"
                            id="f-name"
                            className="rounded-md block w-full px-4 py-2 text-white border border-white bg-transparent focus:border-white"
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="f-name"
                            className="block mb-2 text-sm font-medium text-white dark:text-white"
                        >
                            Phone Number
                        </label>
                        <input
                            type="text"
                            id="f-name"
                            className=" rounded-md block w-full px-4 py-2 text-white border border-white bg-transparent focus:border-white"
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-white dark:text-white"
                        >
                            Email Address
                        </label>
                        <input
                            type="text"
                            id="email"
                            className="rounded-md block w-full px-4 py-2 text-white border border-white bg-transparent focus:border-white"
                        />
                    </div>

                    <div className="mb-6 col-span-2">
                        <label
                            htmlFor="countries"
                            className="block mb-2 text-sm font-medium text-white dark:text-white"
                        >
                            Select a course
                        </label>

                        <Select
                            options={options}
                            styles={styles}
                            isSearchable={false}
                        />
                    </div>
                    <div className="mb-6 col-span-2">
                        <label
                            htmlFor="address"
                            className="block mb-2 text-sm font-medium text-white dark:text-white"
                        >
                            Your Address
                        </label>
                        <input
                            type="text"
                            id="address"
                            className="rounded-md block w-full px-4 py-2 text-white border border-white bg-transparent focus:border-white"
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="bg-white px-5 py-2 hover:bg-pink-600 hover:text-white"
                        >
                            Enroll Now and Pay Fee
                        </button>
                    </div>
                </div>
            </form>
        </GuestLayout>
    );
}
