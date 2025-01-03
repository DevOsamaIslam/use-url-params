import { useMemo } from "react"
import { useSearchParams } from "react-router-dom"

interface useUrlParamConfig<T> {
  defaults?: Partial<T>
}

type UrlParams<T> = Partial<Record<keyof T, string>>

type useUrlParamReturn<T> = {
  urlParams: UrlParams<T>
  updateUrlParams: (newParams: Partial<T>) => void
  removeUrlParam: (key?: keyof T) => void
}

function useUrlParam<T = Record<string, string>>(
  config: useUrlParamConfig<T> = {}
): useUrlParamReturn<T> {
  const { defaults } = config
  const [searchParams, setSearchParams] = useSearchParams()

  // Parse URL parameters with defaults applied
  const urlParams = useMemo(() => {
    const params: UrlParams<T> = {}

    searchParams.forEach((value, key) => (params[key as keyof T] = value))

    return { ...defaults, ...params }
  }, [searchParams, defaults])

  // Update URL parameters
  const updateUrlParams = (newParams: Partial<T>) => {
    const updatedParams = new URLSearchParams(searchParams)

    Object.entries(newParams).forEach(([key, value]) => {
      updatedParams.set(key, String(value))
    })

    setSearchParams(updatedParams)
  }

  // Remove a specific URL parameter
  const removeUrlParam = (key?: keyof T) => {
    if (!key) return setSearchParams()

    const updatedParams = new URLSearchParams(searchParams)
    updatedParams.delete(key as string)
    setSearchParams(updatedParams)
  }

  return { urlParams, updateUrlParams, removeUrlParam }
}

export default useUrlParam
