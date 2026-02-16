import { useState } from "react";
import StudentForm from "@/components/StudentForm";
import ResultCard from "@/components/ResultCard";
import { PredictionResult } from "@/lib/api";
import { BrainCircuit } from "lucide-react";

const Index = () => {
  const [result, setResult] = useState<PredictionResult | null>(null);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/60 backdrop-blur-md sticky top-0 z-50">
        <div className="container flex items-center gap-3 py-4">
          <div className="rounded-xl bg-primary p-2">
            <BrainCircuit className="h-6 w-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-lg font-bold font-display leading-tight">
              Smart Placement Predictor
            </h1>
            <p className="text-xs text-muted-foreground">
              Skill Analyzer & Career Guide
            </p>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container py-10 text-center max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold font-display mb-3 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Know Your Placement Chances
        </h2>
        <p className="text-muted-foreground text-base sm:text-lg">
          Enter your academic profile and skills to get an instant AI-powered prediction
          with personalized career advice.
        </p>
      </section>

      {/* Main Content */}
      <main className="container pb-16 max-w-3xl mx-auto space-y-8">
        <StudentForm onResult={setResult} />
        {result && <ResultCard result={result} />}
      </main>
    </div>
  );
};

export default Index;
