import {
    LuCircleUser,
    LuHouse,
    LuUsers,
    LuSlidersHorizontal,
    LuLayoutList,
    LuLayoutDashboard
} from 'react-icons/lu'
import type { JSX } from 'react'

export type NavigationIcons = Record<string, JSX.Element>

const CLASS_NAME = 'text-lg'

const navigationIcon: NavigationIcons = {
    salesDashboard: <LuHouse className={CLASS_NAME} />,
    customersList: <LuUsers className={CLASS_NAME} />,
    customersDetails: <LuCircleUser className={CLASS_NAME} />,
    accountsSettings: <LuSlidersHorizontal className={CLASS_NAME} />,
    uiComponentsBase: <LuLayoutList className={CLASS_NAME} />,
    uiComponentsAdvanced: <LuLayoutDashboard className={CLASS_NAME} />
}

export default navigationIcon
