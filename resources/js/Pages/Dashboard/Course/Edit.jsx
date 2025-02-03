import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useForm } from "@inertiajs/react";

export default function Edit({ course }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        title: course.title,
        image: null,
        description: course.description,
        details: course.details,
        studentCount: course.studentCount,
        courseFee: course.courseFee,
        courseDuration: course.courseDuration,
        courseLecture: course.courseLecture,
        courseProject: course.courseProject,
        courseCurriculum: course.courseCurriculum,
        phone: course.phone,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("course.update", course.slug));
    };

    console.log(errors);

    return (
        <AuthenticatedLayout>
            <h1 className="text-3xl font-bold">Create Course</h1>
            <div className="mt-[50px] p-4 bg-gray-100">
                <form onSubmit={submit}>
                    <div>
                        <label
                            htmlFor="name"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Title Here
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            name="title"
                            value={data.title}
                            onChange={(e) => setData("title", e.target.value)}
                        />
                        <small className="text-red-500 font-semibold ml-2">
                            {errors.title}
                        </small>
                    </div>
                    <div>
                        <label
                            htmlFor="description"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Description Here
                        </label>
                        <input
                            type="text"
                            id="description"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            name="description"
                            value={data.description}
                            onChange={(e) =>
                                setData("description", e.target.value)
                            }
                        />
                        <small className="text-red-500 font-semibold ml-2">
                            {errors.description}
                        </small>
                    </div>
                    <div>
                        <label
                            htmlFor="message"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Details here
                        </label>
                        <textarea
                            value={data.details}
                            onChange={(e) => setData("details", e.target.value)}
                            name="details"
                            id="message"
                            rows="4"
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Write your thoughts here..."
                        >
                            {course.details}
                        </textarea>

                        <small className="text-red-500 font-semibold ml-2">
                            {errors.details}
                        </small>
                    </div>
                    <div>
                        <label
                            htmlFor="studentCount"
                            className="capitalize block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            student Count Here
                        </label>
                        <input
                            type="text"
                            id="studentCount"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            name="studentCount"
                            value={data.studentCount}
                            onChange={(e) =>
                                setData("studentCount", e.target.value)
                            }
                        />
                        <small className="text-red-500 font-semibold ml-2">
                            {errors.studentCount}
                        </small>
                    </div>
                    <div>
                        <label
                            htmlFor="courseFee"
                            className="capitalize block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Course Fee Here
                        </label>
                        <input
                            type="text"
                            id="courseFee"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            name="courseFee"
                            value={data.courseFee}
                            onChange={(e) =>
                                setData("courseFee", e.target.value)
                            }
                        />
                        <small className="text-red-500 font-semibold ml-2">
                            {errors.courseFee}
                        </small>
                    </div>
                    <div>
                        <label
                            htmlFor="courseDuration"
                            className="capitalize block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Course duration Here
                        </label>
                        <input
                            type="text"
                            id="courseDuration"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            name="courseDuration"
                            value={data.courseDuration}
                            onChange={(e) =>
                                setData("courseDuration", e.target.value)
                            }
                        />
                        <small className="text-red-500 font-semibold ml-2">
                            {errors.courseDuration}
                        </small>
                    </div>
                    <div>
                        <label
                            htmlFor="courseLecture"
                            className="capitalize block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Course Lecture Here
                        </label>
                        <input
                            type="text"
                            id="courseLecture"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            name="courseLecture"
                            value={data.courseLecture}
                            onChange={(e) =>
                                setData("courseLecture", e.target.value)
                            }
                        />
                        <small className="text-red-500 font-semibold ml-2">
                            {errors.courseLecture}
                        </small>
                    </div>
                    <div>
                        <label
                            htmlFor="courseProject"
                            className="capitalize block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Course project Here
                        </label>
                        <input
                            type="text"
                            id="courseProject"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            name="courseProject"
                            value={data.courseProject}
                            onChange={(e) =>
                                setData("courseProject", e.target.value)
                            }
                        />
                        <small className="text-red-500 font-semibold ml-2">
                            {errors.courseProject}
                        </small>
                    </div>
                    <div>
                        <label
                            htmlFor="courseCurriculum"
                            className="capitalize block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Course curriculum Here
                        </label>
                        <input
                            type="text"
                            id="courseCurriculum"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            name="courseCurriculum"
                            value={data.courseCurriculum}
                            onChange={(e) =>
                                setData("courseCurriculum", e.target.value)
                            }
                        />
                        <small className="text-red-500 font-semibold ml-2">
                            {errors.courseCurriculum}
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
                    <div>
                        <label
                            htmlFor="phone"
                            className="capitalize block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Course phone Here
                        </label>
                        <input
                            value={data.phone}
                            type="text"
                            id="phone"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            name="phone"
                            onChange={(e) => setData("phone", e.target.value)}
                        />
                        <small className="text-red-500 font-semibold ml-2">
                            {errors.phone}
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
