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
  const [sortBy, setSortBy] = useState<"rank" | "model_name">("rank")

  let filteredData = leaderboardData

  if (search) {
    filteredData = filteredData.filter((row) =>
      row.model.toLowerCase().includes(search.toLowerCase())
    )
  }


  if (sortBy === "rank") {
    filteredData = [...filteredData].sort((a, b) => a.rank - b.rank)
  } else if (sortBy === "model_name") {
    filteredData = [...filteredData].sort((a, b) =>
      a.model.localeCompare(b.model)
    )
  }


  return (


    <>
      <div className="flex flex-col w-full h-full bg-white shadow">
        <FilterHeading
          search={search}
          setSearch={setSearch}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />



      </div>

      <div className="rounded-xl border bg-background">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-15">#</TableHead>
              <TableHead>Model</TableHead>
              <TableHead>Org</TableHead>
              <TableHead className="text-right">Overall</TableHead>
              <TableHead className="text-right">Reasoning</TableHead>
              <TableHead className="text-right">Coding</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {filteredData.map((row) => (

              <TableRow key={row.model}
              >
                <TableCell className={row.rank === 1 ? "font-bold text-primary" : ""}
                >{row.rank}</TableCell>
                <TableCell>{row.model}</TableCell>
                <TableCell className="text-muted-foreground">
                  {row.org}
                </TableCell>
                <TableCell className="text-right">{row.overall}</TableCell>
                <TableCell className="text-right">{row.reasoning}</TableCell>
                <TableCell className="text-right">{row.coding}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  )
}

export default LeaderboardTable

