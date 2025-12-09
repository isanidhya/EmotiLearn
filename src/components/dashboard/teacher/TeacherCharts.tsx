"use client";

import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis, Cell } from "recharts";

const data = [
  { emotion: "Happy", students: 8, color: "hsl(var(--chart-2))" },
  { emotion: "Neutral", students: 12, color: "hsl(var(--chart-5))" },
  { emotion: "Confused", students: 3, color: "hsl(var(--chart-4))" },
  { emotion: "Sad", students: 1, color: "hsl(var(--chart-1))" },
  { emotion: "Stressed", students: 6, color: "hsl(var(--destructive))" },
];

export function TeacherCharts() {
  return (
    <div className="h-[350px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} layout="vertical" margin={{ left: 10, right: 20 }}>
          <XAxis type="number" hide />
          <YAxis
            type="category"
            dataKey="emotion"
            stroke="hsl(var(--muted-foreground))"
            fontSize={12}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            cursor={{ fill: "hsl(var(--background))" }}
            contentStyle={{
              background: "hsl(var(--card))",
              borderColor: "hsl(var(--border))",
            }}
          />
          <Bar dataKey="students" radius={[0, 4, 4, 0]}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
