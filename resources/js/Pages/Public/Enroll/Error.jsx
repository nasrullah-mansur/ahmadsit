import GuestLayout from "@/Layouts/GuestLayout";

export default function Enroll({ error }) {
    return (
        <GuestLayout>
            <div className="mt-[120px]"></div>

            <div className="rounded-md max-w-screen-lg p-[50px] mx-auto my-[60px] font-semibold">
                <p className=" text-2xl text-red-500 text-center leading-[40px]">
                    {error}
                </p>
            </div>
        </GuestLayout>
    );
}
