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
import { SortByValue } from "@/components/leaderboard-table/types"

const LeaderboardTable = () => {
  const [search, setSearch] = useState("")
  const [sortBy, setSortBy] = useState<SortByValue>("average");
  const [selectedModels, setSelectedModels] = useState<string[]>([]);
  const [selectedFamilies, setSelectedFamilies] = useState<string[]>([]);


  let filteredData = leaderboardData;

  // Search filter
  if (search) {
    filteredData = filteredData.filter(row =>
      row.model.toLowerCase().includes(search.toLowerCase())
    );
  }

  // Model & family filters
  filteredData = filteredData.filter(row =>
    (selectedModels.length === 0 || selectedModels.includes(row.model)) &&
    (selectedFamilies.length === 0 || selectedFamilies.includes(row.family))
  );

  // Sorting
  if (sortBy === "model") {
    filteredData = filteredData.sort((a, b) => a.model.localeCompare(b.model));
  } else if (sortBy === "family") {
    filteredData = filteredData.sort((a, b) => a.family.localeCompare(b.family));
  } else if (sortBy === "cost") {
    filteredData = filteredData.sort((a, b) => {
      if (a.cost === "N/A") return 1;
      if (b.cost === "N/A") return -1;
      return b.cost - a.cost;
    });
  } else {
    filteredData = filteredData.sort((a, b) => b[sortBy] - a[sortBy]);
  }

  return (


    <>

      <div className="rounded-t-lg flex flex-col w-full h-30 bg-white shadow">
        <FilterHeading
          search={search}
          setSearch={setSearch}
          sortBy={sortBy}
          setSortBy={setSortBy}
          selectedModels={selectedModels}
          setSelectedModels={setSelectedModels}
          selectedFamilies={selectedFamilies}
          setSelectedFamilies={setSelectedFamilies}
        />



      </div>

      <div className="rounded border bg-background max-h-[50vh] overflow-y-scroll">
        <Table className="text-lg items-center">
          <TableHeader className="bg-muted/80 backdrop-blur">
            <TableRow >
              <TableHead className="w-15">#</TableHead>
              <TableHead>Model</TableHead>
              <TableHead>LLM Family</TableHead>
              <TableHead className="text-right">Performance</TableHead>
              <TableHead className="text-right">Perfect Answers</TableHead>
              <TableHead className="text-right">Cost</TableHead>
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
                <TableCell className="text-right">{row.average.toFixed(2)}%</TableCell>
                <TableCell className="flex justify-end gap-1">
                  {Array.from({ length: row.binary }).map((_, i) => (
                    <img
                      key={i}
                      src="/images/logos/star.png"
                      alt="Star"
                      className="h-5 w-5"
                    />
                  ))}
                </TableCell>

                <TableCell className="text-right">{typeof row.cost === "number" ? `$${row.cost.toFixed(3)}` : row.cost} </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  )
}

export default LeaderboardTable

