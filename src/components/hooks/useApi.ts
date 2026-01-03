import { useCallback, useEffect, useState } from "react";
import type { useApiCall as UseApiCall } from "../../models/useapi.model";

type Data<T> = T | null;
type CustomError = Error | null;
type useApiOptions = {
    autoFetch?: boolean
}
interface UseApiResult<T> {
    loading: boolean;
    data: Data<T>;
    error: CustomError;
    fetch: () => void;
}

export const useApi = <T,>(apiCall: UseApiCall<T>, options?: useApiOptions): UseApiResult<T> => {
    const [loading, setLoading] = useState<boolean>(false)
    const [data, setData] = useState<Data<T>>(null)
    const [error, setError] = useState<CustomError>(null)
    const fetch = useCallback(() => {
        const { call, controller } = apiCall
        setLoading(true)
        call.then((response) => {
            setData(response.data)
            setError(null)
        })
            .catch((error) => {
                setError(error)
            })
            .finally(() => {
                setLoading(false)
            })
        return () => controller.abort()
    }, [apiCall])
    useEffect(() => {
        if (options && options.autoFetch) {
            return fetch()


        }

    }, [fetch, options])
    return {
        loading,
        data,
        error,
        fetch
    }
}