'use client'
import { useState } from 'react'

import { Check, ChevronsUpDown } from 'lucide-react'
import { cn } from '@/lib/utils'

import { Button } from './button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command'

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

interface ComboBoxProps {
  id: string
  options: { value: string; label: string }[]
  value: string
  setValue: React.Dispatch<React.SetStateAction<string>>
  inputPlaceholder?: string
  searchPlaceholder?: string
  emptyMessage?: string
}
const ComboBox = ({
  id,
  options,
  value,
  setValue,
  inputPlaceholder = 'Select...',
  searchPlaceholder = 'Search...',
  emptyMessage = 'No item was found.',
}: ComboBoxProps) => {
  const [open, setOpen] = useState(false)
  // const [value, setValue] = useState('')

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild id={id}>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          {value
            ? options.find((option) => option.value === value)?.label
            : inputPlaceholder}
          <ChevronsUpDown className="ml-2 h-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder={searchPlaceholder} />
          <CommandEmpty>{emptyMessage}</CommandEmpty>
          <CommandGroup>
            {options.map((option) => (
              <CommandItem
                key={option.value}
                value={option.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? '' : currentValue)
                  setOpen(false)
                }}
              >
                <Check
                  className={cn(
                    'mr-2 h-4 w-4',
                    value === option.value ? 'opacity-100' : 'opacity-0'
                  )}
                />
                {option.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

export default ComboBox
