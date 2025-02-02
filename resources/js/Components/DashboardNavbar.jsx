import { Link } from "@inertiajs/react";
import { useState } from "react";
import { BsLayers } from "react-icons/bs";
import { FaChevronRight } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

export default function DashboardNavbar({ className, onNavbarShow }) {
    const domain = window.location.origin;
    const [menus, setMenus] = useState([
        {
            id: 1,
            name: "Dashboard",
            link: "/dashboard",
            children: [],
            isActive: false,
        },
        {
            id: 2,
            name: "Courses",
            link: "#",
            isActive: false,
            children: [
                {
                    id: 1,
                    name: "All Courses",
                    link: route("course.index"),
                },
                {
                    id: 2,
                    name: "Create Course",
                    link: route("course.create"),
                },
            ],
        },
    ]);

    const handleMenuClick = (id) => {
        const updatedMenus = menus.map((menu) => {
            if (menu.id === id) {
                menu.isActive = !menu.isActive;
            } else {
                menu.isActive = false;
            }
            return menu;
        });

        setMenus(updatedMenus);
    };

    return (
        <div
            className={`${
                className && className
            } min-h-screen absolute lg:translate-x-0 z-50 lg:relative w-64 bg-white dark:bg-[#242424] border-r dark:border-r-[#444]`}
        >
            <div className="h-[60px] w-full border-b dark:border-b-[#444] flex justify-between items-center px-4">
                <div className="flex w-full relative items-center">
                    <a href="/" target="_blank">
                        <img src={`${domain}/images/logo.png`} alt="img" />
                    </a>

                    <button
                        className="text-2xl ml-auto dark:text-white lg:hidden"
                        onClick={() => onNavbarShow()}
                    >
                        <IoClose />
                    </button>
                </div>
            </div>
            <div className="py-4">
                <ul>
                    {menus.map((menu) => {
                        if (menu.children.length > 0) {
                            return (
                                <li key={menu.id}>
                                    <span
                                        href={menu.link}
                                        className={`${
                                            menu.isActive &&
                                            "bg-blue-500 text-white dark:bg-blue-500 dark:text-white hover:text-white"
                                        } cursor-pointer  flex items-center hover:text-blue-500 text-lg py-2 px-4 dark:hover:text-white transition-all text-gray-600 dark:text-gray-200`}
                                        onClick={() => handleMenuClick(menu.id)}
                                    >
                                        <BsLayers />{" "}
                                        <span className="block ml-3">
                                            {menu.name}
                                        </span>
                                        <FaChevronRight
                                            className={`${
                                                menu.isActive && "rotate-90"
                                            } text-[16px] ml-auto transition-all`}
                                        />
                                    </span>

                                    <ul
                                        className={
                                            menu.isActive ? "block" : "hidden"
                                        }
                                    >
                                        {menu.children.map((child) => (
                                            <li key={child.id} className="pl-5">
                                                <Link
                                                    preserveState={true}
                                                    href={child.link}
                                                    className="cursor-pointer flex items-center dark:hover:text-blue-500 hover:text-blue-500 text-lg py-2 px-4 transition-all text-gray-600 dark:text-gray-200"
                                                >
                                                    <FaMinus className="text-[12px]" />
                                                    <span className="block ml-3">
                                                        {child.name}
                                                    </span>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            );
                        } else {
                            return (
                                <li key={menu.id}>
                                    <Link
                                        href={menu.link}
                                        className={`cursor-pointer flex items-center hover:text-blue-500 text-lg py-2 px-4 dark:hover:text-blue-500 transition-all text-gray-600 dark:text-gray-200`}
                                    >
                                        <BsLayers />{" "}
                                        <span className="block ml-3">
                                            {menu.name}
                                        </span>
                                    </Link>
                                </li>
                            );
                        }
                    })}
                </ul>
            </div>
        </div>
    );
}
