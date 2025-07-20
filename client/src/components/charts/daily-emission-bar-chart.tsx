import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

export function DailyEmissions({ data }: { data: { date: string; emission: number }[] }) {
  return (
    <div className="bg-stone-400 rounded-lg p-4">
      <p className="text-stone-700">Daily Stats</p>
      <h2 className="text-3xl font-Bricolage font-medium text-gray-900 mb-4">
        Per Day Emission
      </h2>
      <div className="w-full h-[300px]">
        <ResponsiveContainer>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" tick={{ fill: "#4b5563" }} />
            <YAxis tick={{ fill: "#4b5563" }} />
            <Tooltip />
            <Bar dataKey="emission" fill="#16a34a" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
