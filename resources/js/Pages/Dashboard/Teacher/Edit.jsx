import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useForm } from "@inertiajs/react";
export default function Edit({ teacher }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: teacher.name,
        image: null,
        title: teacher.title,
        details: teacher.details,
    });

    console.log(errors);

    const submit = (e) => {
        e.preventDefault();

        post(route("teacher.update", teacher.id));
    };

    return (
        <AuthenticatedLayout>
            <h1 className="text-3xl font-bold">Create Teacher</h1>
            <div className="mt-[50px] p-4 bg-gray-100">
                <form onSubmit={submit}>
                    <div>
                        <label
                            htmlFor="name"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Name Here
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            name="title"
                            value={data.name}
                            onChange={(e) => setData("name", e.target.value)}
                        />
                        <small className="text-red-500 font-semibold ml-2">
                            {errors.name}
                        </small>
                    </div>
                    <div>
                        <label
                            htmlFor="title"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Title Here
                        </label>
                        <input
                            type="text"
                            id="title"
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
                            htmlFor="details"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Details Here
                        </label>
                        <input
                            type="text"
                            id="details"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            name="details"
                            value={data.details}
                            onChange={(e) => setData("details", e.target.value)}
                        />
                        <small className="text-red-500 font-semibold ml-2">
                            {errors.details}
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

                    <button className="py-2 px-12 rounded-lg text-white flex justify-center items-center bg-green-600">
                        Save
                    </button>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}
