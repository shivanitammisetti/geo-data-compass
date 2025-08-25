import { Button } from "@/components/ui/button";
import { Search, Database, Globe, Satellite } from "lucide-react";
import heroImage from "@/assets/earth-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90" />
      </div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <Database className="absolute top-20 left-10 w-8 h-8 text-primary/40 animate-float" />
        <Globe className="absolute top-32 right-20 w-12 h-12 text-accent/50 animate-float" style={{ animationDelay: '1s' }} />
        <Satellite className="absolute bottom-40 left-20 w-10 h-10 text-primary-glow/60 animate-float" style={{ animationDelay: '2s' }} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Earth Science
            <span className="block">Data Discovery</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Navigate NASA's vast Earth science archives with intelligent recommendations. 
            Find the perfect datasets for studying natural events and phenomena.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="cosmic" size="lg" className="text-lg px-8 py-4">
              <Search className="w-5 h-5 mr-2" />
              Start Exploring
            </Button>
            <Button variant="data" size="lg" className="text-lg px-8 py-4">
              <Database className="w-5 h-5 mr-2" />
              Browse Datasets
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-card/80 backdrop-blur-sm rounded-lg p-6 shadow-data">
              <div className="text-3xl font-bold text-primary mb-2">6,000+</div>
              <div className="text-muted-foreground">Earth Science Datasets</div>
            </div>
            <div className="bg-card/80 backdrop-blur-sm rounded-lg p-6 shadow-data">
              <div className="text-3xl font-bold text-primary mb-2">500M+</div>
              <div className="text-muted-foreground">Data Files Available</div>
            </div>
            <div className="bg-card/80 backdrop-blur-sm rounded-lg p-6 shadow-data">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Earth Phenomena Types</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;