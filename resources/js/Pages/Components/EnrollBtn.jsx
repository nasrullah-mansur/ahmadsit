import { Link } from "@inertiajs/react";
import { FaChevronRight } from "react-icons/fa6";
import { RiGraduationCapLine } from "react-icons/ri";

export default function EnrollBtn({ className }) {
    return (
        <Link
            href={route("enroll")}
            className={`${
                className && className
            } bg-gradient-to-r from-purple-500 to-pink-500 px-6 transition-all inline-flex items-center text-white py-3 font-semibold rounded`}
        >
            <RiGraduationCapLine className="text-xl mr-2" />
            এখনি ভর্তি হন
            <FaChevronRight className="ml-2 text-sm" />
        </Link>
    );
}
