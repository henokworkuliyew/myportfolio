'use client'

import { useState, useEffect } from 'react'

interface ApiState<T> {
  data: T | null
  loading: boolean
  error: string | null
}

export function useApi<T>(url: string, options?: RequestInit): ApiState<T> {
  const [state, setState] = useState<ApiState<T>>({
    data: null,
    loading: true,
    error: null,
  })

  useEffect(() => {
    const fetchData = async () => {
      try {
        setState((prev) => ({ ...prev, loading: true, error: null }))

        const response = await fetch(url, {
          headers: {
            'Content-Type': 'application/json',
            ...options?.headers,
          },
          ...options,
        })

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }

        const result = await response.json()

        if (result.success) {
          setState({ data: result.data, loading: false, error: null })
        } else {
          setState({
            data: null,
            loading: false,
            error: result.message || 'An error occurred',
          })
        }
      } catch (error) {
        setState({
          data: null,
          loading: false,
          error: error instanceof Error ? error.message : 'An error occurred',
        })
      }
    }

    fetchData()
  }, [url])

  return state
}

export async function apiRequest<T>(
  url: string,
  options?: RequestInit
): Promise<{ data: T | null; error: string | null }> {
  try {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
      ...options,
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const result = await response.json()

    if (result.success) {
      return { data: result.data, error: null }
    } else {
      return { data: null, error: result.message || 'An error occurred' }
    }
  } catch (error) {
    return {
      data: null,
      error: error instanceof Error ? error.message : 'An error occurred',
    }
  }
}
