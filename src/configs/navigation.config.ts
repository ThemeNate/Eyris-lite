import { APPS_PREFIX_PATH } from '@/constants/route.constant'
import {
    NAV_ITEM_TYPE_TITLE,
    NAV_ITEM_TYPE_ITEM,
} from '@/constants/navigation.constant'
import { ADMIN, USER } from '@/constants/roles.constant'
import type { NavigationTree } from '@/@types/navigation'

const navigationConfig: NavigationTree[] = [
    {
        key: 'apps',
        path: '',
        title: 'Apps',
        translateKey: 'nav.apps',
        icon: 'apps',
        type: NAV_ITEM_TYPE_TITLE,
        authority: [ADMIN, USER],
        meta: {
            horizontalMenu: {
                layout: 'tabs',
                columns: 2,
            },
        },
        subMenu: [
            {
                key: 'apps.sales.dashboard',
                path: `${APPS_PREFIX_PATH}/sales/dashboard`,
                title: 'Dashboard',
                translateKey: 'nav.dashboard',
                icon: 'salesDashboard',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [ADMIN, USER],
                meta: {
                    description: {
                        translateKey: 'nav.appsSales.dashboardDesc',
                        label: 'Sales dashboard',
                    },
                },
                subMenu: [],
            },
            {
                key: 'apps.customers.customerList',
                path: `${APPS_PREFIX_PATH}/customers/list`,
                title: 'Customers List',
                translateKey: 'nav.customersList',
                icon: 'customersList',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [ADMIN, USER],
                meta: {
                    description: {
                        translateKey:
                            'nav.appsCustomers.customersListDesc',
                        label: 'Listing customers',
                    },
                },
                subMenu: [],
            },
            {
                key: 'apps.customers.customerDetails',
                path: `${APPS_PREFIX_PATH}/customers/1/overview`,
                title: 'Customer Details',
                translateKey: 'nav.details',
                icon: 'customersDetails',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [ADMIN, USER],
                meta: {
                    description: {
                        translateKey: 'nav.appsCustomers.detailsDesc',
                        label: 'Customer details',
                    },
                },
                subMenu: [],
            },
            {
                key: 'apps.accounts.settings',
                path: `${APPS_PREFIX_PATH}/accounts/settings/profile`,
                title: 'Settings',
                translateKey: 'nav.settings',
                icon: 'accountsSettings',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [ADMIN, USER],
                meta: {
                    description: {
                        translateKey: 'nav.appsAccounts.settingsDesc',
                        label: 'Account settings',
                    },
                },
                subMenu: [],
            },
        ],
    },
    {
        key: 'uiComponents',
        path: '',
        title: 'Ui Components',
        translateKey: 'nav.uiComponents',
        icon: 'uiComponents',
        type: NAV_ITEM_TYPE_TITLE,
        authority: [ADMIN, USER],
        subMenu: [
            {
                key: 'uiComponents.base',
                path: `/components/base`,
                title: 'Base',
                translateKey: 'nav.base',
                icon: 'uiComponentsBase',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [ADMIN, USER],
                subMenu: [],
            },
            {
                key: 'uiComponents.advanced',
                path: `/components/advanced`,
                title: 'Advanced',
                translateKey: 'nav.advanced',              
                icon: 'uiComponentsAdvanced',
                type: NAV_ITEM_TYPE_ITEM,               
                authority: [ADMIN, USER],
                subMenu: [],
            },
        ],
    }
]

export default navigationConfig
