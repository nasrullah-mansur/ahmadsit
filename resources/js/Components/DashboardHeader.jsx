import { useEffect, useRef, useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { MdOutlineLightMode } from "react-icons/md";
import { AiOutlineFullscreen } from "react-icons/ai";
import { AiOutlineFullscreenExit } from "react-icons/ai";
import { MdLightMode } from "react-icons/md";
import { Link, router } from "@inertiajs/react";

export default function DashboardHeader({ isNavbarShow }) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isFullScreen, setIsFullScreen] = useState(false);
    const [isSearch, setIsSearch] = useState(false);

    const dropdownRef = useRef(null);

    const [theme, setTheme] = useState(
        localStorage.getItem("theme") || "light"
    );

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleFullScreen = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
            document.exitFullscreen();
        }

        setIsFullScreen(!isFullScreen);
    };

    const handleLogout = (e) => {
        console.log(e);

        router.post(route("logout"));
    };

    const handleDropdown = (e) => {
        e.stopPropagation();
        console.log(e);

        setIsDropdownOpen(!isDropdownOpen);
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleClickOutside = (event) => {
        if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target)
        ) {
            setIsDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, []);

    return (
        <div ref={dropdownRef}>
            <div className="h-[60px] border-b dark:border-b-[#444] bg-white dark:bg-[#242424] flex items-center justify-between">
                <div className="flex items-center justify-start h-full px-5">
                    <button
                        className="mr-4 dark:text-white"
                        onClick={isNavbarShow}
                    >
                        <FaBarsStaggered className="text-xl" />
                    </button>

                    <div
                        onClick={() => setIsSearch(true)}
                        className="max-w-md "
                    >
                        <label
                            htmlFor="default-search"
                            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                        >
                            Search
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg
                                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                    />
                                </svg>
                            </div>
                            <input
                                type="search"
                                id="default-search"
                                className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Search..."
                                readOnly
                            />
                        </div>
                    </div>
                </div>
                <div className="ml-auto relative flex items-center justify-center h-full px-5">
                    <button
                        onClick={toggleFullScreen}
                        className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-200 dark:bg-gray-600 mr-2"
                    >
                        {isFullScreen ? (
                            <AiOutlineFullscreenExit />
                        ) : (
                            <AiOutlineFullscreen className="dark:text-white" />
                        )}
                    </button>

                    <button
                        onClick={() =>
                            setTheme(theme === "dark" ? "light" : "dark")
                        }
                        className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-200 dark:bg-gray-600 mr-2"
                    >
                        {theme == "light" ? (
                            <MdOutlineLightMode />
                        ) : (
                            <MdLightMode className="text-white" />
                        )}
                    </button>

                    <button
                        id="dropdownUserAvatarButton"
                        data-dropdown-toggle="dropdownAvatar"
                        className="flex w-10 h-10 bg-red-300 border-0 text-sm rounded-full md:me-0 "
                        type="button"
                        onClick={(e) => handleDropdown(e)}
                    >
                        <span className="sr-only">Open user menu</span>
                        <img
                            className="w-10 h-10 rounded-full"
                            src={`${window.location.origin}/images/user.png`}
                            alt="user photo"
                        />
                    </button>

                    {isDropdownOpen && <Dropdown onClick={handleLogout} />}
                </div>
            </div>
        </div>
    );
}

function Dropdown({ onClick }) {
    return (
        <div className="z-10 absolute right-5 top-full border bg-white divide-y divide-gray-100 rounded-lg shadow-sm dark:bg-gray-700 dark:divide-gray-600">
            <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownInformdropdownAvatarNameButtonationButton"
            >
                <li>
                    <div className=" mb-4 px-4 pt-2">
                        <h4 className="text-sm font-semibold">
                            Nasrullah Mansur
                        </h4>
                        <p className="text-xs text-gray-500">
                            nasrullah.cit.bd@gmail.com
                        </p>
                    </div>
                </li>
                <li>
                    <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                        My Profile
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                        Settings
                    </a>
                </li>
                <li>
                    <button
                        onClick={(e) => onClick(e)}
                        className="block text-left w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                        Sigh Out
                    </button>
                </li>
            </ul>
        </div>
    );
}
