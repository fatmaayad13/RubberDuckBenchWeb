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

  // NEW: add filter state
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
    <div className="flex p-4 items-center justify-between w-full">

      <div className="flex items-center w-full">
        <SearchInput value={search} onChange={setSearch} />

      </div>

      <div className="flex items-center justify-end space-x-5 w-full">

        <SortBy sortBy={sortBy} setSortBy={setSortBy} />

        <Filters
        selectedModels={selectedModels}
        setSelectedModels={setSelectedModels}
        selectedFamilies={selectedFamilies}
        setSelectedFamilies={setSelectedFamilies} />


      </div>

    </div>
  )
}

export default FilterHeading
