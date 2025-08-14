"use client";
import React from "react";
import dynamic from "next/dynamic";
import PageLayout from "@/components/PageLayout";
import HairStylists from "@/components/HairStylists";

// Lazy loading the map
const FindUsMap = dynamic(() => import("@/components/Map"), { ssr: false });

// Main page component for Find Us
export default function FindUsPage() {
    return (
        <PageLayout title="Stylin Salon">
            <HairStylists />
            <h1 className="text-2xl font-bold mb-4 text-center">
                Find Us
            </h1>
            <FindUsMap />
        </PageLayout>
        );
    }
