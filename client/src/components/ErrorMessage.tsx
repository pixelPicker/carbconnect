export function ErrorMessage({ message }: { message: string }) {
  return (
    <p className="max-w-[50ch] font-Outfit text-sm text-red-800">{message}</p>
  )
}
