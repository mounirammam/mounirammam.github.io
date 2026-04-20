import HeroSection from "@/components/sections/HeroSection";
import ResumeSummarySection from "@/components/sections/ResumeSummarySection";
import ToolboxSection from "@/components/sections/ToolboxSection";

export default function HomePage() {
  return (
    <div className="relative overflow-x-clip">
      <main>
        <HeroSection />
        <ResumeSummarySection />
        <ToolboxSection />
      </main>
    </div>
  );
}
