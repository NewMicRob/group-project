import React from "react";

export default function Header({ title }) {
    return (
        <header className="w-full bg-gradient-to-r from-blue-700 to-purple-700 shadow-lg">
            <div className="container mx-auto px-6 py-4">
                <h1 className="text-3xl font-bold text-white text-center">
                    {title}
                </h1>
            </div>
        </header>
    );
}