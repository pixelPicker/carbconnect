import {
  createFileRoute,
  Link,
  useCanGoBack,
  useRouter,
} from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/$not-found')({
  component: RouteComponent,
})

function RouteComponent() {
  const router = useRouter()
  const canGoBack = useCanGoBack()

  return (
    <div className="w-full h-full overflow-hidden flex flex-col justify-center items-center">
      <img
        src="https://img.freepik.com/free-vector/404-error-lost-space-concept-illustration_114360-7901.jpg"
        className="w-1/3 aspect-square"
      />
      <p className="text-xl font-medium">
        Looks like you've wandered off. This page doesn't exist.
      </p>
      <div className="grid grid-cols-2 items-center gap-4 mt-8">
        <Link
          className="px-12 py-3 bg-Text outline-[2px] outline-Text text-Surface cursor-pointer text-lg rounded-full shadow-lg font-light hover:bg-Text/90 active:bg-Text/75 hover:outline-Text/90 active:outline-Text/75 transition-all duration-300"
          to="/dashboard"
        >
          Take me back home
        </Link>
        {canGoBack ? (
          <button
            className="px-12 py-3 border-[2px] cursor-pointer border-Text text-Text text-lg rounded-full shadow-lg"
            onClick={() => router.history.back()}
          >
            Previous page
          </button>
        ) : null}
      </div>
    </div>
  )
}
