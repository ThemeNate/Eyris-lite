import type { Routes } from '@/@types/routes'

const authRoute: Routes = {
    '/sign-in': {
        key: 'signIn',
        authority: [],
    },
    '/sign-up': {
        key: 'signUp',
        authority: [],
    },
    '/forgot-password': {
        key: 'forgotPassword',
        authority: [],
    },
}

export default authRoute
