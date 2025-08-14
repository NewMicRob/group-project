"use client";
import React from "react";

// Array of stylist objects with name and bio
const stylists = [
    { name: "Alex", bio: "The Color Specialist" },
    { name: "Jamie", bio: "The Cutting Expert" },
    { name: "Taylor", bio: "The Styling Guru" },
    { name: "Jordan", bio: "The Hair Care Specialist" },
    { name: "Morgan", bio: "The Trendsetter" },
    { name: "Casey", bio: "The Texture Master" },
    { name: "Riley", bio: "The Updo Artist" },
    { name: "Avery", bio: "The Blowout Queen" },
    { name: "Cameron", bio: "The Hair Extension Specialist" },
    { name: "Drew", bio: "The Barbering Pro" }
];

export default function HairStylists() {
    return (
        // Container for the marquee
        <div className="w-full md:w-[95%] lg:w-[80%] mx-auto mb-6 px-4 md:px-0">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-white">
                Meet Our Stylists
            </h2>
            <div className="overflow-hidden h-32 flex items-center bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 py-3 shadow-2xl border border-blue-200 w-screen relative left-1/2 right-1/2 -translate-x-1/2 my-10 backdrop-blur-sm">
                <div
                    style={{
                        display: "inline-block",
                        whiteSpace: "nowrap",
                        animation: "reviewMarquee 35s linear infinite"
                    }}
                    >
                        {[...stylists, ...stylists].map((s, idx) => ( // Smooth scrolling
                            <span
                            key={s.name + idx}
                            className="inline-block"
                            style={{ marginRight: "5rem" }} // Stylist spacing
                            >
                                <span className="rounded-xl px-6 py-4 min-w-[280px] shadow-lg text-white font-semibold flex items-center justify-center bg-white/20 backdrop-blur-sm text-lg border border-white/30 transform transition-all duration-300">
                                    <span className="text-center">
                                        <div className="font-bold text-xl mb-1">{s.name}</div>
                                        <div className="text-blue-100 text-sm">{s.bio}</div>
                                    </span>
                                </span>
                            </span>
                        ))}
                </div>
            </div>
        </div>
    );
}