"use client";
import React from "react";
import dynamic from "next/dynamic";
import PageLayout from "@/components/PageLayout";

const FindUsMap = dynamic(() => import("@/components/Map"), { ssr: false });

export default function FindUsPage() {
    return (
    <PageLayout title="Find Us">
        <h1 className="text-2xl font-bold mb-4 text-center">
            Find Us
        </h1>
        <FindUsMap />
        </PageLayout>
        );
    }
