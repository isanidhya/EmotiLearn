import { AdminCharts } from "@/components/dashboard/admin/AdminCharts";
import { SettingsPanel } from "@/components/dashboard/admin/SettingsPanel";
import { StressLog } from "@/components/dashboard/admin/StressLog";
import { DashboardCard } from "@/components/dashboard/DashboardCard";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, ShieldAlert, TrendingUp } from "lucide-react";

export default function AdminDashboardPage() {
  return (
    <div className="space-y-6">
       <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Students</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,254</div>
            <p className="text-xs text-muted-foreground">+20.1% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Stress Incidents (24h)</CardTitle>
            <ShieldAlert className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">32</div>
            <p className="text-xs text-muted-foreground">+12% from yesterday</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Overall Well-being</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">Good</div>
            <p className="text-xs text-muted-foreground">Trending up by 5% this week</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="analytics" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="incidents">Stress Incidents Log</TabsTrigger>
          <TabsTrigger value="settings">Configuration</TabsTrigger>
        </TabsList>
        <TabsContent value="analytics">
          <DashboardCard
            title="School-wide Emotion Trends"
            description="Weekly and monthly overview of student emotions."
          >
            <AdminCharts />
          </DashboardCard>
        </TabsContent>
        <TabsContent value="incidents">
          <DashboardCard
            title="Detailed Log of High-Stress Events"
            description="Review and manage student stress incidents."
          >
            <StressLog />
          </DashboardCard>
        </TabsContent>
        <TabsContent value="settings">
          <DashboardCard
            title="System Configuration"
            description="Adjust alert thresholds and manage emotion categories."
          >
            <SettingsPanel />
          </DashboardCard>
        </TabsContent>
      </Tabs>
    </div>
  );
}
