'use client'

import Input from '@/components/ui/Input'
import useDebounce from '@/utils/hooks/useDebounce'
import { LuSearch } from 'react-icons/lu'
import { useSearchParams } from 'next/navigation'
import type { ChangeEvent } from 'react'

type CustomerListSearchProps = {
    onInputChange: (value: string) => void
}

const CustomerListSearch = ({ onInputChange }: CustomerListSearchProps) => {
    const searchParams = useSearchParams()
    const query = searchParams.get('query') || ''

    const debouncedChange = useDebounce(
        (e: ChangeEvent<HTMLInputElement>) => onInputChange(e.target.value),
        500,
    )

    return (
        <Input
            placeholder="Search"
            prefix={<LuSearch className="text-lg" />}
            defaultValue={query}
            onChange={debouncedChange}
        />
    )
}

export default CustomerListSearch
