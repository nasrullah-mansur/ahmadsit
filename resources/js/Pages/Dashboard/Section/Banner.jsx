import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useForm } from "@inertiajs/react";

export default function Banner({ banner }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        subtitle: banner ? banner.subtitle : "",
        title: banner ? banner.title : "",
        details: banner ? banner.details : "",
        image: null,
        iframe: banner ? banner.iframe : "",
    });

    console.log(errors);

    const submit = (e) => {
        e.preventDefault();

        post(route("banner.update"));
    };
    return (
        <AuthenticatedLayout>
            <h1 className="text-3xl font-bold dark:text-white">
                Banner Section
            </h1>
            <form className="mt-8" onSubmit={submit}>
                <div>
                    <label
                        htmlFor="subtitle"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Subtitle Here
                    </label>
                    <input
                        type="text"
                        id="subtitle"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        name="subtitle"
                        value={data.subtitle}
                        onChange={(e) => setData("subtitle", e.target.value)}
                    />
                    <small className="text-red-500 font-semibold ml-2">
                        {errors.subtitle}
                    </small>
                </div>
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
                        onChange={(e) => setData("image", e.target.files[0])}
                    />
                    <small className="text-red-500 font-semibold ml-2">
                        {errors.image}
                    </small>
                </div>
                <div>
                    <label
                        htmlFor="iframe"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        iframe Here
                    </label>
                    <input
                        type="text"
                        id="name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        name="iframe"
                        value={data.iframe}
                        onChange={(e) => setData("iframe", e.target.value)}
                    />
                    <small className="text-red-500 font-semibold ml-2">
                        {errors.iframe}
                    </small>
                </div>
                <button className="py-2 px-12 rounded-lg text-white flex justify-center items-center bg-green-600">
                    Save
                </button>
            </form>
        </AuthenticatedLayout>
    );
}
