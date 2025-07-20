import { ExclamationCircleIcon } from '@heroicons/react/24/outline'
import { useNavigate } from '@tanstack/react-router'

export const ErrorState = ({ refetch }: { refetch: () => void }) => {
  const navigate = useNavigate()
  
  return (
    <div className="min-h-screen font-Outfit flex items-center justify-center bg text-Text px-4">
      <div className=" shadow-lg rounded-2xl p-10 text-center max-w-md w-full border-[2px] border-Text">
        <div className="flex items-center justify-center mb-6 text-Error text-7xl">
          <ExclamationCircleIcon />
        </div>
        <h1 className="text-2xl font-semibold font-Bricolage mb-2 text-Error">
          Session Expired
        </h1>
        <p className="text-Text mb-6">
          Your session has ended or is invalid. Please sign in again to
          continue.
        </p>
        <div className="grid place-items-center grid-cols-2 gap-4">
          <button
            onClick={() => refetch()}
            className="bg-green-800 w-full border-Text text-white py-3 px-8 rounded-lg hover:bg-green-700 active:scale-90 transition-all cursor-pointer"
          >
            Retry
          </button>
          <button
            onClick={() => navigate({ to: '/auth/signin' })}
            className="border-[2px] w-full border-Text inset-shadow-2xs/15 underline py-3 px-8 rounded-lg hover:inset-shadow-sm/15 hover:bg-Text/15 active:scale-90 transition-all cursor-pointer"
          >
            Go to Signin
          </button>
        </div>
      </div>
    </div>
  )
}
