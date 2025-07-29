"use client";
import React, { useRef, useEffect, useState } from "react";

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
    const marqueeRef = useRef(null);
    // State to store the width
    const [marqueeWidth, setMarqueeWidth] = useState(0);

    useEffect(() => {
        if (marqueeRef.current) {
            setMarqueeWidth(marqueeRef.current.scrollWidth);
        }
    }, []);

    // Create the stylists elements with spacing
    const marqueeElements = stylists.map((s) => (
        <span
            key={s.name}
            style={{ display: "inline-block", marginLeft: 50, marginRight: 50 }}
        >
            {s.name}: {s.bio}
        </span>
    ));

    // Animation duration based on content width and speed
    const speed = 100;
    const duration = marqueeWidth ? marqueeWidth / speed : 10;

    return (
        // Container for the marquee and header
        <div className="w-[70%] mx-auto mb-2">
            <h2 className="text-xl font-bold text-center mb-2 text-black">
                Meet Our Stylists
            </h2>
            <div className="overflow-hidden h-10 flex items-center bg-gradient-to-r from-blue-400 to-purple-400 py-1 shadow rounded text-black">
                {/* Scrolling content */}
                <div
                    style={{
                        display: "inline-block",
                        whiteSpace: "nowrap",
                        animation: `marqueeAnim 40s linear infinite`
                    }}
                >
                    <span ref={marqueeRef}>
                        {marqueeElements}
                    </span>
                    <span aria-hidden="true">
                        {marqueeElements}
                    </span>
                </div>
            </div>
        </div>
    );
}