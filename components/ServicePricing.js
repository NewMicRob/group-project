"use client";
import React, { useState } from 'react';

// Service pricing data
const services = {
    "Hair Cuts": [
        { name: "Women's Cut & Style", price: 65, description: "Includes wash, cut, and style" },
        { name: "Men's Cut", price: 35, description: "Classic men's haircut" },
        { name: "Children's Cut", price: 25, description: "Ages 12 and under" }
    ],
    "Hair Color": [
        { name: "Single Process Color", price: 85, description: "All-over color application" },
        { name: "Highlights (Partial)", price: 120, description: "Foil highlights" },
        { name: "Highlights (Full)", price: 160, description: "Full head foil highlights" },
        { name: "Color Correction", price: 200, description: "Starting price, consultation required" }
    ],
    "Styling Services": [
        { name: "Blowout", price: 45, description: "Wash and professional styling" },
        { name: "Updo", price: 75, description: "Special occasion styling" },
        { name: "Hair Extensions", price: 250, description: "Consultation and application" }
    ],
    "Treatments": [
        { name: "Deep Conditioning", price: 35, description: "Restorative hair treatment" },
        { name: "Keratin Treatment", price: 300, description: "Smoothing treatment" },
        { name: "Scalp Treatment", price: 55, description: "Therapeutic scalp care" }
    ]
};

export default function ServicePricing() {
    const [activeCategory, setActiveCategory] = useState("Hair Cuts"); // Active category

    return (
        <div className="bg-gradient-to-br from-white via-blue-50 to-purple-50 rounded-2xl shadow-2xl border border-blue-100 p-8 w-[95%] md:w-[85%] lg:w-[75%] mx-auto backdrop-blur-sm">
            <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent">
                Our Services & Pricing
            </h2>
            
            <div className="pb-10 text-center">
                {Object.keys(services).map(category => (
                    <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`px-6 py-3 mx-1 mb-2 rounded-xl font-semibold text-sm md:text-base transition-all duration-300 transform ${
                            activeCategory === category
                                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105 border-2 border-blue-200' 
                                : 'text-gray-700 hover:text-blue-700 hover:bg-white hover:shadow-md hover:scale-102 border-2 border-transparent'
                        }`}
                    >
                        {category}
                    </button>
                ))}
            </div>
            {/* Service Cards */}
            <div className="grid md:grid-cols-2 gap-6 animate-fadeIn">
                {services[activeCategory].map((service, index) => (
                    <div 
                        key={index} 
                        className="bg-white/80 backdrop-blur-sm border-2 border-blue-100 rounded-2xl p-6 hover:shadow-xl hover:border-blue-200 transition-all duration-300 transform hover:scale-105 hover:bg-white/90"
                        style={{ animationDelay: `${index * 100}ms` }}
                    >
                        <div className="flex justify-between items-start mb-3">
                            <h3 className="font-bold text-lg text-gray-800 leading-tight">{service.name}</h3>
                            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold text-xl">
                                ${service.price}
                            </span>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}