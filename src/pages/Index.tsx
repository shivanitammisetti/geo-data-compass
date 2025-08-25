import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SearchInterface from "@/components/SearchInterface";
import DatasetGrid from "@/components/DatasetGrid";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <SearchInterface />
        <DatasetGrid />
      </main>
    </div>
  );
};

export default Index;
