import GuestLayout from "@/Layouts/GuestLayout";

export default function Index() {
    const domain = window.location.origin;

    return (
        <GuestLayout>
            <div className="mt-[120px] px-4 container mx-auto">
                <div className="text-center max-w-[875px] mx-auto">
                    <h2 className="text-[48px] font-bold mb-[18px]">
                        আমাদের জনপ্রিয় কোর্স সমূহ
                    </h2>
                    <p className="text-[#3D3D3D] mb-[50px] text-[18px]">
                        আপনার দক্ষতা উন্নত করতে আমরা দিচ্ছি বেশ কয়েকটি বিষয় এর
                        উপর প্রফেশনাল ট্রেনিং। প্রতিটি কোর্স সাজানো হয়েছে
                        হাতে-কলমে শেখার সুযোগ, বাস্তব প্রজেক্ট এবং অভিজ্ঞ
                        মেন্টরদের গাইডলাইনের মাধ্যমে।
                    </p>
                </div>

                <div className="grid grid-cols-3 gap-6 max-w-screen-xl mx-auto">
                    <div className="bg-[#F2F2F2] p-4 rounded-[20px]">
                        <div className="bg-white rounded-[20px]">
                            <img
                                className="w-full"
                                src={`${domain}/images/web-design.png`}
                                alt="Web design and development"
                            />
                        </div>
                    </div>
                    <div className="bg-[#F2F2F2] p-4 rounded-[20px]">
                        <div className="bg-white rounded-[20px]">
                            <img
                                className="w-full"
                                src={`${domain}/images/web-design.png`}
                                alt="Web design and development"
                            />
                        </div>
                    </div>
                    <div className="bg-[#F2F2F2] p-4 rounded-[20px]">
                        <div className="bg-white rounded-[20px]">
                            <img
                                className="w-full"
                                src={`${domain}/images/web-design.png`}
                                alt="Web design and development"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </GuestLayout>
    );
}
