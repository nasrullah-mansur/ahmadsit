import GuestLayout from "@/Layouts/GuestLayout";
import Course from "@/Pages/Components/Course";
import React from "react";

export default function Index() {
    return (
        <GuestLayout>
            <div className="mt-[120px]">
                <Course />
            </div>
        </GuestLayout>
    );
}
