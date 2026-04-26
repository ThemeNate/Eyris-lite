import { APPS_PREFIX_PATH } from '@/constants/route.constant'
import { ADMIN, USER } from '@/constants/roles.constant'
import type { Routes } from '@/@types/routes'

const appsRoute: Routes = {
    [`${APPS_PREFIX_PATH}/sales/dashboard`]: {
        key: 'apps.sales.dashboard',
        authority: [ADMIN, USER],
        meta: {
            footer: false,
        },
    },
    [`${APPS_PREFIX_PATH}/customers/list`]: {
        key: 'apps.customers.customerList',
        authority: [ADMIN, USER],
    },
    [`${APPS_PREFIX_PATH}/customers/[slug]/[subpath]`]: {
        key: 'apps.customers.customerDetails',
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
        },
        dynamicRoute: true,
    },
    [`${APPS_PREFIX_PATH}/accounts/settings`]: {
        key: 'apps.accounts.settings',
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'gutterless',
            footer: false,
        },
    },
    [`${APPS_PREFIX_PATH}/accounts/settings/[tab]`]: {
        key: 'apps.accounts.settings',
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'gutterless',
            footer: false,
        },
        dynamicRoute: true,
    },
}

export default appsRoute
