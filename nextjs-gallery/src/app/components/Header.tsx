import Link from "next/link";

export default function Header() {
    return <nav className="fixed top-0 left-0 w-full h-10 flex justify-between items-center px-4 bg-blue-400">
        <div>LOGO</div>
        <div className="flex gap-4">
            <Link href="/">Home</Link>
            <Link href="/gallery">Gallery</Link>
        </div>
    </nav>
}