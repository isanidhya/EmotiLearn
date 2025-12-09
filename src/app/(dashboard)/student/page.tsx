import { EmotionCharts } from "@/components/dashboard/student/EmotionCharts";
import { DashboardCard } from "@/components/dashboard/DashboardCard";
import { Badge } from "@/components/ui/badge";

export default function StudentDashboardPage() {
  return (
    <div className="space-y-6">
      <DashboardCard
        title="Daily Emotion Summary"
        description="Your emotional journey today."
      >
        <EmotionCharts />
      </DashboardCard>
      <DashboardCard title="Current Stress Level">
          <div className="flex items-center justify-center p-8">
            <Badge
              variant="destructive"
              className="text-lg px-4 py-2 bg-red-100 text-red-800 border-red-200"
            >
              Medium
            </Badge>
          </div>
          <p className="text-center text-sm text-muted-foreground">
            Based on recent emotional data inputs.
          </p>
        </DashboardCard>
    </div>
  );
}
