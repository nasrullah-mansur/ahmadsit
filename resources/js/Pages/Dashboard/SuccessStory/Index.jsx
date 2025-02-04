import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link, router } from "@inertiajs/react";

export default function Index({ stories }) {
    const domain = window.location.origin;

    const handleDelete = (id) => {
        let con = confirm("are you sure you want to delete it?");

        if (con) {
            router.get(route("success.story.delete", id));
        }
    };

    return (
        <AuthenticatedLayout>
            <h1 className="text-3xl font-bold dark:text-white">
                All Success Story
            </h1>
            <div className="mt-[50px] p-4 bg-gray-100">
                <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Image
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Iframe
                                </th>

                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {stories?.map((story) => (
                                <tr
                                    key={story.id}
                                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
                                >
                                    <td className="px-6 py-4">
                                        <img
                                            className="w-24"
                                            src={`${domain}/uploads/${story.image}`}
                                            alt="alt"
                                        />
                                    </td>
                                    <td className="px-6 py-4">
                                        <span>{story.iframe}</span>
                                    </td>

                                    <td className="px-6 py-4">
                                        <div className="flex gap-3">
                                            <Link
                                                href={route(
                                                    "success.story.edit",
                                                    story.id
                                                )}
                                                className="px-4 py-2 rounded-sm bg-green-600 text-white"
                                            >
                                                Edit
                                            </Link>
                                            <button
                                                onClick={() =>
                                                    handleDelete(story.id)
                                                }
                                                className="px-4 py-2 rounded-sm bg-red-600 text-white"
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
