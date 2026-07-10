import Header from "@/components/layout/Header";
import Hero from "@/components/home/Hero";
import TrendingBeats from "@/components/home/TrendingBeats";
import Categories from "@/components/home/Categories";
import FeaturedProducers from "@/components/home/FeaturedProducers";
import Pricing from "@/components/home/Pricing";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#09090f]">
      <Header />
      <Hero />
      <TrendingBeats />
      <Categories />
      <FeaturedProducers />
      <Pricing />
    </main>
  );
}