import { ArrowUpRight, Github, Leaf, User2 } from 'lucide-react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/about')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="h-full flex items-center justify-center bg-background text-foreground">
      <div className="max-w-3xl w-full text-center space-y-6">
        <div className="flex justify-center">
          <Leaf className="text-green-500 h-12 w-12" />
        </div>
        <h1 className="text-4xl font-bold font-outfit">About CarbConnect</h1>
        <p className="text-muted-foreground text-lg leading-relaxed">
          CarbConnect is your personal carbon footprint tracker. Our mission is
          to empower individuals to understand and reduce their environmental
          impact through everyday activities like travel, food, and energy use.
        </p>
        <p className="text-muted-foreground">
          Built with ❤️ using React, Express, and PostgreSQL.
        </p>

        <div className="flex justify-center gap-4 pt-4">
          <a href="https://github.com/pixelPicker" className="flex gap-2">
            <div className="flex items-center cursor-pointer gap-2 py-3 px-5 text-white transition-all duration-300 hover:bg-green-800 shadow-xl active:bg-green-700 bg-green-950 rounded-lg">
              Github
              <Github />
            </div>
          </a>
          <a
            href="#"
            className="flex items-center cursor-pointer gap-2 py-3 px-5 text-green-800 transition-all border-[2px] border-green-800/50 hover:bg-gray-400/50 active:bg-gray-400/60 bg-gray-400/40 rounded-lg"
          >
            Profile <ArrowUpRight />
          </a>
        </div>
      </div>
    </div>
  )
}
