import React from "react";

export default function Header({ title }) {
    return (
        <header className="w-full bg-gradient-to-r from-blue-700 via-purple-700 shadow-2xl border-b border-blue-600/20">
            <div className="container mx-auto px-6 py-6">
                <div className="flex flex-col items-center space-y-2">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center bg-gradient-to-r from-white to-blue-100 text-transparent bg-clip-text">
                        {title}
                    </h1>
                    <div className="w-50 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full">
                    </div>
                </div>
            </div>
        </header>
    );
}