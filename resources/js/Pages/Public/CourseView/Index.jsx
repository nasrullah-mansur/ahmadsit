import GuestLayout from "@/Layouts/GuestLayout";
import React from "react";
import PageBanner from "./PageBanner";
import CourseViewBody from "./CourseViewBody";
import CourseReviews from "./CourseReviews";
import SuccessHistory from "@/Pages/Components/SuccessHistory";

export default function CourseView({ course, stories }) {
    return (
        <GuestLayout>
            <PageBanner course={course} />
            <CourseViewBody
                details={course.details}
                courseCurriculum={course.courseCurriculum}
            />
            <SuccessHistory stories={stories} />
        </GuestLayout>
    );
}
