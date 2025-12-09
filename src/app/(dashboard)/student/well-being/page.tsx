import { HealthTips } from "@/components/dashboard/student/HealthTips";
import { SelfFeedbackCard } from "@/components/dashboard/student/SelfFeedbackCard";

export default function StudentWellBeingPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2">
        <SelfFeedbackCard />
      </div>
      <div>
        <HealthTips />
      </div>
    </div>
  );
}
