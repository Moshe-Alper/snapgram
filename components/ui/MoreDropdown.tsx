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
import { Menu } from "lucide-react"
import { cn } from "@/lib/utils"

function MoreDropdown() {
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
            <DropdownMenuItem>
                <DropdownMenuLabel>Settings</DropdownMenuLabel>
            </DropdownMenuItem>
            <DropdownMenuItem>
                <DropdownMenuLabel>Help</DropdownMenuLabel>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
                <DropdownMenuLabel>Logout</DropdownMenuLabel>
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default MoreDropdown