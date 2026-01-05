"use client";

import { AlignJustify, ChevronRightIcon, Grid2X2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import React, {useState} from 'react';

const LayoutSwitch = () => {
  const [activeView, setActiveView] = useState<"list" | "card">("list")
  return (
    <div>
        <Button variant= {activeView === "list" ? "default": "outline"} size="icon" 
        className="cursor-pointer border-r-none"
        onClick={() => setActiveView("list")}>

      <AlignJustify className="h-3 w-3" />
    </Button>

    <Button variant={activeView === "card" ? "default": "outline"}
    size="icon"
    className="cursor-pointer rounded-l-none"
    onClick={() => setActiveView("card")}>
    <Grid2X2 className="h-3 w-3" />
    </Button>
    </div>
  )
}

export default LayoutSwitch
