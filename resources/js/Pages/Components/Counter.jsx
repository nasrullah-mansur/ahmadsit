export default function Counter() {
    const domain = window.location.origin;

    const items = [
        {
            id: 1,
            title: "200+ ছাত্র",
            img: `${domain}/images/student.png`,
            color: "bg-[#BB0AF9]",
        },

        {
            id: 3,
            title: "6+ ব্যাচ",
            img: `${domain}/images/cap.png`,
            color: "bg-[#D300A6]",
        },
        {
            id: 4,
            title: "95% সাফল্য",
            img: `${domain}/images/success.png`,
            color: "bg-[#CC9600]",
        },
        {
            id: 5,
            title: "7+ শিক্ষক",
            img: `${domain}/images/teacher.png`,
            color: "bg-[#8D02CF]",
        },
    ];

    return (
        <div className=" bg-[#F2F2F2] rounded-lg px-4 py-12 mt-[80px]">
            <div className="max-w-screen-xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {items.map((item) => (
                    <div
                        key={item.id}
                        className="bg-white mx-auto w-full h-[190px] flex justify-center items-center rounded-md"
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
