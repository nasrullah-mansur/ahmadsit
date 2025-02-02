import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

export default function CourseReviews() {
    const domain = window.location.origin;
    const successStory = [
        {
            id: 1,
            image: `${domain}/images/my.png`,
            name: "মোঃ আব্দুল কাদের",
            content:
                "জাইন ও ইউজার ইন্টারফেস তৈরি হয়) এবং ব্যাকএন্ড (যেখানে ওয়েবসাইটের ডাটা ম্যানেজমেন্ট ও সার্ভার সাইড কাজ করা হয়)। এই কোর্সে আমরা আপনাকে শিখাবো কিভাবে এই দুটি ভাগের কাজ করতে হয়। ওয়েব ডেভেলপমেন্ট হল আধুনিক প্রযুক্তির অন্যতম চাহিদাসম্পন্ন দক্ষতা, যা আপনাকে একটি সফল ক্যারিয়ার গড়তে সহায়তা করবে। এটি মূলত দুটি ভাগে বিভক্ত: ফ্রন্টএন্ড (যেখানে ওয়েবসাইটের ডিজাইন ও ইউজার ইন্টারফেস তৈরি হয়) এবং ব্যাকএন্ড (যেখানে ওয়েবসাইটের ডাটা ম্যানেজমেন্ট ও সার্ভার সাইড কাজ করা হয়)। এই কোর্সে আমরা আপনাকে শিখাবো কিভাবে এই দুটি ভাগের কাজ করতে হয়।",
        },
        {
            id: 2,
            image: `${domain}/images/graphic-design.png`,
            name: "মোঃ আব্দুল কাদের",
            content: "lorem ipsum dolor sit amet, consectetur adipiscing elit",
        },
        {
            id: 3,
            image: `${domain}/images/graphic-design.png`,
            name: "মোঃ আব্দুল কাদের",
            content: "lorem ipsum dolor sit amet, consectetur adipiscing elit",
        },
    ];

    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 2,
        slidesToScroll: 1,
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
        <div className="px-5 max-w-screen-xl mx-auto">
            <div className="container mx-auto mt-[50px]">
                <Slider {...settings} className=" -mx-3">
                    {successStory.map((item) => (
                        <div key={item.id}>
                            <div className="p-4">
                                <div className="bg-gray-100 p-4 rounded-[5px] flex items-start">
                                    <img
                                        className="w-[120px] rounded-[15px]"
                                        src={item.image}
                                        alt="img"
                                    />
                                    <div className="ml-3">
                                        <h3 className="font-semibold text-lg mt-3">
                                            {item.name}
                                        </h3>
                                        <p className="text-[14px]">
                                            {item.content}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}
