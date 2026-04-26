import ApiService from './ApiService'

export async function apiGetSettingsProfile<T>() {
    return ApiService.fetchDataWithAxios<T>({
        url: '/settings/profile',
        method: 'get',
    })
}

export async function apiGetSettingsSecurity<T>() {
    return ApiService.fetchDataWithAxios<T>({
        url: '/settings/security',
        method: 'get',
    })
}

export async function apiGetSettingsNotification<T>() {
    return ApiService.fetchDataWithAxios<T>({
        url: '/settings/notification',
        method: 'get',
    })
}

export async function apiGetSettingsBilling<T>() {
    return ApiService.fetchDataWithAxios<T>({
        url: '/settings/billing',
        method: 'get',
    })
}

export async function apiGetSettingsIntegration<T>() {
    return ApiService.fetchDataWithAxios<T>({
        url: '/settings/integration',
        method: 'get',
    })
}
