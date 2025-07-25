import React from "react";
import MainContent from "@/components/MainContent";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-blue-600 to-purple-600 w-full">
      <Header title='Welcome to the Home page' />
      <NavBar />
      <div className="flex-1">
        <MainContent />
      </div>
      <Footer />
    </div>
  );
}
