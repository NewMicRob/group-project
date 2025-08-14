import React from "react";
import HairStylists from "@/components/HairStylists";
import PageLayout from "@/components/PageLayout";
import Home from "@/components/Home";

// Main page component
export default function HomePage() {
  return (
    <PageLayout title="Stylin Salon">
      <HairStylists />
      <Home />
    </PageLayout>
  );
}