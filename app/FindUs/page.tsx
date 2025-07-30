"use client";
import React from "react";
import dynamic from "next/dynamic";
import MainContent from "@/components/MainContent";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const FindUsMap = dynamic(() => import("@/components/Map"), { ssr: false });

export default function FindUsPage() {
    return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-blue-600 to-purple-600 w-full">
        <Header title='Find Us' />
        <NavBar />
        <div className="flex-1">
        <MainContent>
            <h1 className="text-2xl font-bold mb-4 text-center">Find Us</h1>
            {/* Map Component */}
            <FindUsMap />
        </MainContent>
        </div>
        <Footer />
    </div>
    );
}
