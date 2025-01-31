export default function PopupVideo({ isOpen }) {
    return (
        <div className="w-full h-screen flex justify-center px-3 items-center fixed top-0 left-0 bg-black bg-opacity-50 z-50">
            <div className=" bg-white rounded-lg shadow-lg w-full h-[270px] md:w-[600px] md:h-[350px] lg:w-[800px] lg:h-[450px]">
                <div className="relative h-full">
                    <iframe
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/5qap5aO4i9A"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                    <button
                        onClick={() => isOpen()}
                        className="absolute left-1/2 -translate-x-full -top-16 m-3 p-2 bg-white rounded-full shadow-lg"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-red-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}
