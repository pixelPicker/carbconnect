import { API_BASE_URL } from '@/lib/constants'
import type { Log } from '@/types/logType'
import { create } from 'zustand'

export type LogStoreType = {
  logs: Log[]
  addLog: (log: Log) => void
  deleteAllLogs: () => void
  deleteLog: (logId: Log['id']) => void
  fetchLogs: (logs: Log[]) => void
}

export const useLogStore = create<LogStoreType>((set) => ({
  logs: [],
  addLog: async (log) =>
    set((state) => {
      return { logs: [...state.logs, log] }
    }),
  deleteAllLogs: async () => {
    set({ logs: [] })
  },
  deleteLog: async (logId) => {
    set((state) => {
      const updatedLogs = state.logs.filter((log) => log.id !== logId)
      return { logs: updatedLogs }
    })
  },
  fetchLogs: (logs) => {
    set({ logs  })
  },
}))
