import HeroSection from "@/components/sections/HeroSection";
import ResumeSummarySection from "@/components/sections/ResumeSummarySection";

export default function HomePage() {
  return (
    <div className="relative overflow-x-clip">
      <main>
        <HeroSection />
        <ResumeSummarySection />
      </main>
    </div>
  );
}
