import React from "react";
import dynamic from "next/dynamic";
import HairStylists from "@/components/HairStylists";
import PageLayout from "@/components/PageLayout";

// Lazy loading
const BookAppointment = dynamic(() => import("@/components/BookAppointment"), {
    loading: () => <div className="text-center py-8">Loading booking form...</div>
});

// Main page component
export default function Bookings() {
    return (
        <PageLayout title="Stylin Salon">
            <HairStylists />
            <BookAppointment />
        </PageLayout>
    );
}