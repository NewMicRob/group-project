import Link from 'next/link';

export default function NavBar() {
    return (
        <nav className="w-full bg-gradient-to-r from-blue-700 to-purple-700 shadow-lg">
            <div className="w-full flex justify-center items-center h-16 px-6">
                <ul className="flex space-x-6">
                    <li>
                        <Link href="/" className="text-lg font-bold text-white hover:text-purple-400 transition-colors">Bookings</Link>
                    </li>
                    <li>
                        <Link href="/OurTeam" className="text-lg font-bold text-white hover:text-purple-400 transition-colors">Our Team</Link>
                    </li>
                    <li>
                        <Link href="/FindUs" className="text-lg font-bold text-white hover:text-purple-400 transition-colors">Find Us</Link>
                    </li>
                    <li>
                        <Link href="/Products" className="text-lg font-bold text-white hover:text-purple-400 transition-colors">Products</Link>
                    </li>
                    <li>
                        <Link href="/Reviews" className="text-lg font-bold text-white hover:text-purple-400 transition-colors">Reviews</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}