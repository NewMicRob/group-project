"use client";
import { useState } from "react";
import MainContent from "@/components/MainContent";
import ReviewForm from "@/components/ReviewForm";
import PageLayout from "@/components/PageLayout";

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
        <PageLayout title='Reviews'>
            <MainContent>
                {/* Reviews Section with props */}
                <ReviewForm reviews={reviews} setReviews={setReviews} />
            </MainContent>
        </PageLayout>
    );
}
