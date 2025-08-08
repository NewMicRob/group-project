"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const [isExpanded, setIsExpanded] = useState(false);

    const quickLinks = [
        { name: "Booking", href: "/" },
        { name: "Find Us", href: "/FindUs" },
        { name: "Reviews", href: "/Reviews" }
    ];

    const contactInfo = [
        { label: "Phone", value: "(000) 000-0000" },
        { label: "Email", value: "info@company.com", href: "mailto:info@company.com" },
        { label: "Address", value: "123 Main St, City, State 12345" }
    ];

    const socials = [
        { name: "Twitter", href: "https://twitter.com" },
        { name: "Instagram", href: "https://instagram.com" },
        { name: "LinkedIn", href: "https://linkedin.com" }
    ];

    return (
        <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white">
            {/* Toggle Button */}
            <div className="container mx-auto px-6 py-2 flex justify-center border-b border-gray-600">
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="flex items-center space-x-2 text-white hover:text-blue-400 transition-colors duration-300"
                >
                    <span className="text-sm font-medium">
                        {isExpanded ? 'Hide Details' : 'Show Details'}
                    </span>
                    <svg
                        className={`w-4 h-4 transition-transform duration-300 ${
                            isExpanded ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
            </div>
            {/* Collapsible Footer */}
            <div className={`transition-all duration-500 ease-in-out overflow-hidden ${
                isExpanded ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
            }`}>
                <div className="container mx-auto px-6 py-8">
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Contact Information */}
                        <div className="text-center md:text-left">
                            <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
                            <div className="space-y-2">
                                {contactInfo.map((info, index) => (
                                    <p key={index} className="text-gray-300 text-sm flex items-center justify-center md:justify-start">
                                        <span className="font-medium mr-2">{info.label}:</span>
                                        {info.href ? (
                                            <Link href={info.href} className="hover:text-blue-400 transition-colors">
                                                {info.value}
                                            </Link>
                                        ) : (
                                            info.value
                                        )}
                                    </p>
                                ))}
                            </div>
                        </div>
                        {/* Quick Links */}
                        <div className="text-center">
                            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
                            <ul className="space-y-2">
                                {quickLinks.map((link, index) => (
                                    <li key={index}>
                                        <Link 
                                            href={link.href} 
                                            className="text-gray-300 text-sm hover:text-blue-400 transition-colors duration-300"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* Socials */}
                        <div className="text-center md:text-right">
                            <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
                            <div className="space-y-2">
                                {socials.length > 0 ? (
                                    socials.map((social, index) => (
                                        <div key={index}>
                                            <Link 
                                                href={social.href} 
                                                className="text-gray-300 text-sm hover:text-blue-400 transition-colors duration-300 block"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                {social.name}
                                            </Link>
                                        </div>
                                    ))
                                ) : (
                                    <p className="text-gray-300 text-sm">No social links available</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Bottom Bar */}
            <div className="border-t border-gray-600">
                <div className="container mx-auto px-6 py-4">
                    <div className="text-center">
                        <p className="text-sm text-gray-400">
                            &copy; {currentYear} Michael R Newman. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}