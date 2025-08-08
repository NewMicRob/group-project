"use client";
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import Link from 'next/link';

export default function NavBar() {
    const pathname = usePathname();
    const [isMobile, setIsMobile] = useState(false);

    const navLinks = [
        { href: '/', label: 'Bookings' },
        { href: '/FindUs', label: 'Find Us' },
        { href: '/Reviews', label: 'Reviews' }
    ];

    const isActive = (path) => {
        if (path === "/" && pathname === "/")
            return true;
        if (path !== "/" && pathname.startsWith(path))
            return true;
        return false;
    }

    return (
        <nav className="w-full bg-gradient-to-r from-blue-700 to-purple-700 shadow-xl border-b border-blue-600/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center justify-center w-full">
                        <ul className="flex space-x-8">
                            {navLinks.map((item) => {
                                return (
                                    <li key={item.href}>
                                        <Link 
                                            href={item.href} 
                                            className={`px-4 py-2 rounded-lg transition-all duration-300 text-lg font-semibold
                                            ${isActive(item.href) 
                                                ? 'bg-white/20 text-white shadow-lg transform scale-105' 
                                                : 'text-blue-100 hover:text-white hover:bg-white/10'}`}
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}