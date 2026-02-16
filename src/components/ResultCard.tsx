import { PredictionResult } from "@/lib/api";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, AlertTriangle, Lightbulb, TrendingUp } from "lucide-react";

interface ResultCardProps {
  result: PredictionResult;
}

const ResultCard = ({ result }: ResultCardProps) => {
  const { placementProbability, advice, strengths, improvements } = result;

  const getColor = () => {
    if (placementProbability >= 75) return "text-success";
    if (placementProbability >= 50) return "text-warning";
    return "text-destructive";
  };

  const getLabel = () => {
    if (placementProbability >= 75) return "High";
    if (placementProbability >= 50) return "Moderate";
    return "Needs Work";
  };

  return (
    <div className="space-y-6 animate-fade-in-up">
      {/* Probability Card */}
      <Card className="border-2 border-primary/20 shadow-lg animate-pulse-glow">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-lg font-display">
            <TrendingUp className="h-5 w-5 text-primary" />
            Placement Probability
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-end gap-3 mb-3">
            <span className={`text-5xl font-bold font-display ${getColor()}`}>
              {placementProbability}%
            </span>
            <span className={`text-sm font-medium mb-2 ${getColor()}`}>
              {getLabel()}
            </span>
          </div>
          <Progress value={placementProbability} className="h-3" />
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Strengths */}
        {strengths.length > 0 && (
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-base font-display">
                <CheckCircle className="h-5 w-5 text-success" />
                Your Strengths
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {strengths.map((s, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-success shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}

        {/* Improvements */}
        {improvements.length > 0 && (
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-base font-display">
                <AlertTriangle className="h-5 w-5 text-warning" />
                Areas to Improve
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {improvements.map((s, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-warning shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Advice */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-base font-display">
            <Lightbulb className="h-5 w-5 text-primary" />
            Personalized Advice
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {advice.map((a, i) => (
              <li key={i} className="flex items-start gap-2 text-sm">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                {a}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResultCard;
