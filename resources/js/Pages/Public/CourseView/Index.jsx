import GuestLayout from "@/Layouts/GuestLayout";
import React from "react";
import PageBanner from "./PageBanner";
import CourseViewBody from "./CourseViewBody";
import CourseReviews from "./CourseReviews";

export default function CourseView({ course }) {
    return (
        <GuestLayout>
            <PageBanner course={course} />
            <CourseViewBody
                details={course.details}
                courseCurriculum={course.courseCurriculum}
            />
            <CourseReviews />
        </GuestLayout>
    );
}
