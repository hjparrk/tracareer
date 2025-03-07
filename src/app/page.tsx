import HomeLayout from "@/components/home/home-layout";
import HomeInnerLayout from "@/components/home/home-inner-layout";
import HeroSection from "@/components/home/hero-section";
import TrackerPreview from "@/components/home/tracker-preview";

export default function Home() {
  return (
    <HomeLayout>
      <HomeInnerLayout>
        {/* Hero */}
        <HeroSection />

        {/* Tracker Preview Image */}
        <TrackerPreview />
      </HomeInnerLayout>
    </HomeLayout>
  );
}
