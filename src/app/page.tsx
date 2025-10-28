"use client";

import FooterSection from "../components/FooterSection";
import HeroSection from "../components/HeroSection";
import MenuSection from "../components/MenuSection";
import ProjectsSection from "../components/ProjectsSection";
import TeamSection from "../components/TeamSection";
import TestimonialsSection from "../components/TestimonialsSection";
import WhatsappFloatButton from "../components/WhatsappFloatButton";

export default function Home() {
  return (
    <>
      <MenuSection />
      <HeroSection />
      <ProjectsSection />
      <TestimonialsSection />
      <TeamSection />
      <FooterSection />
      <WhatsappFloatButton />
    </>
  );
}
