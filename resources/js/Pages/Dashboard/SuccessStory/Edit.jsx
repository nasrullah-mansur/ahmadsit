import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useForm } from "@inertiajs/react";
export default function Edit({ courses, success }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        iframe: success.iframe,
        image: null,
        course_id: success.course_id,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("success.story.update", success.id));
    };

    return (
        <AuthenticatedLayout>
            <h1 className="text-3xl font-bold">Create Story</h1>
            <div className="mt-[50px] p-4 bg-gray-100">
                <form onSubmit={submit}>
                    <div>
                        <label
                            htmlFor="iframe"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Iframe Here
                        </label>
                        <input
                            type="text"
                            id="iframe"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            name="title"
                            value={data.iframe}
                            onChange={(e) => setData("iframe", e.target.value)}
                        />
                        <small className="text-red-500 font-semibold ml-2">
                            {errors.iframe}
                        </small>
                    </div>

                    <div>
                        <label
                            htmlFor="image"
                            className="capitalize block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Course image Here
                        </label>
                        <input
                            type="file"
                            id="image"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            name="image"
                            onChange={(e) =>
                                setData("image", e.target.files[0])
                            }
                        />
                        <small className="text-red-500 font-semibold ml-2">
                            {errors.image}
                        </small>
                    </div>
                    <div className="mb-7">
                        <label
                            htmlFor="countries"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Select an option
                        </label>
                        <select
                            onChange={(e) =>
                                setData("course_id", e.target.value)
                            }
                            id="countries"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                            <option value={null} selected>
                                Select One
                            </option>
                            {courses.map((course) => (
                                <option key={course.id} value={course.id}>
                                    {course.title}
                                </option>
                            ))}
                        </select>
                        <small className="text-red-500 font-semibold ml-2">
                            {errors.course_id}
                        </small>
                    </div>

                    <button className="py-2 px-12 rounded-lg text-white flex justify-center items-center bg-green-600">
                        Save
                    </button>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}
