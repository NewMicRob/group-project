import React from "react";
import BookAppointment from "@/components/BookAppointment";
import HairStylists from "@/components/HairStylists";
import PageLayout from "@/components/PageLayout";

// Main page component
export default function Bookings() {
  return (
    <PageLayout title="Bookings">
      <HairStylists />
      <BookAppointment />
    </PageLayout>
  );
}