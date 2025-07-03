import HeroSection from "@/Components/Hero";
import CareerChoicesSection from "@/Components/CarrierChoicesSection";
import WhyUs from "@/Components/WhyUs";
import React from "react";
import NewsEventsCarousel from "@/Components/NewsEvents";
import UniversitiesCarousel from "@/Components/Universities";
import StudentSuccessCarousel from "@/Components/StudentSuccess";
import CountriesCarousel from "@/Components/Countries";
import AboutSection from "@/Components/About";
import ContactSection from "@/Components/ContactSection";
import ConnectWithUs from "@/Components/ConnectWithUs";
// import FindUs from "@/Components/AboutFindUs";
// import FindUsSection from "@/Components/FindUs";

export default async function page() {
  return (
    <main className="overflow-x-hidden">
      <div className="w-full max-w-[100vw]">
        <HeroSection />
        <CareerChoicesSection />
        <AboutSection />
        <WhyUs />
        <NewsEventsCarousel />
        <UniversitiesCarousel />
        <StudentSuccessCarousel />
        <CountriesCarousel />
        <ConnectWithUs />
        <ContactSection />
        {/* <FindUs /> */}
        {/* <FindUsSection /> */}
      </div>
    </main>
  );
}
