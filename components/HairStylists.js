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

    // State for stylist selection
    const [selectedStylist, setSelectedStylist] = useState(stylists[0].name);
    const [serviceRequest, setServiceRequest] = useState("");

    useEffect(() => {
        if (marqueeRef.current) {
            setMarqueeWidth(marqueeRef.current.scrollWidth);
        }
    }, []);

    // Create the stylists elements with spacing
    const marqueeElements = stylists.map((s, idx) => ( // Maps stylists array
        <span
            key={s.name + idx} // Unique key for each stylist
            className="inline-block mx-24" // Add margin for spacing
        >
            <span className="font-semibold">{s.name}</span>: {s.bio}
        </span>
    ));

    // Animation speed
    const speed = 100;
    const duration = marqueeWidth ? marqueeWidth / speed : 10;

    // alerts for form
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Stylist: ${selectedStylist}\nService: ${serviceRequest}`);
        setServiceRequest("");
    };

    return (
        // Container for the marquee
        <div className="w-[70%] mx-auto mb-2">
            <h2 className="text-xl font-bold text-center mb-2 text-black">
                Meet Our Stylists
            </h2>
            <div className="overflow-hidden h-24 flex items-center bg-gradient-to-r from-blue-400 to-purple-400 py-1 shadow rounded text-black w-screen relative left-1/2 right-1/2 -translate-x-1/2 my-8">
                <div
                    style={{
                        display: "inline-block",
                        whiteSpace: "nowrap",
                        animation: "reviewMarquee 30s linear infinite"
                    }}
                    >
                        {[...stylists, ...stylists].map((s, idx) => ( // For smooth scrolling
                            <span
                            key={s.name + idx}
                            className="inline-block"
                            style={{ marginRight: "4rem" }} // Stylist spacing
                            >
                                <span className="rounded-lg px-0 py-4 min-w-[200px] shadow-none text-black font-medium flex items-center gap-4 bg-transparent text-xl">
                                    <span>
                                        <strong>{s.name}:</strong> {s.bio}
                                    </span>
                                </span>
                            </span>
                        ))}
                </div>
            </div>
        </div>
    );
}