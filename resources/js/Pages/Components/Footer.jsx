import { Link } from "@inertiajs/react";

export default function Footer() {
    const domain = window.location.origin;
    return (
        <div
            style={{
                backgroundImage: `url('${domain}/images/footer-bg.png')`,
            }}
        >
            <div className="container pt-[20px] pb-[20px] mt-[80px] max-w-screen-xl mx-auto">
                <div className="flex flex-col lg:flex-row justify-between items-center mt-[20px]">
                    <div className="mb-2 lg:mb-0">
                        <ul className="flex">
                            <li className="ml-[20px]">
                                <Link href="/" className="text-[18px]">
                                    হোম
                                </Link>
                            </li>
                            <li className="ml-[20px]">
                                <Link
                                    href={route("courses")}
                                    className="text-[18px]"
                                >
                                    কোর্সসমুহ
                                </Link>
                            </li>
                            <li className="ml-[20px]">
                                <Link
                                    href={route("about")}
                                    className="text-[18px]"
                                >
                                    আমাদের সম্পর্কে
                                </Link>
                            </li>
                            <li className="ml-[20px]">
                                <Link
                                    href={route("contact")}
                                    className="text-[18px]"
                                >
                                    যোগাযোগ
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <span className="text-[18px]">
                            © 2021 Ahmad's IT Institute
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
