import {
  createFileRoute,
  Link,
  Outlet,
  useNavigate,
} from '@tanstack/react-router'
import authClient from '../../api/auth/authClient'
import { useUserStore } from '../../store/useUserStore'
import { useEffect, type ComponentType, type SVGProps } from 'react'
import { useSessionStore } from '../../store/useSessionStore'
import { LoadingState } from '@/components/LoadingState'
import { ErrorState } from '@/components/ErrorState'
import { CogIcon } from '@heroicons/react/24/outline'
import { UserIcon } from '@heroicons/react/24/outline'
import { CalendarIcon } from '@heroicons/react/24/outline'
import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline'
import { BookOpenIcon } from '@heroicons/react/24/outline'
import { HomeIcon } from '@heroicons/react/24/outline'
import Logo from '@/components/Logo'

export const Route = createFileRoute('/dashboard')({
  component: RouteComponent,
})

type IconType = ComponentType<SVGProps<SVGSVGElement>>

function RouteComponent() {
  const { user, setUser } = useUserStore((s) => s)
  const { session, setSession } = useSessionStore((s) => s)
  const { isPending, error, data, refetch } = authClient.useSession()

  useEffect(() => {
    if (user) {
      return
    }
    if (session) {
      return
    }
    if (data) {
      setUser(data.user)
      setSession(data.session)
    }
  }, [data, user, setUser, session, setSession])

  if (isPending) return <LoadingState />

  if (error || !user || !session) return <ErrorState refetch={refetch} />

  return <Dashboard />
}

function Dashboard() {
  const { user } = useUserStore()
  const { session } = useSessionStore((s) => s)
  const navigate = useNavigate()
  if (!user || !session) {
    navigate({ to: '/auth/signin' })
    return
  }

  const sidebarLinks = [
    { to: '/dashboard', label: 'Home', icon: HomeIcon },
    { to: '/dashboard/logs', label: 'Logs', icon: CalendarIcon },
    {
      to: '/dashboard/profile',
      label: 'Profile',
      icon: ChatBubbleLeftRightIcon,
    },
    { to: '/dashboard/settings', label: 'Settings', icon: CogIcon },
  ]

  return (
    <div className="flex w-screen h-screen overflow-y-hidden bg-stone-100">
      <ul className="flex flex-col justify-center items-center gap-2 px-4 pt-6 py-2">
        {sidebarLinks.map((link) => (
          <SideBarIcon icon={link.icon} label={link.label} to={link.to} />
        ))}
      </ul>
      <div className="w-[1.5px] h-full bg-stone-300"></div>
      <div className="px-4 bg-stone-100 py-2 flex-1 font-Outfit">
        <Outlet />
      </div>
    </div>
  )
}

function SideBarIcon(link: { to: string; label: string; icon: IconType }) {
  return (
    <li>
      <Link
        to={link.to}
        data-label={link.label}
        activeProps={{ className: 'bg-green-600 text-white' }}
        activeOptions={{ exact: true }}
        aria-label={link.label}
        className={`rounded-full bg-stone-400 min-w-fit hover:p-3 transition-all hover:text-white duration-300 p-3 inline-block text-green-800 
          
          hover:before:opacity-100 before:content-[attr(data-label)] relative before:absolute before:inline-block before:whitespace-nowrap before:top-1/2 before:-translate-y-1/2 before:translate-x-1/1 before:-right-4 before:delay-500 before:p-1 before:opacity-0 before:bg-stone-400 before:text-stone-900 before:font-Outfit before:rounded-full before:px-4`}
      >
        <link.icon className="size-7" />
      </Link>
    </li>
  )
}
