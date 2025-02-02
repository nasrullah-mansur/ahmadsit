import GuestLayout from "@/Layouts/GuestLayout";
import React from "react";
import Banner from "./Components/Banner";
import Counter from "./Components/Counter";
import Course from "./Components/Course";
import Facility from "./Components/Facility";
import SuccessHistory from "./Components/SuccessHistory";
import Solution from "./Components/Solution";
import Contact from "./Components/Contact";
import HeadSection from "./Components/HeadSection";

export default function Welcome() {
    return (
        <GuestLayout>
            <Banner />
            <Counter />
            <Course />
            <Facility />
            <SuccessHistory />
            <Solution />
            <Contact />
        </GuestLayout>
    );
}
