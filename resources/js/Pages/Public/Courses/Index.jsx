import GuestLayout from "@/Layouts/GuestLayout";
import Course from "@/Pages/Components/Course";
import React from "react";

export default function Index({ courses }) {
    return (
        <GuestLayout>
            <div className="mt-[120px]">
                <Course courses={courses} />
            </div>
        </GuestLayout>
    );
}
