"use client";

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, Legend, CartesianGrid } from "recharts";

const weeklyData = [
    { day: 'Mon', stressed: 12, happy: 30, neutral: 45 },
    { day: 'Tue', stressed: 15, happy: 28, neutral: 48 },
    { day: 'Wed', stressed: 18, happy: 35, neutral: 40 },
    { day: 'Thu', stressed: 10, happy: 42, neutral: 50 },
    { day: 'Fri', stressed: 22, happy: 25, neutral: 38 },
];

const monthlyData = [
    { week: 'Week 1', stressed: 80, happy: 150, neutral: 200 },
    { week: 'Week 2', stressed: 95, happy: 140, neutral: 210 },
    { week: 'Week 3', stressed: 75, happy: 160, neutral: 190 },
    { week: 'Week 4', stressed: 110, happy: 130, neutral: 180 },
];

export function AdminCharts() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-[350px]">
      <div>
        <h3 className="font-semibold text-center mb-2">Weekly Stress vs Happy Students</h3>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={weeklyData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="day" fontSize={12} stroke="hsl(var(--muted-foreground))" />
            <YAxis fontSize={12} stroke="hsl(var(--muted-foreground))" />
            <Tooltip contentStyle={{ background: "hsl(var(--card))", borderColor: "hsl(var(--border))" }} />
            <Legend iconSize={10} />
            <Line type="monotone" dataKey="stressed" stroke="hsl(var(--destructive))" strokeWidth={2} name="Stressed" />
            <Line type="monotone" dataKey="happy" stroke="hsl(var(--chart-2))" strokeWidth={2} name="Happy" />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div>
        <h3 className="font-semibold text-center mb-2">Monthly Trends</h3>
         <ResponsiveContainer width="100%" height="100%">
          <LineChart data={monthlyData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="week" fontSize={12} stroke="hsl(var(--muted-foreground))" />
            <YAxis fontSize={12} stroke="hsl(var(--muted-foreground))" />
            <Tooltip contentStyle={{ background: "hsl(var(--card))", borderColor: "hsl(var(--border))" }} />
            <Legend iconSize={10}/>
            <Line type="monotone" dataKey="stressed" stroke="hsl(var(--destructive))" strokeWidth={2} name="Stressed" />
            <Line type="monotone" dataKey="happy" stroke="hsl(var(--chart-2))" strokeWidth={2} name="Happy" />
            <Line type="monotone" dataKey="neutral" stroke="hsl(var(--chart-5))" strokeWidth={2} name="Neutral" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
