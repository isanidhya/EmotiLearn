"use client";

import { Bar, BarChart, Pie, PieChart as RechartsPieChart, ResponsiveContainer, Tooltip, XAxis, YAxis, Legend, Cell } from "recharts";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const timelineData = [
  { time: "9 AM", emotion: "neutral" },
  { time: "10 AM", emotion: "happy" },
  { time: "11 AM", emotion: "confused" },
  { time: "12 PM", emotion: "neutral" },
  { time: "1 PM", emotion: "stressed" },
  { time: "2 PM", emotion: "stressed" },
  { time: "3 PM", emotion: "sad" },
];

const emotionToValue = {
  happy: 5,
  neutral: 3,
  confused: 2,
  sad: 1,
  stressed: 0
};

const chartData = timelineData.map(d => ({ ...d, value: emotionToValue[d.emotion as keyof typeof emotionToValue] }));

const pieData = [
  { name: 'Happy', value: 1, color: 'hsl(var(--chart-2))' },
  { name: 'Neutral', value: 2, color: 'hsl(var(--chart-5))' },
  { name: 'Confused', value: 1, color: 'hsl(var(--chart-4))' },
  { name: 'Stressed', value: 2, color: 'hsl(var(--destructive))' },
  { name: 'Sad', value: 1, color: 'hsl(var(--chart-1))' },
];

export function EmotionCharts() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="md:col-span-2 h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData}>
            <XAxis dataKey="time" stroke="hsl(var(--muted-foreground))" fontSize={12} />
            <YAxis hide={true} domain={[0, 5]} />
            <Tooltip
              contentStyle={{
                background: "hsl(var(--card))",
                borderColor: "hsl(var(--border))",
              }}
              labelStyle={{ color: "hsl(var(--foreground))" }}
              formatter={(value, name, props) => [props.payload.emotion, "Emotion"]}
            />
            <Bar dataKey="value" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <RechartsPieChart>
            <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={5}>
                {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
            </Pie>
            <Tooltip
              contentStyle={{
                background: "hsl(var(--card))",
                borderColor: "hsl(var(--border))",
              }}
            />
             <Legend
              iconSize={10}
              layout="vertical"
              verticalAlign="middle"
              align="right"
            />
          </RechartsPieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
