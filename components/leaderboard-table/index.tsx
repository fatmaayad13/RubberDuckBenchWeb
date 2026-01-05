"use client"
import React from 'react'
import { useState } from "react"
import FilterHeading from './filter-heading';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { leaderboardData } from "@/data/models"

const LeaderboardTable = () => {
  const [search, setSearch] = useState("")
  const [sortBy, setSortBy] = useState<"model" | "family" | "average" | "binary" | "cost">("average")

  let filteredData = leaderboardData

  if (search) {
    filteredData = filteredData.filter((row) =>
      row.model.toLowerCase().includes(search.toLowerCase())
    )
  }


  if (sortBy === "model") {
    filteredData = [...filteredData].sort((a, b) => a.model.localeCompare(b.model))
  } else if (sortBy === "family") {
    filteredData = [...filteredData].sort((a, b) => a.family.localeCompare(b.family))
  } else if (sortBy === "cost") {
    filteredData =
      sortBy === "cost"
        ? [...filteredData].sort((a, b) => {
          if (a.cost === "N/A") return 1
          if (b.cost === "N/A") return -1
          return b.cost - a.cost
        })
        : [...filteredData].sort((a, b) => b[sortBy] - a[sortBy])
  } else {
    filteredData = [...filteredData].sort((a, b) =>
      b[sortBy] - a[sortBy]
    )
  }


  return (


    <>
    
      <div className="flex flex-col w-full h-30 bg-white shadow">
        <FilterHeading
          search={search}
          setSearch={setSearch}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />



      </div>

      <div className="rounded-xl border bg-background max-h-[50vh] overflow-y-scroll">
        <Table className="text-lg items-center">
          <TableHeader className="bg-muted/80 backdrop-blur">
            <TableRow >
              <TableHead className="w-15">#</TableHead>
              <TableHead>Model</TableHead>
              <TableHead>LLM Family</TableHead>
              <TableHead className="text-right">Average across tirals</TableHead>
              <TableHead className="text-right">Binary Correctness</TableHead>
              <TableHead className="text-right">Avg. Cost</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {filteredData.map((row, index) => (

              <TableRow key={row.model}
              >
                <TableCell className={index === 0 ? "font-bold text-primary" : ""}
                >{index + 1}</TableCell>
                <TableCell>  <div className="flex items-center gap-2">
                  <img src={row.image} alt={row.model} className="h-6 w-6" />
                 <span className="truncate">{row.model}</span>
                </div></TableCell>
                <TableCell className="text-muted-foreground">
                  {row.family}
                </TableCell>
                <TableCell className="text-right">{row.average}</TableCell>
                <TableCell className="text-right">{row.binary}</TableCell>
                <TableCell className="text-right"> {row.cost === "N/A" ? row.cost : `$${row.cost}`}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  )
}

export default LeaderboardTable

