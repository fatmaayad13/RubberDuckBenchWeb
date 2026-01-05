import React from 'react'
import SearchInput from './search-input'
import LayoutSwitch from './layout-switch'
import SortBy from './sort-by'
import Filters from './filters'

type SortByValue = "rank" | "model_name"

type FilterHeadingProps = {
  search: string
  setSearch: (value: string) => void
  sortBy: SortByValue
  setSortBy: React.Dispatch<React.SetStateAction<SortByValue>>

}


const FilterHeading = ({
  search,
  setSearch,
  sortBy,
  setSortBy,
}: FilterHeadingProps) => {
  return (
    <div className="flex p-4 items-center">

      <div className="flex items-center w-full">
        <SearchInput value={search} onChange={setSearch} />
      
      </div>

      <div className="flex items-center justify-end space-x-5 w-full">
        <LayoutSwitch />
        <SortBy sortBy={sortBy} setSortBy={setSortBy} />
        <Filters />

      </div>

    </div>
  )
}

export default FilterHeading
