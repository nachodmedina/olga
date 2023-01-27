import Axios, { AxiosResponse } from 'axios'
import getConfig from 'next/config'
import Router from 'next/router'
import qs from 'qs'

const { publicRuntimeConfig } = getConfig()

const apiClient = Axios.create({
    withCredentials: false,
    baseURL: publicRuntimeConfig.API_BASE_URL,
    maxContentLength: Infinity,
    maxBodyLength: Infinity,
    // paramsSerializer: params =>
    //     qs.stringify(params, {
    //         arrayFormat: 'indices',
    //         filter: (prefix, value) =>
    //             value !== undefined ? value : undefined,
    //     }),
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        // 'Access-Control-Allow-Origin': '*',
        // 'access-control-allow-headers': 'Access-Control-Allow-Origin',
    },
})

apiClient.interceptors.response.use(
    (response => {
        return response
    },
    error => {
        if (error.response.status === 401) {
            Router.push('/login')
        } else {
            throw error
        }
    }
    )
)

export default apiClient;
