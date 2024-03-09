import Link from "next/link";

export default function SideNav() {
    return (
        <div className="bg-[#0070F3] h-screen w-1/6 text-white">
            <Link href="/">
                <div className="pb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-book-minus"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" /><path d="M9 10h6" /></svg>
                </div>
            </Link>
            <Link href="/">
                <div className="py-3 cursor-pointer">Home</div>
            </Link>
            <Link href="/dashboard">
                <div className="py-3 cursor-pointer">Dashboard</div>
            </Link>
            <Link href="/clients">
                <div className="py-3 cursor-pointer">Client</div>
            </Link>
        </div>
    );
}