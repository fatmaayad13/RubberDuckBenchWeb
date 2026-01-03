type SearchInputProps = {
  value: string
  onChange: (value: string) => void
}
import React from 'react'
import { Input } from '@/components/ui/input'

const SearchInput = ({ value, onChange }: SearchInputProps) => {
  return (
    <div
    className="w-full">
      <Input type ="search"
       value={value}
       onChange={(e) => onChange(e.target.value)}
        placeholder='Search for LLM'
      className ="bg-gray-50 w-full"/>
    </div>
  )
}

export default SearchInput
