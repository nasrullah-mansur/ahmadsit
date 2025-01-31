import { Head } from "@inertiajs/react";

export default function HeadSection() {
    const domain = window.location.origin;

    return (
        <Head>
            <title>আহমাদ’স আইটি ইনিস্টিটিউট</title>
            <meta
                name="title"
                content="আহমাদ’স আইটি ইনিস্টিটিউট - শিখুন ওয়েব ডেভেলপমেন্ট, ডিজিটাল মার্কেটিং, গ্রাফিক ডিজাইন ও ভিডিও এডিটিং"
            />
            <meta
                name="description"
                content="আহমাদ’স আইটি ইনিস্টিটিউট - বাংলাদেশে অন্যতম সেরা আইটি ট্রেনিং ইনস্টিটিউট, যেখানে আপনি শিখতে পারেন ওয়েব ডেভেলপমেন্ট, ডিজিটাল মার্কেটিং, গ্রাফিক ডিজাইন এবং ভিডিও এডিটিং।"
            />
            <meta
                name="keywords"
                content="IT Training, ওয়েব ডেভেলপমেন্ট, ডিজিটাল মার্কেটিং, গ্রাফিক ডিজাইন, ভিডিও এডিটিং, ফ্রিল্যান্সিং, আহমাদ’স আইটি ইনিস্টিটিউট, আইটি কোর্স"
            />
            <meta name="author" content="আহমাদ’স আইটি ইনিস্টিটিউট" />
            <meta name="robots" content="index, follow" />
            <meta
                property="og:title"
                content="আহমাদ’স আইটি ইনিস্টিটিউট - সেরা আইটি প্রশিক্ষণ কেন্দ্র"
            />
            <meta
                property="og:description"
                content="শেখার সেরা ঠিকানা - ওয়েব ডেভেলপমেন্ট, ডিজিটাল মার্কেটিং, গ্রাফিক ডিজাইন ও ভিডিও এডিটিং কোর্স করুন আমাদের সাথে।"
            />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={domain} />
            <meta property="og:image" content={`${domain}/images/logo.png`} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta
                name="twitter:title"
                content="আহমাদ’স আইটি ইনিস্টিটিউট - শিখুন ওয়েব ডেভেলপমেন্ট ও ডিজিটাল মার্কেটিং"
            />
            <meta
                name="twitter:description"
                content="বাংলাদেশের অন্যতম সেরা আইটি প্রশিক্ষণ কেন্দ্র - আহমাদ’স আইটি ইনিস্টিটিউট"
            />
            <meta name="twitter:image" content={`${domain}/images/logo.png`} />

            <link
                rel="shortcut icon"
                href={`${domain}/images/favicon.png`}
                type="image/x-icon"
            />
        </Head>
    );
}
