import {
  useReactTable,
  createColumnHelper,
  getCoreRowModel,
  flexRender,
  type SortingState,
  getSortedRowModel,
  getPaginationRowModel,
} from '@tanstack/react-table'
import { useLogStore } from '@/store/logStore'
import type { Log } from '@/types/logType'
import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'
import { API_BASE_URL } from '@/lib/constants'
import { ChevronDown, ChevronUp, Trash2 } from 'lucide-react'
import { NoLogsFound } from '@/components/NoLogsFound'

export const Route = createFileRoute('/dashboard/logs')({
  component: RouteComponent,
})

const columnHelper = createColumnHelper<Log>()

function RouteComponent() {
  return <Logs />
}

function Logs() {
  const { logs, deleteAllLogs } = useLogStore((s) => s)

  const handleDeleteAllLogs = async () => {
    const res = await fetch(`${API_BASE_URL}log/deleteAll`, {
      credentials: 'include',
      method: 'DELETE',
    })
    if (!res.ok) {
      return
    }
    deleteAllLogs()
  }

  return (
    <div className="flex font-Outfit flex-col h-full w-full">
      <div className="flex items-center justify-between my-4 px-2">
        <h1 className="text-3xl font-semibold font-Bricolage text-green-900">
          All Logs
        </h1>
        <div className="flex items-center gap-2">
          <Link
            to="/dashboard/add-log"
            className="bg-green-800 cursor-pointer hover:bg-green-900 text-white px-4 py-2 rounded-md font-medium transition"
          >
            + New Log
          </Link>
          {logs.length > 0 && (
            <button
              onClick={handleDeleteAllLogs}
              className="bg-green-800 cursor-pointer hover:bg-green-900 text-white px-4 py-2 rounded-md font-medium transition"
            >
              Delete All
            </button>
          )}
        </div>
      </div>

      {logs.length > 0 ? <LogsTable data={logs} /> : <NoLogsFound />}
    </div>
  )
}
function LogsTable({ data }: { data: Log[] }) {
  const [sorting, setSorting] = useState<SortingState>([])
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  })

  const { deleteLog } = useLogStore()

  const columns = [
    columnHelper.accessor((log) => log.id, {
      id: 'id',
      header: 'Serial No.',
      cell: (info) => info.row.index + 1,
    }),
    columnHelper.accessor((log) => log.emissionTotal, {
      id: 'total-emission',
      cell: (info) => `${info.getValue()}kg CO2e`,
      header: 'Total Emission',
      sortingFn: 'alphanumeric',
    }),
    columnHelper.accessor((log) => log.category, {
      id: 'category',
      cell: (info) => info.getValue(),
      header: 'Category',
      sortingFn: 'text',
    }),
    columnHelper.accessor((log) => log.quantity, {
      id: 'quantity',
      cell: (info) => info.getValue(),
      header: 'Quantity',
      sortingFn: 'alphanumeric',
    }),
    columnHelper.accessor((log) => log.createdAt, {
      id: 'created',
      cell: (info) => new Date(info.getValue() ?? '').toUTCString(),
      header: 'Created At',
      sortingFn: 'datetime',
    }),
    columnHelper.display({
      id: 'delete',
      header: 'Actions',
      cell: (info) => (
        <Trash2
          className="cursor-pointer"
          onClick={() => handleDeleteLog(parseInt(info.row.id))}
        />
      ),
    }),
  ]

  const table = useReactTable({
    columns,
    data,
    state: { sorting, pagination },
    onPaginationChange: setPagination,
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  })

  const handleDeleteLog = async (logId: Log['id']) => {
    const res = await fetch(`${API_BASE_URL}log/delete/${logId}`, {
      credentials: 'include',
      method: 'DELETE',
    })
    if (!res.ok) {
      return
    }
    deleteLog(logId)
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-400 rounded-lg overflow-hidden">
        <thead className="bg-stone-500 text-white">
          {table.getHeaderGroups().map((head) => (
            <tr key={head.id}>
              {head.headers.map((header) => (
                <th
                  key={header.id}
                  onClick={header.column.getToggleSortingHandler()}
                  className="px-4 py-3 text-left font-medium font-Outfit tracking-wide cursor-pointer border border-gray-500 rounded-t-lg"
                >
                  {header.isPlaceholder ? null : (
                    <div className="flex justify-between items-center">
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                      {{
                        asc: <ChevronUp className="text-sm" />,
                        desc: <ChevronDown />,
                      }[header.column.getIsSorted() as string] ?? null}
                    </div>
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="hover:bg-green-50 transition-colors">
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className="px-4 py-3 border border-gray-300 bg-transparent text-gray-800 font-light"
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

