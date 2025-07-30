"use client";
import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";

const ReviewForm = ({ reviews, setReviews }) => {
    const [name, setName] = useState("");
    const [text, setText] = useState("");
    const [rating, setRating] = useState(5);

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

        // Validation
        let valid = true;
        let autoName = name.trim();
        let errorMsg = "";

        // Name validation and auto-insert
        if (!autoName) {
            // Alternate between John Doe and Jane Doe
            autoName = Math.random() < 0.5 ? "John Doe" : "Jane Doe";
        } else if (!/^[a-zA-Z\s]{2,}$/.test(autoName)) {
            errorMsg = "Please enter a valid name (letters and spaces only).";
            valid = false;
        }

        // Review validation
        if (!text.trim()) {
            errorMsg = "Please enter your review.";
            valid = false;
        }

        // Rating validation
        if (!rating || rating < 1 || rating > 5) {
            errorMsg = "Please select a rating between 1 and 5.";
            valid = false;
        }

        if (!valid) {
            return;
        }

        // Adds review to list
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
                    className="text-center bg-white rounded-xl shadow-lg p-6 w-full max-w-xl mx-auto"
                    >
                        <h2 className="text-xl text-black font-bold mb-4">
                            Leave a Review
                        </h2>
                        {/* Name input */}
                        <div className="mb-4 flex justify-center">
                            <div className="w-1/2">
                            <label className="block text-gray-700 mb-2 text-center" htmlFor="name">
                                Your Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Your Name"
                                value={name}
                                onChange={e => setName(e.target.value)}
                                required
                                className="w-full p-2 border border-gray-300 rounded text-gray-700 placeholder:text-gray-400"
                            />
                            </div>
                        </div>
                        {/* Review textarea */}
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2" htmlFor="text">Your Review</label>
                            <textarea
                            id="text"
                            name="text"
                            placeholder="Your Review"
                            value={text}
                            onChange={e => setText(e.target.value)}
                            required
                            className="w-full p-2 border border-gray-300 rounded min-h-[100px] focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none placeholder:text-gray-400">
                            </textarea>
                        </div>
                        {/* Rating select */}
                        <div className="mb-4 flex flex-col items-center">
                            <label className="block text-gray-700 mb-2 text-center" htmlFor="rating">
                                Rating
                            </label>
                            <select
                            id="rating"
                            value={rating}
                            onChange={e => setRating(Number(e.target.value))}
                            required
                            className="w-28 px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-700 text-center">
                                {[5, 4, 3, 2, 1].map(num => (
                                    <option key={num} value={num}>{num} Star{num > 1 ? "s" : ""}</option>
                                    ))}
                            </select>
                        </div>
                        {/* Submit button */}
                        <button
                        type="submit"
                        className="min-w-60 max-w-100 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors">
                            Submit Review
                        </button>
                </form>
                {/* Header for carousel */}
                <h2 className="text-xl font-bold text-center mb-2 text-black pt-20">
                    Recent Reviews
                </h2>
                {/* Marquee carousel */}
                <div className="overflow-hidden h-24 flex items-center bg-gradient-to-r from-blue-400 to-purple-400 py-1 shadow rounded text-black w-screen relative left-1/2 right-1/2 -translate-x-1/2 my-8 mb-20">
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
                            marginRight: "4rem" 
                            }}>
                                <span className="rounded-lg px-0 py-4 min-w-[200px] shadow-none text-black font-medium flex items-center gap-4 bg-transparent text-xl">
                                    <span>
                                        <strong>
                                            {r.name}:
                                        </strong> 
                                        {r.text}
                                    </span>
                                    <span>
                                        <span className="text-yellow-400">
                                            {"★".repeat(r.rating)}
                                        </span>
                                        <span className="text-gray-300">
                                            {"☆".repeat(5 - r.rating)}
                                        </span>
                                    </span>
                                </span>
                            </span>
                        ))}
                    </div>
                </div>
                {/* List of reviews */}
                <ul className="max-w-md mx-auto">
                    {reviews.map((r, index) => (
                        <li key={index} className="mb-2 bg-white rounded px-4 py-2 shadow text-black mt-10">
                            <strong>{r.name}:</strong> {r.text} <br />
                            <span className="text-yellow-400">
                                {"★".repeat(r.rating)}
                            </span>
                            <span className="text-gray-300">
                                {"☆".repeat(5 - r.rating)}
                            </span>
                        </li>
                    ))}
                </ul>
            </main>
        </div>
    );
};

export default ReviewForm;