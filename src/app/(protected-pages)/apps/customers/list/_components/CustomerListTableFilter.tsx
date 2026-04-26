'use client'

import { useState, useMemo, useEffect } from 'react'
import Dropdown from '@/components/ui/Dropdown'
import Checkbox from '@/components/ui/Checkbox'
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'
import { LuTag, LuSearch } from 'react-icons/lu'
import { useSearchParams } from 'next/navigation'
import useAppendQueryParams from '@/utils/hooks/useAppendQueryParams'

const customerLabels = [
    { label: 'VIP', value: 'VIP' },
    { label: 'Frequent Buyer', value: 'Frequent Buyer' },
    { label: 'First-Time Buyer', value: 'First-Time Buyer' },
    { label: 'Refund Risk', value: 'Refund Risk' },
    { label: 'New Customer', value: 'New Customer' },
    { label: 'High AOV', value: 'High AOV' },
    { label: 'Coupon User', value: 'Coupon User' },
    { label: 'Manual Review', value: 'Manual Review' },
    { label: 'International', value: 'International' },
]

type FilterContentProps = {
    selected: string[]
    onChange: (values: string[]) => void
}

const FilterContent = ({ selected, onChange }: FilterContentProps) => {
    const [search, setSearch] = useState('')

    const filteredLabels = useMemo(
        () =>
            customerLabels.filter(
                (item) =>
                    !search ||
                    item.label.toLowerCase().includes(search.toLowerCase()),
            ),
        [search],
    )

    return (
        <>
            <div className="flex flex-col gap-2 p-1">
                <div className="w-full px-1">
                    <Input
                        placeholder="Search..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        prefix={<LuSearch className="text-lg" />}
                    />
                </div>
                <Checkbox.Group
                    vertical
                    className="gap-0"
                    value={selected}
                    onChange={onChange}
                >
                    {filteredLabels.length > 0 ? (
                        filteredLabels.map((item) => (
                            <Checkbox
                                key={item.value}
                                value={item.value}
                                className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                                {item.label}
                            </Checkbox>
                        ))
                    ) : (
                        <div className="text-center">No results found</div>
                    )}
                </Checkbox.Group>
            </div>
            {selected.length > 0 && (
                <div className="border-t border-gray-200 dark:border-gray-700 p-1">
                    <Button block variant="ghost" onClick={() => onChange([])}>
                        Clear filters
                    </Button>
                </div>
            )}
        </>
    )
}

const CustomerListTableFilter = () => {
    const searchParams = useSearchParams()
    const appendQueryParams = useAppendQueryParams()

    const customerLabelValue = searchParams.get('customerLabel')
    const customerLabel = customerLabelValue
        ? customerLabelValue.split(',')
        : []

    const [selected, setSelected] = useState<string[]>(customerLabel)

    useEffect(() => {
        setSelected(customerLabel)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [customerLabelValue])

    const handleChange = (values: string[]) => {
        setSelected(values)
        appendQueryParams({
            customerLabel: values.join(','),
            pageIndex: '1',
        })
    }

    const triggerTitle =
        selected.length === 1
            ? (customerLabels.find((item) => item.value === selected[0])
                  ?.label ?? 'Customer Label')
            : selected.length > 1
              ? `${selected.length} selected`
              : 'Customer Label'

    return (
        <Dropdown
            placement="bottom-start"
            menuClass="w-[220px] p-0"
            renderTitle={
                <Button>
                    <LuTag className="text-lg md:hidden" />
                    <span className="hidden md:flex items-center gap-2">
                        {triggerTitle}
                    </span>
                </Button>
            }
        >
            <li className="list-none">
                <FilterContent selected={selected} onChange={handleChange} />
            </li>
        </Dropdown>
    )
}

export default CustomerListTableFilter
