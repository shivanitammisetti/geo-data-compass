import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Loader2, GraduationCap } from "lucide-react";
import SkillInput from "./SkillInput";
import { StudentData, PredictionResult, predictPlacement } from "@/lib/api";
import { toast } from "@/hooks/use-toast";

interface StudentFormProps {
  onResult: (result: PredictionResult) => void;
}

const branches = [
  "Computer Science",
  "Information Technology",
  "Electronics & Communication",
  "Electrical Engineering",
  "Mechanical Engineering",
  "Civil Engineering",
  "Chemical Engineering",
  "Other",
];

const StudentForm = ({ onResult }: StudentFormProps) => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState<StudentData>({
    name: "",
    branch: "",
    academicScore: 0,
    internships: 0,
    projects: 0,
    certifications: 0,
    skills: [],
  });

  const handleChange = (field: keyof StudentData, value: string | number | string[]) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim()) {
      toast({ title: "Name is required", variant: "destructive" });
      return;
    }
    if (!form.branch) {
      toast({ title: "Please select a branch", variant: "destructive" });
      return;
    }
    if (form.academicScore <= 0 || form.academicScore > 100) {
      toast({ title: "Enter a valid academic score (1–100)", variant: "destructive" });
      return;
    }
    if (form.skills.length === 0) {
      toast({ title: "Add at least one skill", variant: "destructive" });
      return;
    }

    setLoading(true);
    try {
      const result = await predictPlacement(form);
      onResult(result);
    } catch {
      toast({ title: "Prediction failed", description: "Please try again.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="shadow-xl border-0 bg-card/80 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 font-display text-xl">
          <GraduationCap className="h-6 w-6 text-primary" />
          Student Profile
        </CardTitle>
        <CardDescription>Enter your details to predict placement chances</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name & Branch */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                value={form.name}
                onChange={(e) => handleChange("name", e.target.value)}
                placeholder="John Doe"
                maxLength={100}
              />
            </div>
            <div className="space-y-2">
              <Label>Branch</Label>
              <Select value={form.branch} onValueChange={(v) => handleChange("branch", v)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select branch" />
                </SelectTrigger>
                <SelectContent>
                  {branches.map((b) => (
                    <SelectItem key={b} value={b}>{b}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Scores row */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-2">
              <Label htmlFor="score">Academic Score (%)</Label>
              <Input
                id="score"
                type="number"
                min={0}
                max={100}
                value={form.academicScore || ""}
                onChange={(e) => handleChange("academicScore", Number(e.target.value))}
                placeholder="85"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="internships">Internships</Label>
              <Input
                id="internships"
                type="number"
                min={0}
                max={20}
                value={form.internships || ""}
                onChange={(e) => handleChange("internships", Number(e.target.value))}
                placeholder="2"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="projects">Projects</Label>
              <Input
                id="projects"
                type="number"
                min={0}
                max={50}
                value={form.projects || ""}
                onChange={(e) => handleChange("projects", Number(e.target.value))}
                placeholder="3"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="certs">Certifications</Label>
              <Input
                id="certs"
                type="number"
                min={0}
                max={30}
                value={form.certifications || ""}
                onChange={(e) => handleChange("certifications", Number(e.target.value))}
                placeholder="2"
              />
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-2">
            <Label>Technical Skills</Label>
            <SkillInput skills={form.skills} onChange={(s) => handleChange("skills", s)} />
          </div>

          <Button type="submit" className="w-full h-12 text-base font-semibold" disabled={loading}>
            {loading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Analyzing...
              </>
            ) : (
              "Predict Placement"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default StudentForm;
