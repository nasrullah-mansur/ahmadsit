import { Link } from "@inertiajs/react";
import { BiBookOpen } from "react-icons/bi";
import { FaChevronRight } from "react-icons/fa";

export default function CourseBtn({ className }) {
    return (
        <Link
            className={`${
                className && className
            } bg-gradient-to-r from-purple-500 to-pink-500 px-6 transition-all inline-flex items-center text-white py-3 font-semibold rounded`}
        >
            <BiBookOpen className="text-xl mr-2" />
            সকল কোর্স দেখুন
            <FaChevronRight className="ml-2" />
        </Link>
    );
}
