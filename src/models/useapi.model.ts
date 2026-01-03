import type { AxiosResponse } from "axios"

export interface useApiCall<T> {
    call: Promise<AxiosResponse<T>>
    controller: AbortController
}