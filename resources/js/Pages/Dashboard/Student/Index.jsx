import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function Student() {
    const students = [
        {
            id: 1,
            orderId: "123456",
            name: "nasrullah mansur",
            email: "nasrullah@gmail.com",
            course_name: "web design",
            amount: 100,
            pay_by: "cach",
        },
    ];

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
                        <tbody></tbody>
                    </table>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
