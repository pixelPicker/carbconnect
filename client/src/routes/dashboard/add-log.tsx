import { ErrorMessage } from '@/components/ErrorMessage'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useLogStore } from '@/store/logStore'
import { createFileRoute, useNavigate } from '@tanstack/react-router'
import type React from 'react'
import { useState } from 'react'

export const Route = createFileRoute('/dashboard/add-log')({
  component: RouteComponent,
})

function RouteComponent() {
  const { addLog } = useLogStore()
  const [formError, setFormError] = useState<null | string>(null)
  const navigate = useNavigate()

  const categories = [
    { value: 'transport', name: 'Transport' },
    { value: 'energy', name: 'Energy' },
    { value: 'food', name: 'Food' },
    { value: 'waste', name: 'Waste' },
    { value: 'water', name: 'Water' },
    { value: 'shopping', name: 'Shopping' },
    { value: 'dailyActivities', name: 'DailyActivities' },
  ]

  const handleLogSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)

    const category = formData.get('category')
    const quantity = formData.get('quantity')

    if (!category || !quantity) {
      return
    }

    try {
      const res = await fetch('http://localhost:8080/log/add', {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify({ category, quantity: Number(quantity) }),
      })
      if (!res.ok) {
        const errorMessage = await res.json()
        throw new Error(
          errorMessage.error ?? 'Failed to add log. Please try again',
        )
      }
      const resBody = await res.json()
      addLog(resBody.log)
      navigate({ to: '/dashboard/logs' })
    } catch (error) {
      const err = error as Error
      setFormError(err.message)
    }
  }

  return (
    <div className="h-full w-full flex items-center font-Outfit justify-center">
      <div className="p-6 rounded-xl w-full max-w-md space-y-6">
        <h2 className="text-3xl font-semibold font-Bricolage text-green-800 text-center">
          Add a New Log
        </h2>

        <form onSubmit={(e) => handleLogSubmit(e)}>
          <label className="font-medium text-stone-700 mb-1">Category</label>
          <Select required name="category">
            <SelectTrigger className="!w-full !py-6 !px-4 !bg-white border !border-stone-300 !mb-2 !text-stone-800 !rounded-lg !transition-all !font-Outfit !focus:outline-none">
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent className="bg-stone-300 font-Outfit border-stone-700">
              {categories.map((category) => (
                <SelectItem
                  className="my-1 text-stone-800 hover:bg-stone-800 transition-all hover:text-stone-300"
                  value={category.value}
                  key={category.value}
                >
                  {category.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <label className="font-medium text-stone-700 mb-1">Quantity</label>
          <input
            type="number"
            min={0}
            name="quantity"
            required
            placeholder="Enter quantity"
            className="w-full bg-white border border-stone-300 text-stone-800 py-3 rounded-lg transition-all px-4 focus:outline-none mb-2"
          />

          <button
            type="submit"
            className="w-full bg-green-800 hover:bg-green-900 text-white py-3 rounded-lg transition-all cursor-pointer"
          >
            Add Log
          </button>
        </form>
        {formError && <ErrorMessage message={formError} />}
      </div>
    </div>
  )
}
