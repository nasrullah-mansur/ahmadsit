import GuestLayout from "@/Layouts/GuestLayout";
import { useForm } from "@inertiajs/react";
import { useState } from "react";
import Select from "react-select";
import { toast, ToastContainer } from "react-toastify";

export default function Enroll({ courses }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        f_name: "",
        phone: "",
        email: "",
        course_id: null,
        address: "",
        fee: 0,
    });

    function isObjectValid(obj) {
        return Object.values(obj).every(
            (value) => value !== "" && value !== null && value !== undefined
        );
    }

    const options = courses.map((item) => {
        return {
            value: item.id,
            label: item.title,
        };
    });

    const styles = {
        control: (baseStyles, state) => ({
            ...baseStyles,
            color: "white",
        }),
    };

    const clickHandler = (e) => {
        if (!isObjectValid(data)) {
            e.preventDefault();
            toast.error("Please fill out the form first.");
        }
    };

    const handleChange = (e) => {
        const courseFee = courses.find((co) => co.id == e.value)?.courseFee;
        setData("fee", courseFee);

        setData("course_id", e.value);
    };

    return (
        <GuestLayout>
            <ToastContainer position="bottom-right" />
            <div className="mt-[120px]"></div>
            <h2 className="text-[26px] lg:text-[36px] font-bold mb-[18px] text-center">
                অনলাইন ভর্তি
            </h2>
            <p className="max-w-screen-md text-center mx-auto">
                অনলাইনে ভর্তি হতে নিচের ফর্মটি সঠিক তথ্য দিয়ে ইংরেজিতে পুরণ করুন
            </p>
            <div className="mx-3">
                <form
                    action="/pay"
                    method="post"
                    className="rounded-md max-w-screen-lg p-[50px] mx-auto my-[60px] bg-gradient-to-r from-purple-500 to-pink-500 transition-all items-center  font-semibold"
                >
                    <input
                        type="hidden"
                        name="fee"
                        value={String(data.fee).replace(/\D/g, "")}
                        onChange={(e) => setData("fee", e.target.value)}
                    />
                    <div className="grid gap-x-4 grid-cols-2 ">
                        <div className="mb-6 col-span-2 lg:col-span-1">
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
                                name="name"
                                value={data.name}
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                            />
                            <small>{errors.name}</small>
                        </div>
                        <div className="mb-6 col-span-2 lg:col-span-1">
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
                                name="f_name"
                                value={data.f_name}
                                onChange={(e) =>
                                    setData("f_name", e.target.value)
                                }
                            />
                        </div>
                        <div className="mb-6 col-span-2 lg:col-span-1">
                            <label
                                htmlFor="phone"
                                className="block mb-2 text-sm font-medium text-white dark:text-white"
                            >
                                Phone Number
                            </label>
                            <input
                                type="text"
                                id="phone"
                                className=" rounded-md block w-full px-4 py-2 text-white border border-white bg-transparent focus:border-white"
                                name="phone"
                                value={data.phone}
                                onChange={(e) =>
                                    setData("phone", e.target.value)
                                }
                            />
                        </div>
                        <div className="mb-6 col-span-2 lg:col-span-1">
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
                                name="email"
                                value={data.email}
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
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
                                name="course_id"
                                options={options}
                                styles={styles}
                                isSearchable={false}
                                onChange={handleChange}
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
                                name="address"
                                value={data.address}
                                onChange={(e) =>
                                    setData("address", e.target.value)
                                }
                            />
                        </div>
                        <div className="col-span-2 mb-4 text-white">
                            Course Fee: {String(data.fee).replace(/\D/g, "")} TK
                        </div>
                        <div className="col-span-2">
                            <button
                                onClick={clickHandler}
                                type="submit"
                                className="bg-white px-5 py-2 hover:bg-pink-600 hover:text-white"
                            >
                                Enroll Now and Pay Fee
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </GuestLayout>
    );
}
