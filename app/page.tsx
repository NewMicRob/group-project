import React from "react";
import MainContent from "@/components/MainContent";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import BookAppointment from "@/components/BookAppointment";
import HairStylists from "@/components/HairStylists";

// Main page component
export default function Bookings() {
  return (
    <div className="flex flex-col bg-gradient-to-r from-blue-600 to-purple-600 w-full">
      <Header title='Welcome to the NAME page look into adding an img here instead of having text' />
      <NavBar />
      <div className="flex-1">
        <MainContent>
          <HairStylists />
          <BookAppointment />
        </MainContent>
      </div>
      <Footer />
    </div>
  );
}
