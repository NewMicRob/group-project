"use client";
import React from "react";

export default function Home() {
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

    return (
        <div>
            {/* Welcome Section */}
            <section className="bg-gradient-to-r from-blue-500 to-purple-500 py-12 text-center w-[70%] mx-auto rounded-lg shadow-lg mb-8 text-5xl text-gray-700 font-bold">
            <h1>
                Welcome to Stylin Salon
            </h1>
            </section>
            {/* About Us Section */}
            <section className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-12 text-center w-[70%] mx-auto rounded-lg shadow-lg mb-8">
            <h2 className="p-3 bg-gray-700 rounded w-80 text-center justify-center mx-auto mb-10 text-2xl">
                About Us
            </h2>
            <p>
                At Stylin Salon, we offer a range of hair services to make you look and feel your best.
            </p>
            </section>
            {/* History Section */}
            <section className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-12 text-center w-[70%] mx-auto rounded-lg shadow-lg mb-8">
            <h2 className="p-3 bg-gray-700 rounded w-80 text-center justify-center mx-auto mb-10 text-2xl">
                History
            </h2>
            <p>
                Stylin Salon has been serving the community since 2020, providing top-notch hair care and styling services.
            </p>
            </section>
            {/* Our Team Section */}
            <section className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-12 text-center w-[70%] mx-auto rounded-lg shadow-lg mb-8">
            <h2 className="p-3 bg-gray-700 rounded w-80 text-center justify-center mx-auto mb-10 text-2xl">
                Our Team
            </h2>
            {/* Stylist cards */}
            <div className="mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
                {stylists.map((stylist, index) => (
                    <div key={index} className="flex flex-col p-3 bg-gray-700 rounded min-w-0 text-center">
                        <h4 className="text-lg font-bold truncate">{stylist.name}</h4>
                        <p className="text-sm text-gray-300">{stylist.bio}</p>
                    </div>
                ))}
                </div>
            </div>
            </section>
        </div>
    );
}