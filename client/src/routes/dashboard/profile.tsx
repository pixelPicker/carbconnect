import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { useUserStore } from '@/store/userStore'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/profile')({
  component: RouteComponent,
})

function RouteComponent() {
  const { user } = useUserStore()

  if (!user) return null

  return (
    <div className="h-full flex items-center justify-center">
      <div className="w-full max-w-xl flex flex-col items-center text-stone-800 font-Outfit space-y-6">
        <div className="flex flex-col items-center gap-3">
          <Avatar className="size-20">
            <AvatarImage src={user.image ?? ''} alt={user.name} />
            <AvatarFallback className="text-4xl font-Bricolage bg-stone-600 text-white">
              {user.name?.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <h1 className="text-2xl font-Bricolage font-semibold">{user.name}</h1>
          <p className="text-stone-600">{user.email}</p>

        </div>

        <div className="w-full max-w-md text-base space-y-4">
          <div className="flex justify-between border-b pb-2">
            <span className="font-medium text-xl text-stone-700">User ID</span>
            <span className="text-stone-500 truncate">{user.id}</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="font-medium text-xl text-stone-700">Created At</span>
            <span className="text-stone-500">
              {new Date(user.createdAt).toLocaleDateString()}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-xl text-stone-700">Last Updated</span>
            <span className="text-stone-500">
              {new Date(user.updatedAt).toLocaleDateString()}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}