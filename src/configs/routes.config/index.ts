import authRoute from './authRoute'
import appsRoute from './appsRoute'
import componentsRoute from './componentsRoute'

import type { Routes } from '@/@types/routes'

export const protectedRoutes: Routes = {
    ...appsRoute,
    ...componentsRoute,
}

export const publicRoutes: Routes = {}

export const authRoutes = authRoute
