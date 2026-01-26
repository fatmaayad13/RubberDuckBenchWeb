"use client"
import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu"
import { leaderboardData } from "@/data/models"

interface FiltersProps {
  selectedModels: string[]
  setSelectedModels: React.Dispatch<React.SetStateAction<string[]>>
  selectedFamilies: string[]
  setSelectedFamilies: React.Dispatch<React.SetStateAction<string[]>>
}

const Filters: React.FC<FiltersProps> = ({
  selectedModels,
  setSelectedModels,
  selectedFamilies,
  setSelectedFamilies,
}) => {
  const [open, setOpen] = React.useState(false)

  const allModels = Array.from(new Set(leaderboardData.map(row => row.model)))
  const allFamilies = Array.from(new Set(leaderboardData.map(row => row.family)))

  const toggleItem = (
    item: string,
    selected: string[],
    setSelected: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    if (selected.includes(item)) setSelected(selected.filter(i => i !== item))
    else setSelected([...selected, item])
  }

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button size="sm" variant="outline" className="cursor: cursor-pointer">
          Filters
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-64">
        {/* Models */}
        <DropdownMenuLabel>Filter by Model</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {allModels.map(model => (
          <DropdownMenuCheckboxItem className="cursor: cursor-pointer"
                  key={model}
            checked={selectedModels.includes(model)}
            onCheckedChange={() => toggleItem(model, selectedModels, setSelectedModels)}
          >
            {model}
          </DropdownMenuCheckboxItem>
        ))}

        {/* Families */}
        <DropdownMenuLabel className="mt-2">Filter by Family</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {allFamilies.map(family => (
          <DropdownMenuCheckboxItem className="cursor: cursor-pointer"
            key={family}
            checked={selectedFamilies.includes(family)}
            onCheckedChange={() => toggleItem(family, selectedFamilies, setSelectedFamilies)}
          >
            {family}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default Filters
