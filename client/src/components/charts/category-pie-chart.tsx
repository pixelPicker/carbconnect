import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts'

const COLORS = ['#14532d', '#166534', '#1e40af', '#7c3aed', '#9f1239'];

export function EmissionBreakdown({
  data,
}: {
  data: { category: string; value: number }[]
}) {
  return (
    <div className="bg-stone-400 w-full rounded-lg p-4">
      <p className="text-stone-700">Breakdown</p>
      <h2 className="text-3xl font-Bricolage font-medium text-gray-900 mb-4">
        By Category
      </h2>
      <div className="w-full h-[300px]">
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="category"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
