import React from "react";
import dynamic from "next/dynamic";
import HairStylists from "@/components/HairStylists";
import PageLayout from "@/components/PageLayout";
import type { Metadata } from "next";

// Lazy loading the service pricing
const ServicePricing = dynamic(() => import("@/components/ServicePricing"), {
    loading: () => <div className="text-center py-8">Loading services...</div>
});

// Main page component for Services
export default function Services() {
    return (
    <PageLayout title="Stylin Salon">
        <HairStylists />
        <ServicePricing />
    </PageLayout>
    );
}