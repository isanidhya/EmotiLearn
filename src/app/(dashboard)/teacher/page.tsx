import { DashboardCard } from "@/components/dashboard/DashboardCard";
import { StudentStressHeatmap } from "@/components/dashboard/teacher/StudentStressHeatmap";
import { TeacherCharts } from "@/components/dashboard/teacher/TeacherCharts";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ShieldAlert } from "lucide-react";

export default function TeacherDashboardPage() {
  return (
    <div className="space-y-6">
      <Alert variant="destructive" className="bg-red-50 border-red-200 text-red-900 [&>svg]:text-red-600">
        <ShieldAlert className="h-4 w-4" />
        <AlertTitle className="font-bold">High Stress Alert!</AlertTitle>
        <AlertDescription>
          Over 40% of students in 'Grade 10 - Math' are showing high stress levels.
        </AlertDescription>
      </Alert>

      <div className="flex flex-col sm:flex-row gap-4 items-center">
        <h3 className="font-semibold whitespace-nowrap">Filters:</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full">
          <Select defaultValue="class1">
            <SelectTrigger>
              <SelectValue placeholder="Select Class" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="class1">Grade 10 - Math</SelectItem>
              <SelectItem value="class2">Grade 9 - History</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="subject1">
            <SelectTrigger>
              <SelectValue placeholder="Select Subject" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="subject1">Mathematics</SelectItem>
              <SelectItem value="subject2">History</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="col-span-2 sm:col-span-1">Apply Filters</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        <div className="lg:col-span-2">
            <DashboardCard
            title="Live Emotion Distribution"
            description="Current emotional state of the class."
            >
            <TeacherCharts />
            </DashboardCard>
        </div>
        <div className="lg:col-span-3">
            <DashboardCard
            title="Student Stress Heatmap"
            description="Emotion confidence levels across students."
            >
            <StudentStressHeatmap />
            </DashboardCard>
        </div>
      </div>
    </div>
  );
}
