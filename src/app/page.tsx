import { Hero } from "@/components/Hero";
import { PortfolioBento } from "@/components/PortfolioBento";
import { Services } from "@/components/Services";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { TestimonialsMarquee } from "@/components/TestimonialsMarquee";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full">
      <Hero />
      <PortfolioBento />
      <Services />
      <ProcessTimeline />
      <TestimonialsMarquee />
    </main>
  );
}
