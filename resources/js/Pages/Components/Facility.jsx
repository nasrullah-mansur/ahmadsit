export default function Facility() {
    const domain = window.location.origin;
    const items = [
        {
            id: 1,
            title: "২৪ ঘন্টা জেনারেটরের সুবিধা",
            img: `${domain}/images/light.png`,
            color: "bg-[#073E3E]",
        },
        {
            id: 2,
            title: "১০০% আবাসিক ব্যবস্থাপনা",
            img: `${domain}/images/building.png`,
            color: "bg-[#073E3E]",
        },
        {
            id: 3,
            title: "২৪ ঘন্টা শিক্ষক সহায়তা",
            img: `${domain}/images/teacher-2.png`,
            color: "bg-[#073E3E]",
        },
        {
            id: 4,
            title: "২৪ ঘন্টা ওয়াইফাই সুবিধা",
            img: `${domain}/images/wifi.png`,
            color: "bg-[#073E3E]",
        },
    ];
    return (
        <div className="bg-[#073E3E]">
            <div className="container mx-auto rounded-lg px-24 py-12 mt-[80px]">
                <div className="max-w-[860px] mx-auto text-center mb-[50px]">
                    <h2 className="text-[48px] text-white font-semibold mb-[18px]">
                        আমাদের সুবিধা সমূহ
                    </h2>
                    <p className="text-white text-[18px]">
                        Lorem Ipsum হল মুদ্রণ এবং টাইপসেটিং শিল্পের ডামি পাঠ্য।
                        লোরেম ইপসাম 1500 এর দশক থেকে শিল্পের মানক ডামি টেক্সট
                        হয়েছে, যখন একটি অজানা প্রিন্টার টাইপের একটি গ্যালি
                        নিয়েছিল এবং একটি টাইপ নমুনা বই তৈরি করতে এটিকে
                        স্ক্র্যাম্বল করেছিল। এটা আছে
                    </p>
                </div>
                <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 pb-8">
                    {items.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white px-3 py-6 rounded-lg"
                        >
                            <div className=" mx-auto flex justify-center items-center rounded-md">
                                <div
                                    className={`w-[100px] h-[100px] ${item.color} rounded-full`}
                                >
                                    <div className="w-[100px] h-[100px] bg-[#fff] rounded-full -ms-2 -mt-2 flex justify-center items-center flex-col">
                                        <img src={item.img} alt="students" />
                                    </div>
                                </div>
                            </div>
                            <span className="block font-bold mt-6 text-center text-[18px]">
                                {item.title}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
