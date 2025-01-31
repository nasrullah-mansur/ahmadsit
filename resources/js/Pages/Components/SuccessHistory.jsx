import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import PopupVideo from "./PopupVideo";

export default function SuccessHistory() {
    const [isOpen, setIsOpen] = useState(false);
    const domain = window.location.origin;

    const successStory = [
        {
            id: 1,
            image: `${domain}/images/graphic-design.png`,
            video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/4xZWbBRkF8s?si=wa1QPgnl3_XdGACj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
        },
        {
            id: 2,
            image: `${domain}/images/graphic-design.png`,
            video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/4xZWbBRkF8s?si=wa1QPgnl3_XdGACj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
        },
        {
            id: 3,
            image: `${domain}/images/graphic-design.png`,
            video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/4xZWbBRkF8s?si=wa1QPgnl3_XdGACj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
        },
        {
            id: 4,
            image: `${domain}/images/graphic-design.png`,
            video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/4xZWbBRkF8s?si=wa1QPgnl3_XdGACj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
        },
    ];

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
                },
            },
        ],
    };
    return (
        <div className="px-3 lg:px-0">
            {isOpen && <PopupVideo isOpen={() => setIsOpen(!isOpen)} />}
            <div className="container mx-auto mt-[80px]">
                <div>
                    <div className="max-w-[860px] px-4 lg:px-0 mb-[120px]">
                        <h2 className="text-[48px] font-semibold">
                            ছাত্রদের মুখেই শুনুন সাফল্যের গল্প
                        </h2>
                        <p className="text-[18px] mb-[50px]">
                            Lorem Ipsum হল মুদ্রণ এবং টাইপসেটিং শিল্পের ডামি
                            পাঠ্য। লোরেম ইপসাম 1500 এর দশক থেকে শিল্পের মানক
                            ডামি টেক্সট হয়েছে, যখন একটি অজানা প্রিন্টার টাইপের
                            একটি গ্যালি নিয়েছিল এবং একটি টাইপ নমুনা বই তৈরি
                            করতে এটিকে স্ক্র্যাম্বল করেছিল। এটা আছে
                        </p>
                    </div>
                </div>
                <Slider {...settings} className=" -mx-3">
                    {successStory.map((item) => (
                        <div key={item.id}>
                            <div
                                className="px-3"
                                onClick={() => setIsOpen(true)}
                            >
                                <img
                                    className="w-full rounded-[15px]"
                                    src={item.image}
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
