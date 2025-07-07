"use client";

import CallToActionSection from "../components/CallToActionSection";
import FeaturesSection from "../components/FeaturesSection";
import FooterSection from "../components/FooterSection";
import HeroSection from "../components/HeroSection";
import MenuSection from "../components/MenuSection";
import ProjectsSection from "../components/ProjectsSection";
import ServicesSection from "../components/ServicesSection";
import TeamSection from "../components/TeamSection";
import TestimonialsSection from "../components/TestimonialsSection";
import WhatsappFloatButton from "../components/WhatsappFloatButton";

export default function Home() {
  return (
    <>
      <MenuSection />
      <HeroSection />
      <FeaturesSection />
      <ProjectsSection />
      <ServicesSection />
      <TestimonialsSection />
      <TeamSection />
      <CallToActionSection />
      <FooterSection />
      <WhatsappFloatButton />
    </>
  );
}
