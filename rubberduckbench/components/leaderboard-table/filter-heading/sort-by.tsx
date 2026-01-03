"use client"


import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"


type SortByValue = "rank" | "model_name"

type SortByProps = {
  sortBy: SortByValue
  setSortBy: React.Dispatch<React.SetStateAction<SortByValue>>
}
const items = [
  {
    label: "Rank",
    value: "rank"
  },
  {
    label: "Model Name",
    value: "model_name"
  }
]



const SortBy = ({ sortBy, setSortBy }: SortByProps) => {

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
      <div
        className="flex items-center space-x-1"
        >
          <p className="text-sm">
            Sort By:
          </p>
        <Button variant="ghost"
        size="sm"
        className="text-primary font-semibold"
        >{
        items.find(item => item.value === sortBy)?.label}
         <ChevronDown className="ml-2 h-4 w-4"></ChevronDown></Button>

        </div>
        
      </DropdownMenuTrigger>
      
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Sort table by</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup  value={sortBy}
          onValueChange={(value) =>
            setSortBy(value as SortByValue)
          }>
            {items.map(item => <DropdownMenuRadioItem value={item.value}
              key={item.value}

            >
              {item.label}
          </DropdownMenuRadioItem>)}
        </DropdownMenuRadioGroup> 


      </DropdownMenuContent>
    </DropdownMenu>
  )
}
 

export default SortBy