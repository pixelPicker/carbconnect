import { EmissionBreakdown } from '@/components/charts/category-pie-chart'
import { DailyEmissions } from '@/components/charts/daily-emission-bar-chart'
import { EmissionsChart } from '@/components/charts/emission-chart'
import { useLogStore } from '@/store/logStore'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Dashboard />
}

function Dashboard() {
  const { logs } = useLogStore((s) => s)

  const totalLogs = logs.length
  const totalEmissions = logs.reduce(
    (acc, log) => acc + (log.emissionTotal || 0),
    0,
  )
  const avgPerDay = totalEmissions / (logs.length || 1)

  const lastLog = logs.at(-1)

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-Bricolage font-bold text-stone-800">
        Dashboard
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-stone-400 rounded-lg p-4">
          <p className="text-stone-700">Total Logs</p>
          <h2 className="text-3xl font-Bricolage font-Medium text-gray-900">
            {totalLogs}
          </h2>
        </div>

        <div className="bg-stone-400 rounded-lg p-4">
          <p className="text-stone-700">Carbon Emitted</p>
          <h2 className="text-3xl font-Bricolage font-Medium text-gray-900">
            {totalEmissions.toFixed(2)} kg
          </h2>
        </div>

        <div className="bg-stone-400 rounded-lg p-4">
          <p className="text-stone-700">Last Log</p>
          <h2 className="text-3xl font-Bricolage font-Medium text-gray-900">
            {lastLog?.createdAt
              ? new Date(lastLog.createdAt).toDateString()
              : 'No logs yet'}
          </h2>
        </div>

        <div className="bg-stone-400 rounded-lg p-4">
          <p className="text-stone-700">Avg/Day (Rough)</p>
          <h2 className="text-3xl font-Bricolage font-Medium text-gray-900">
            {avgPerDay.toFixed(2)} kg
          </h2>
        </div>
      </div>

      <Charts />
    </div>
  )
}

function Charts() {
  const { logs } = useLogStore()
  const dateAndEmission = logs.map((log) => {
    return {
      date: new Date(log.createdAt ?? '').toLocaleString() ?? '',
      emission: log.emissionTotal ?? 0,
    }
  })
  return (
    <>
      <EmissionsChart data={dateAndEmission} />

      <div className="grid grid-cols-2 gap-4">
        <EmissionBreakdown
          data={logs.map((log) => {
            return {
              category: log.category,
              value: log.emissionTotal ?? 0,
            }
          })}
        />
        <DailyEmissions data={dateAndEmission} />
      </div>
    </>
  )
}
