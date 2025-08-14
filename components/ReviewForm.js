"use client";
import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";

const ReviewForm = ({ reviews, setReviews }) => {
    const [name, setName] = useState("");
    const [text, setText] = useState("");
    const [rating, setRating] = useState(5);
    const [nameError, setNameError] = useState("");
    const [textError, setTextError] = useState("");

    useEffect(() => {
        const saved = localStorage.getItem("reviews");
        if (saved) {
            setReviews(JSON.parse(saved));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("reviews", JSON.stringify(reviews));
    }, [reviews]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setNameError(""); // Clear previous errors
        setTextError("");

        // Validation
        let valid = true;
        let autoName = name.trim();

        // Name validation
        if (!autoName) {
            // Alternate between John Doe and Jane Doe
            autoName = Math.random() < 0.5 ? "John Doe" : "Jane Doe";
        } else if (!/^[a-zA-Z\s]{3,}$/.test(autoName)) {
            setNameError("Please enter a valid name (letters and spaces only, minimum 3 characters).");
            valid = false;
        }

        // Review validation
        if (!text.trim()) {
            setTextError("Please enter your review.");
            valid = false;
        }

        if (!valid) {
            return;
        }

        // Add review to list
        const newReview = { name: autoName, text, rating };
        setReviews(prev =>
            prev.length < 10
                ? [...prev, newReview]
                : [...prev.slice(1), newReview]
        );
        setName("");
        setText("");
        setRating(5);

        // SweetAlert
        Swal.fire({
            title: "Thank you for the Review!",
            text: "Your review has been submitted.",
            icon: "success",
            confirmButtonColor: "#2563eb",
            timer: 20000,
            timerProgressBar: true
        });
    };

    return (
        <div className="flex flex-col min-h-screen w-full">
            <main className="flex-grow w-full py-8 px-6">
                <form
                    onSubmit={handleSubmit}
                    className="text-center bg-gradient-to-br from-white via-blue-50 to-purple-50 rounded-2xl shadow-2xl border border-blue-100 p-8 w-full max-w-2xl mx-auto backdrop-blur-sm"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent">
                            Leave a Review
                        </h2>
                        <div className="mb-6 flex justify-center">
                            <div className="w-full md:w-2/3">
                            {/* Name Input */}
                            <label className="block text-gray-800 mb-3 font-semibold text-left" htmlFor="name">
                                Your Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Enter your name (optional)"
                                value={name}
                                onChange={e => setName(e.target.value)}
                                className="w-full p-4 border-2 border-blue-200 rounded-xl text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-300 bg-white/80 backdrop-blur-sm"
                            />
                            {nameError && (
                                <p className="text-red-500 text-sm mt-2 text-left" role="alert">
                                    {nameError}
                                </p>
                            )}
                            </div>
                        </div>
                        <div className="mb-6">
                            {/* Review Input */}
                            <label className="block text-gray-800 mb-3 font-semibold text-left" htmlFor="text">Your Review</label>
                            <textarea
                            id="text"
                            name="text"
                            placeholder="Share your experience with us..."
                            value={text}
                            onChange={e => setText(e.target.value)}
                            className="w-full p-4 border-2 border-blue-200 rounded-xl min-h-[120px] focus:outline-none focus:ring-2 focus:ring-blue-300 resize-none placeholder:text-gray-400 transition-all duration-300 bg-white/80 backdrop-blur-sm text-gray-700">
                            </textarea>
                            {textError && (
                                <p className="text-red-500 text-sm mt-2 text-left" role="alert">
                                    {textError}
                                </p>
                            )}
                        </div>
                        {/* Rating Input */}
                        <div className="mb-8 flex flex-col items-center">
                            <label className="block text-gray-800 mb-3 font-semibold text-center" htmlFor="rating">
                                Rating
                            </label>
                            <select
                            id="rating"
                            value={rating}
                            onChange={e => setRating(Number(e.target.value))}
                            className="w-48 p-4 border-2 border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-300 text-gray-700 text-center transition-all duration-300 bg-white/80 backdrop-blur-sm">
                                {[5, 4, 3, 2, 1].map(num => (
                                    <option key={num} value={num}>{num} Star{num > 1 ? "s" : ""}</option>
                                    ))}
                            </select>
                        </div>
                        {/* Submit button */}
                        <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-semibold text-lg">
                            Submit Review
                        </button>
                </form>
                {/* Recent Reviews */}
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text pt-12 text-white">
                    Recent Reviews
                </h2>
                <div className="overflow-hidden h-28 flex items-center bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 py-2 shadow-2xl rounded-2xl border border-blue-200 w-screen relative left-1/2 right-1/2 -translate-x-1/2 my-10 backdrop-blur-sm">
                <div
                style={{
                    display: "inline-block",
                    whiteSpace: "nowrap",
                    animation: "reviewMarquee 30s linear infinite"
                }}>
                    {[...reviews, ...reviews].map((r, idx) => (
                        <span
                        key={idx}
                        className="inline-block"
                        style={{ 
                            marginRight: "5rem" 
                            }}>
                                <span className="rounded-xl px-4 py-3 min-w-[250px] shadow-lg text-white font-semibold flex items-center gap-4 bg-white/20 backdrop-blur-sm text-lg border border-white/30">
                                    <span>
                                        <strong>
                                            {r.name}:
                                        </strong> 
                                        {r.text}
                                    </span>
                                    <span className="flex-shrink-0">
                                        <span className="text-yellow-300 text-xl">
                                            {"★".repeat(r.rating)}
                                        </span>
                                        <span className="text-white/50">
                                            {"☆".repeat(5 - r.rating)}
                                        </span>
                                    </span>
                                </span>
                            </span>
                        ))}
                    </div>
                </div>
                <div className="max-w-4xl mx-auto mt-16">
                    <h3 className="text-xl font-bold text-center mb-8 bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-white">
                        All Customer Reviews
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                    {reviews.map((r, index) => (
                        <div key={index} className="bg-gradient-to-br from-white via-blue-50 to-purple-50 rounded-2xl p-6 shadow-2xl border border-blue-100 backdrop-blur-sm transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                            <div className="flex justify-between items-start mb-3">
                                <h4 className="font-bold text-lg text-gray-800">{r.name}</h4>
                                <div className="flex items-center">
                                    <span className="text-yellow-500 text-lg">
                                        {"★".repeat(r.rating)}
                                    </span>
                                    <span className="text-gray-300">
                                        {"☆".repeat(5 - r.rating)}
                                    </span>
                                </div>
                            </div>
                            <p className="text-gray-700 leading-relaxed">{r.text}</p>
                            <div className="mt-4 h-1 w-full bg-gradient-to-r from-blue-200 to-purple-200 rounded-full opacity-30"></div>
                        </div>
                    ))}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ReviewForm;