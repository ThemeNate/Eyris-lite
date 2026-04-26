import ApiService from './ApiService'
import endpointConfig from '@/configs/endpoint.config'
import type { ForgotPassword } from '@/@types/auth'

export async function apiForgotPassword<T>(data: ForgotPassword) {
    return ApiService.fetchDataWithAxios<T>({
        url: endpointConfig.forgotPassword,
        method: 'post',
        data,
    })
}
