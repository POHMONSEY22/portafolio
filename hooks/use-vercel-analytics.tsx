"use client"

import { useState, useEffect } from "react"

interface AnalyticsData {
  pageViews: number
  uniqueVisitors: number
  topPages: Array<{
    page: string
    views: number
  }>
  topCountries: Array<{
    country: string
    visitors: number
  }>
  devices: {
    desktop: number
    mobile: number
    tablet: number
  }
  loading: boolean
  error: string | null
}

export function useVercelAnalytics(timeRange: "24h" | "7d" | "30d" = "30d") {
  const [data, setData] = useState<AnalyticsData>({
    pageViews: 0,
    uniqueVisitors: 0,
    topPages: [],
    topCountries: [],
    devices: { desktop: 0, mobile: 0, tablet: 0 },
    loading: true,
    error: null,
  })

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        setData((prev) => ({ ...prev, loading: true, error: null }))

        const response = await fetch(`/api/analytics/vercel?range=${timeRange}`)

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`)
        }

        const analyticsData = await response.json()

        setData({
          ...analyticsData,
          loading: false,
          error: null,
        })
      } catch (error) {
        console.error("Error fetching analytics:", error)
        setData((prev) => ({
          ...prev,
          loading: false,
          error: error instanceof Error ? error.message : "Error desconocido",
        }))
      }
    }

    fetchAnalytics()
  }, [timeRange])

  return data
}
