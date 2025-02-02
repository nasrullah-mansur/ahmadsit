import GuestLayout from "@/Layouts/GuestLayout";
import PopupVideo from "@/Pages/Components/PopupVideo";
import { useState } from "react";

export default function Index({ stories }) {
    const domain = window.location.origin;
    const [isOpen, setIsOpen] = useState(false);
    const [videoLink, setVideoLink] = useState("");

    const handlePopup = (iframe) => {
        console.log(iframe);
        setIsOpen(true);
        setVideoLink(iframe);
    };

    return (
        <GuestLayout>
            {isOpen && (
                <PopupVideo
                    videoLink={videoLink}
                    isOpen={() => setIsOpen(!isOpen)}
                />
            )}
            <div className="mt-[120px] px-4 container mx-auto">
                <div className="text-center max-w-[875px] mx-auto">
                    <h2 className="text-[48px] font-bold mb-[18px]">
                        ছাত্রদের মুখেই শুনুন সাফল্যের গল্প
                    </h2>
                    <p className="text-[#3D3D3D] mb-[50px] text-[18px]">
                        প্রত্যেক সফলতার পেছনে থাকে এক অদম্য পরিশ্রম, অধ্যবসায় ও
                        একাগ্রতা। আমাদের ছাত্রদের সাফল্যের গল্পগুলো তারই এক
                        জীবন্ত উদাহরণ।
                    </p>
                </div>

                <div className="grid grid-cols-3 gap-6 max-w-screen-xl mx-auto">
                    {stories.map((item) => (
                        <div
                            onClick={() => handlePopup(item.iframe)}
                            key={item.id}
                            className="bg-[#F2F2F2] p-4 rounded-[20px]"
                        >
                            <div className="bg-white rounded-[20px]">
                                <img
                                    className="w-full"
                                    src={`${domain}/uploads/${item.image}`}
                                    alt="Web design and development"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </GuestLayout>
    );
}
