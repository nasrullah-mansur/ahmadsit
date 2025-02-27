import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Pagination from "@/Pages/Components/Pagination";
import { useForm } from "@inertiajs/react";

export default function Student({ students }) {
    const { get } = useForm();

    const handleDelete = async (id) => {
        if (confirm("Are you sure you want to delete this student?")) {
            try {
                get(`students/delete/${id}`);
            } catch (error) {
                console.log(error);
            }
        }
    };

    return (
        <AuthenticatedLayout>
            <h1 className="text-3xl font-bold dark:text-white">All Students</h1>

            <div className="mt-[50px] p-4 bg-gray-100">
                <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    ID
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Student Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Phone
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Email
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Status
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Course Name
                                </th>

                                <th scope="col" className="px-6 py-3">
                                    Amount
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Pay By
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {students?.data.map((student) => (
                                <tr
                                    key={student.id}
                                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
                                >
                                    <td className="px-6 py-4">
                                        {student.transaction_id}
                                    </td>
                                    <td className="px-6 py-4">
                                        {student.name}
                                    </td>
                                    <td className="px-6 py-4">
                                        {student.phone}
                                    </td>
                                    <td className="px-6 py-4">
                                        {student.email}
                                    </td>
                                    <td className="px-6 py-4">
                                        <p
                                            className={`font-semibold ${
                                                student.status == "Processing"
                                                    ? "text-green-600"
                                                    : "text-red-600"
                                            }`}
                                        >
                                            {student.status}
                                        </p>
                                    </td>
                                    <td className="px-6 py-4">
                                        {student.course.title}
                                    </td>
                                    <td className="px-6 py-4">
                                        {student.amount}
                                    </td>
                                    <td className="px-6 py-4">
                                        {student.pay_by}
                                    </td>
                                    <td className="px-6 py-0">
                                        <button
                                            onClick={() =>
                                                handleDelete(student.id)
                                            }
                                            className="bg-red-500 text-white px-2 py-1 rounded-md"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <Pagination
                        data={students.links}
                        from={students.from}
                        to={students.to}
                        total={students.total}
                        current_page={students.current_page}
                    />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
