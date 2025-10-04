import { buttonVariants } from "@/components/ui/button"
import { SwitchCamera } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function Logo() {
  return (
    <Link 
      href="/dashboard"
      className={buttonVariants({
        variant: "ghost", 
        size: "lg",
        className: "hidden md:flex navLink !mb-10 lg:hover:bg-transparent lg:!p-0"
      })}
    >
      <SwitchCamera className="h-6 w-6 shrink-0 lg:hidden" />
      <p className={`font-semibold text-xl hidden lg:block `}>
        Snapgram
      </p>
    </Link>
  )
}

export default Logo

// https://www.youtube.com/watch?v=qIO803qh420&t=3237s
// 1:02