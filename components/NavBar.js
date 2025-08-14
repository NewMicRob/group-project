"use client";
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import Link from 'next/link';

export default function NavBar() {
    const pathname = usePathname(); // Get the current path

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/Services', label: 'Services' },
        { href: '/Booking', label: 'Booking' },
        { href: '/FindUs', label: 'Find Us' },
        { href: '/Reviews', label: 'Reviews' }
    ];

    // Check if the current path is active
    const isActive = (path) => {
        if (path === "/" && pathname === "/") // Home page
            return true;
        if (path !== "/" && pathname.startsWith(path)) // Other pages
            return true;
        return false;
    }

    return (
        <nav className="w-full bg-gradient-to-r from-blue-600 to-purple-600 shadow-xl border-b border-blue-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center justify-center w-full">
                        <div className="flex items-center justify-between w-full">
                            <div className="flex items-center justify-center flex-1">
                                <ul className="flex space-x-8"> {/* Navigation Links */}
                                    {navLinks.map((item) => {
                                        return (
                                            <li key={item.href}>
                                                <Link 
                                                    href={item.href} 
                                                    className={`px-4 py-2 rounded-lg transition-all duration-300 text-lg font-semibold
                                                    ${isActive(item.href) // Check if the link is active
                                                        ? 'bg-white/20 text-white shadow-lg transform scale-105' // Active link styles
                                                        : 'text-gray-800 hover:text-white hover:bg-white/10'}`} // Inactive link styles
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
                </div>
            </div>
        </nav>
    );
}