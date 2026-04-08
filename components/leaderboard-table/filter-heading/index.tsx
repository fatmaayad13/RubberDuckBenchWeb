import React from 'react'
import SearchInput from './search-input'
import SortBy from './sort-by'
import Filters from './filters'
import { SortByValue } from "@/components/leaderboard-table/types";

type FilterHeadingProps = {
 search: string;
  setSearch: (value: string) => void;
  sortBy: SortByValue;
  setSortBy: React.Dispatch<React.SetStateAction<SortByValue>>;
  selectedModels: string[];
  setSelectedModels: React.Dispatch<React.SetStateAction<string[]>>;
  selectedFamilies: string[];
  setSelectedFamilies: React.Dispatch<React.SetStateAction<string[]>>;
};

const FilterHeading = ({
 search,
  setSearch,
  sortBy,
  setSortBy,
  selectedModels,
  setSelectedModels,
  selectedFamilies,
  setSelectedFamilies,
}: FilterHeadingProps) => {
  return (
    <div className="flex w-full flex-col gap-3 p-4 md:flex-row md:items-center md:justify-between">
      <div className="flex w-full items-center">
        <SearchInput value={search} onChange={setSearch} />
      </div>

      <div className="flex w-full flex-wrap items-center justify-start gap-3 md:justify-end">
        <SortBy sortBy={sortBy} setSortBy={setSortBy} />
        <Filters
          selectedModels={selectedModels}
          setSelectedModels={setSelectedModels}
          selectedFamilies={selectedFamilies}
          setSelectedFamilies={setSelectedFamilies}
        />
      </div>
    </div>
  )
}

export default FilterHeading
