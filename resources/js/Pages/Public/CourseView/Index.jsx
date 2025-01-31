import GuestLayout from "@/Layouts/GuestLayout";
import React from "react";
import PageBanner from "./PageBanner";
import CourseViewBody from "./CourseViewBody";
import CourseReviews from "./CourseReviews";

export default function CourseView() {
    return (
        <GuestLayout>
            <PageBanner />
            <CourseViewBody />
            <CourseReviews />
        </GuestLayout>
    );
}
