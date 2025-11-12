import HeroSection from "@/components/hero-section";
import FirstSection from "@/components/first-section";
import FacilitiesSection from "@/components/facilities-section";
import MobileApp from "@/components/mobile-app";
import MembershipSection from "@/components/membership-section";
import ContactUsSection from "@/components/contact-us-section";
import MapSection from "@/components/map-section";
import AerospacePavilionSection from "@/components/aerospace-pavilion-section";
import ServicesSection from "@/components/services-section";
import LogoSection from "@/components/logo-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <LogoSection />
      <FirstSection />
      <FacilitiesSection />
      <ServicesSection />
      <AerospacePavilionSection />
      <MapSection />
      <MobileApp />
      <MembershipSection />
      <ContactUsSection />
    </main>
  );
}
