export type Log = {
  id: number
  userId: string
  category: string
  quantity: number
  emissionFactor: number
  emissionTotal: number | null
  createdAt: string | null
}
