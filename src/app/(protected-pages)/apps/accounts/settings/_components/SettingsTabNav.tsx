'use client'

import OverflowTabs from '@/components/shared/OverflowTabs'
import Container from '@/components/shared/Container'
import {
    LuCircleUser,
    LuShieldCheck,
    LuPaintBucket,
    LuBell,
    LuReceipt,
    LuBlend,
} from 'react-icons/lu'
import { usePathname, useRouter } from 'next/navigation'
import type { ReactNode } from 'react'

const menuList: Array<{
    label: string | ReactNode
    icon: ReactNode
    value: string
}> = [
    { label: 'Profile', icon: <LuCircleUser />, value: 'profile' },
    { label: 'Appearance', icon: <LuPaintBucket />, value: 'appearance' },
    { label: 'Security', icon: <LuShieldCheck />, value: 'security' },
    { label: 'Notifications', icon: <LuBell />, value: 'notifications' },
    { label: 'Billing', icon: <LuReceipt />, value: 'billing' },
    { label: 'Integrations', icon: <LuBlend />, value: 'integrations' },
]

const BASE_PATH = '/apps/accounts/settings'

const SettingsTabNav = () => {
    const pathname = usePathname()
    const router = useRouter()
    const tab = pathname.split('/').pop() || 'profile'

    const handleTabChange = (value: string) => {
        router.push(`${BASE_PATH}/${value}`)
    }

    return (
        <div className="pt-4 border-b border-gray-200 dark:border-gray-800">
            <Container size="md" className="px-4">
                <h4 className="font-semibold">Settings</h4>
                <div className="mt-4">
                    <OverflowTabs
                        value={tab}
                        onChange={handleTabChange}
                        className="flex justify-between items-center"
                        tabListClass="md:border-0"
                        tabNavClass="min-w-[100px] text-center"
                        tabList={menuList.map((item) => ({
                            ...item,
                            label: (
                                <div className="flex items-center gap-2">
                                    <span className="text-lg">{item.icon}</span>
                                    <span>{item.label}</span>
                                </div>
                            ),
                        }))}
                    />
                </div>
            </Container>
        </div>
    )
}

export default SettingsTabNav
