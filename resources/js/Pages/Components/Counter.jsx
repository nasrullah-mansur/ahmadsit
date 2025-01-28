export default function Counter() {
    const domain = window.location.origin;

    const items = [
        {
            id: 1,
            title: "২০০+ ছাত্র",
            img: `${domain}/images/student.png`,
            color: "bg-[#BB0AF9]",
        },
        {
            id: 2,
            title: "২০০+ চাকরি",
            img: `${domain}/images/job.png`,
            color: "bg-[#0034E0]",
        },
        {
            id: 3,
            title: "১০০+ ব্যাচ",
            img: `${domain}/images/cap.png`,
            color: "bg-[#D300A6]",
        },
        {
            id: 4,
            title: "৯৫% সাফল্য",
            img: `${domain}/images/success.png`,
            color: "bg-[#CC9600]",
        },
        {
            id: 5,
            title: "১৮+শিক্ষক",
            img: `${domain}/images/teacher.png`,
            color: "bg-[#8D02CF]",
        },
    ];

    return (
        <div className="container mx-auto bg-[#F2F2F2] rounded-lg px-24 py-12 mt-[80px]">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {items.map((item) => (
                    <div
                        key={item.id}
                        className="bg-white mx-auto w-[190px] h-[190px] flex justify-center items-center rounded-md"
                    >
                        <div
                            className={`w-[100px] h-[100px] ${item.color} rounded-full -mt-12`}
                        >
                            <div className="w-[100px] h-[100px] bg-[#fff] rounded-full -ms-2 -mt-2 flex justify-center items-center flex-col">
                                <img src={item.img} alt="students" />
                            </div>
                            <span className="block font-bold mt-6 text-center text-[18px]">
                                {item.title}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
