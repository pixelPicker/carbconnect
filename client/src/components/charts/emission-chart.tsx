// components/EmissionsChart.tsx
"use client"

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts"

type Props = {
  data: { date: string; emission: number }[]
}

export function EmissionsChart({ data }: Props) {
  return (
    <div className="bg-stone-400 rounded-lg p-4">
      <p className="text-stone-700">Emissions Over Time</p>
      <h2 className="text-3xl font-Bricolage font-medium text-gray-900 mb-4">
        Trends
      </h2>
      <div className="w-full h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid stroke="#e5e7eb" strokeDasharray="3 3" />
            <XAxis dataKey="date" tick={{ fill: "#4b5563" }} />
            <YAxis tick={{ fill: "#4b5563" }} />
            <Tooltip
              contentStyle={{
                backgroundColor: "#fefce8",
                borderColor: "#d6d3d1",
                color: "#111827",
                fontFamily: "Bricolage Grotesque, sans-serif",
              }}
              labelStyle={{ color: "#4b5563" }}
              cursor={{ stroke: "#4ade80", strokeWidth: 1 }}
            />
            <Line
              type="monotone"
              dataKey="emission"
              stroke="#16a34a" // Tailwind green-600
              strokeWidth={3}
              dot={{ r: 3, stroke: "#16a34a", strokeWidth: 2, fill: "#fff" }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}