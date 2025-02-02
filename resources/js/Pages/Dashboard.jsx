import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React from "react";

export default function Dashboard() {
    return (
        <AuthenticatedLayout>
            <h1>Dashboard</h1>
        </AuthenticatedLayout>
    );
}
