import GuestLayout from "@/Layouts/GuestLayout";

export default function Enroll({ student }) {
    return (
        <GuestLayout>
            <div className="mt-[120px]"></div>

            <div className="rounded-md max-w-screen-lg p-[50px] mx-auto my-[60px] bg-gradient-to-r from-purple-500 to-pink-500 transition-all items-center  font-semibold">
                <p className=" text-2xl text-white text-center leading-[40px]">
                    {student.name}, <br />
                    অভিনন্দন! আপনার ভর্তি সফলভাবে সম্পন্ন হয়েছে। আপনার ভর্তি ও
                    লেনদেনের বিস্তারিত তথ্য সংরক্ষণের জন্য নিচের PDF ফাইলটি
                    ডাউনলোড করে সংগ্রহে রাখুন।
                </p>

                <div className="text-center">
                    <a
                        href={route("pdf.vorti", student.id)}
                        className="py-2 px-4 bg-white inline-block mt-[30px] text-gray-900"
                    >
                        Download PDF
                    </a>
                </div>
            </div>
        </GuestLayout>
    );
}
