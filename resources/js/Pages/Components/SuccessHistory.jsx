import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import PopupVideo from "./PopupVideo";

export default function SuccessHistory({ stories }) {
    const [isOpen, setIsOpen] = useState(false);
    const [videoLink, setVideoLink] = useState("");
    const domain = window.location.origin;

    function NextArr(props) {
        const { className, onClick } = props;
        return (
            <div
                className={`${className} cursor-pointer absolute -top-[90px] w-[65px] h-[52px] bg-primary inline-flex justify-center items-center rounded-md right-[15px]`}
                onClick={onClick}
            >
                <FaChevronRight className="font-[22px] text-white" />
            </div>
        );
    }

    function PrevArr(props) {
        const { className, onClick } = props;
        return (
            <div
                className={`${className} cursor-pointer absolute -top-[90px] w-[65px] h-[52px] bg-primary inline-flex justify-center items-center rounded-md right-[90px]`}
                onClick={onClick}
            >
                <FaChevronLeft className="font-[22px] text-white" />
            </div>
        );
    }

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArr />,
        prevArrow: <PrevArr />,
        responsive: [
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2,
                    arrows: false,
                },
            },
        ],
    };

    const handlePopup = (iframe) => {
        console.log(iframe);
        setIsOpen(true);
        setVideoLink(iframe);
    };

    return (
        <div className="px-3 max-w-screen-xl mx-auto">
            {isOpen && (
                <PopupVideo
                    videoLink={videoLink}
                    isOpen={() => setIsOpen(!isOpen)}
                />
            )}
            <div className="container mx-auto mt-[80px]">
                <div>
                    <div className="max-w-[860px] px-4 lg:px-0 ">
                        <h2 className="text-[26px] lg:text-[36px] font-semibold">
                            ছাত্রদের মুখেই শুনুন সাফল্যের গল্প
                        </h2>
                        <p className=" mb-[50px]">
                            প্রত্যেক সফলতার পেছনে থাকে এক অদম্য পরিশ্রম,
                            অধ্যবসায় ও একাগ্রতা। আমাদের ছাত্রদের সাফল্যের
                            গল্পগুলো তারই এক জীবন্ত উদাহরণ। তারা কীভাবে বাধা
                            অতিক্রম করেছে, কীভাবে কঠোর পরিশ্রম করে নিজেদের
                            লক্ষ্যে পৌঁছেছে - এসব গল্প অনুপ্রেরণা জোগাবে
                            আপনাকেও!
                        </p>
                    </div>
                </div>
                <Slider {...settings} className=" -mx-3">
                    {stories?.map((item) => (
                        <div key={item.id}>
                            <div
                                className="px-3"
                                onClick={() => handlePopup(item.iframe)}
                            >
                                <img
                                    className="w-full rounded-[15px]"
                                    src={`${domain}/uploads/${item.image}`}
                                    alt="img"
                                />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}
