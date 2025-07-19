import { LinkIcon } from '@heroicons/react/24/outline'

function Logo() {
  return (
    <div className="flex items-center gap-2 pl-4  sm:pl-0 pt-1  font-RubikDoodleShadow text-3xl font-extrabold">
      <h1 className="text-[20px] xl:text-[30px]">Carb</h1>
      <LinkIcon className="w-6 h-6 rotate-x-180" />
      <h1 className="text-[20px] xl:text-[30px] text-cyan-950">Connect</h1>
    </div>
  )
}

export default Logo
