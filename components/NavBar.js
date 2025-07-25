import Link from 'next/link';

export default function NavBar() {
    return (
        <nav className="w-full bg-gradient-to-r from-blue-700 to-purple-700 shadow-lg">
            <div className="w-full flex justify-center items-center h-16 px-6">
                <ul className="flex space-x-6">
                    <li>
                        <Link href="/" className="text-lg font-bold text-white hover:text-gray-200 transition-colors">Home</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}