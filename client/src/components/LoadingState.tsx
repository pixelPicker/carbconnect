import { PulseLoader } from 'react-spinners'

export const LoadingState = ({ message }: { message?: string }) => {
  return (
    <div className="w-screen h-screen font-Fredoka max-h-screen max-w-screen overflow-hidden grid grid-cols-1 md:grid-cols-2">
      <div className="fixed top-0 left-0 w-screen h-screen bg-gray-700/70 z-50 flex flex-col justify-center items-center gap-3 backdrop-blur-[2px]">
        <h3 className="text-xl font-Outfit text-Surface font-medium">
          {message ?? 'Please wait while we are verifying'}
        </h3>
        <PulseLoader color="#f5f5f5" />
      </div>
    </div>
  )
}
