'use client'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "./button"
import { Activity, Bookmark, LogOut, Menu, Moon, Settings } from "lucide-react"
import { cn } from "@/lib/utils"
import { useState } from "react"

function MoreDropdown() {
    const [showModeToggle, setShowModeToggle] = useState(false)
  return (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button
            variant={'ghost'}
            size={'lg'}
            className="md:w-full !justify-start space-x-2 !px-3"
            >
                <Menu />
                <div className="hidden lg:block">More</div>
            </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent
        className={cn(
            "dark:bg-neutral-800 w-64 !rounded-xl !p-0 transition-opacity",
            "data-[state=closed]:opacity-0"
        )
        }
        align="end"
        alignOffset={-40}
        >
 {!showModeToggle && (
          <>
            <DropdownMenuItem className="menuItem">
              <Settings size={20} />
              <p>Settings</p>
            </DropdownMenuItem>
            <DropdownMenuItem className="menuItem">
              <Activity size={20} />
              <p>Your activity</p>
            </DropdownMenuItem>
            <DropdownMenuItem className="menuItem">
              <Bookmark size={20} />
              <p>Saved</p>
            </DropdownMenuItem>

            <DropdownMenuItem
              className="menuItem"
              onClick={() => setShowModeToggle(true)}
            >
              <Moon size={20} />
              <p>Switch appearance</p>
            </DropdownMenuItem>

            <DropdownMenuItem className="menuItem" onClick={() => signOut()}>
              <LogOut size={20} />
              <p>Log out</p>
            </DropdownMenuItem>
          </>
 )}
        </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default MoreDropdown