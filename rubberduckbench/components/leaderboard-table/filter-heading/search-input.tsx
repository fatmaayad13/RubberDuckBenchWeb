import React from 'react'
import { Input } from '@/components/ui/input'

const SearchInput = () => {
  return (
    <div
    className="w-full">
      <Input type ="search" placeholder='Search for LLM'
      className ="bg-gray-50 w-full"/>
    </div>
  )
}

export default SearchInput
