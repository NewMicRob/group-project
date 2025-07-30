"use client";
import { useState } from "react";
import MainContent from "@/components/MainContent";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ReviewForm from "@/components/ReviewForm";

export default function ReviewsPage() {
    const [reviews, setReviews] = useState([ // Default reviews Array
        { name: "Alice", text: "Great service!", rating: 5 },
        { name: "Steve", text: "Loved the stylist!", rating: 4 },
        { name: "Charlie", text: "Very professional.", rating: 5 },
        { name: "Jeff", text: "Friendly staff and clean salon.", rating: 5 },
        { name: "Ashley", text: "Quick and easy booking.", rating: 4 },
        { name: "Frank", text: "Amazing haircut!", rating: 5 },
        { name: "Grace", text: "Will come again.", rating: 5 },
        { name: "Hannah", text: "Best experience ever.", rating: 5 },
        { name: "Victor", text: "Great value for money.", rating: 4 },
        { name: "Judy", text: "Highly recommend!", rating: 5 },
    ]);

    return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-blue-600 to-purple-600 w-full">
        <Header title='Reviews' />
        <NavBar />
        <div className="flex-1">
        <MainContent>
        {/* Reviews Section with props */}
        <ReviewForm reviews={reviews} setReviews={setReviews} />
        </MainContent>       
        </div>
        <Footer />
    </div>
    );
}
