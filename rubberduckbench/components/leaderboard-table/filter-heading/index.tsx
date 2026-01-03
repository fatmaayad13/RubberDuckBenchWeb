import React from 'react'
import SearchInput from './search-input'
import LayoutSwitch from './layout-switch'
import SortBy from './sort-by'
import Filters from './filters'

const FilterHeading = () => {
  return (
    <div className="flex p-4 items-center">
      <div className="flex items-center w-full">
      <SearchInput/>
      </div>

      <div className="flex items-center justify-end space-x-5 w-full"> 
      <LayoutSwitch/>

      <SortBy/>

      <Filters/>

      </div>

    </div>
  )
}

export default FilterHeading
