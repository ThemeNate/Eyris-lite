import { ADMIN, USER } from '@/constants/roles.constant'
import type { Routes } from '@/@types/routes'

const componentsRoute: Routes = {
    '/components/base': {
        key: 'uiComponents.base',
        authority: [ADMIN, USER],
    },
}

export default componentsRoute
