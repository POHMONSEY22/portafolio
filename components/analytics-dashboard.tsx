"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Eye, Users, Globe, Smartphone, Monitor, Tablet, TrendingUp, Calendar } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useVercelAnalytics } from "@/hooks/use-vercel-analytics"

interface AnalyticsDashboardProps {
  className?: string
}

export default function AnalyticsDashboard({ className = "" }: AnalyticsDashboardProps) {
  const [timeRange, setTimeRange] = useState<"24h" | "7d" | "30d">("30d")
  const { pageViews, uniqueVisitors, topPages, topCountries, devices, loading, error } = useVercelAnalytics(timeRange)

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + "M"
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + "K"
    }
    return num.toString()
  }

  const getTimeRangeLabel = (range: string) => {
    switch (range) {
      case "24h":
        return "Últimas 24 horas"
      case "7d":
        return "Últimos 7 días"
      case "30d":
        return "Últimos 30 días"
      default:
        return "Últimos 30 días"
    }
  }

  if (error) {
    return (
      <Card className={`bg-background/50 backdrop-blur-sm border border-red-200 ${className}`}>
        <CardContent className="p-6">
          <p className="text-red-600 text-center">Error al cargar analytics: {error}</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Selector de rango de tiempo */}
      <div className="flex flex-wrap gap-2 justify-center">
        {(["24h", "7d", "30d"] as const).map((range) => (
          <Button
            key={range}
            variant={timeRange === range ? "default" : "outline"}
            size="sm"
            onClick={() => setTimeRange(range)}
            className="text-xs"
          >
            <Calendar className="h-3 w-3 mr-1" />
            {getTimeRangeLabel(range)}
          </Button>
        ))}
      </div>

      {/* Métricas principales */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Card className="bg-background/50 backdrop-blur-sm border border-primary/10">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <Eye className="h-4 w-4 text-blue-500" />
                Vistas de página
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {loading ? (
                  <div className="animate-pulse bg-muted h-8 w-16 rounded"></div>
                ) : (
                  <motion.span
                    key={pageViews}
                    initial={{ scale: 1.2, color: "#10b981" }}
                    animate={{ scale: 1, color: "inherit" }}
                    transition={{ duration: 0.3 }}
                  >
                    {formatNumber(pageViews)}
                  </motion.span>
                )}
              </div>
              <p className="text-xs text-muted-foreground mt-1">{getTimeRangeLabel(timeRange)}</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card className="bg-background/50 backdrop-blur-sm border border-primary/10">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <Users className="h-4 w-4 text-green-500" />
                Visitantes únicos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {loading ? (
                  <div className="animate-pulse bg-muted h-8 w-16 rounded"></div>
                ) : (
                  <motion.span
                    key={uniqueVisitors}
                    initial={{ scale: 1.2, color: "#10b981" }}
                    animate={{ scale: 1, color: "inherit" }}
                    transition={{ duration: 0.3 }}
                  >
                    {formatNumber(uniqueVisitors)}
                  </motion.span>
                )}
              </div>
              <p className="text-xs text-muted-foreground mt-1">{getTimeRangeLabel(timeRange)}</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="bg-background/50 backdrop-blur-sm border border-primary/10">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-purple-500" />
                Tasa de conversión
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {loading ? (
                  <div className="animate-pulse bg-muted h-8 w-16 rounded"></div>
                ) : (
                  <span>{((uniqueVisitors / pageViews) * 100).toFixed(1)}%</span>
                )}
              </div>
              <p className="text-xs text-muted-foreground mt-1">Visitantes únicos / Vistas</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card className="bg-background/50 backdrop-blur-sm border border-primary/10">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <Globe className="h-4 w-4 text-orange-500" />
                Países activos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {loading ? (
                  <div className="animate-pulse bg-muted h-8 w-16 rounded"></div>
                ) : (
                  <span>{topCountries.length}</span>
                )}
              </div>
              <p className="text-xs text-muted-foreground mt-1">Países con visitas</p>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Páginas más visitadas y países */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card className="bg-background/50 backdrop-blur-sm border border-primary/10">
            <CardHeader>
              <CardTitle className="text-lg">Páginas más visitadas</CardTitle>
              <CardDescription>Páginas con mayor tráfico</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {loading
                  ? Array.from({ length: 4 }).map((_, i) => (
                      <div key={i} className="animate-pulse">
                        <div className="bg-muted h-4 w-full rounded mb-2"></div>
                        <div className="bg-muted h-3 w-16 rounded"></div>
                      </div>
                    ))
                  : topPages.map((page, index) => (
                      <motion.div
                        key={page.page}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="flex justify-between items-center"
                      >
                        <span className="text-sm font-medium">{page.page}</span>
                        <Badge variant="secondary">{formatNumber(page.views)} vistas</Badge>
                      </motion.div>
                    ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Card className="bg-background/50 backdrop-blur-sm border border-primary/10">
            <CardHeader>
              <CardTitle className="text-lg">Top países</CardTitle>
              <CardDescription>Visitantes por país</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {loading
                  ? Array.from({ length: 5 }).map((_, i) => (
                      <div key={i} className="animate-pulse">
                        <div className="bg-muted h-4 w-full rounded mb-2"></div>
                        <div className="bg-muted h-3 w-16 rounded"></div>
                      </div>
                    ))
                  : topCountries.map((country, index) => (
                      <motion.div
                        key={country.country}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="flex justify-between items-center"
                      >
                        <span className="text-sm font-medium">{country.country}</span>
                        <Badge variant="outline">{formatNumber(country.visitors)} visitantes</Badge>
                      </motion.div>
                    ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Dispositivos */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Card className="bg-background/50 backdrop-blur-sm border border-primary/10">
          <CardHeader>
            <CardTitle className="text-lg">Dispositivos</CardTitle>
            <CardDescription>Distribución por tipo de dispositivo</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3">
                <Monitor className="h-5 w-5 text-blue-500" />
                <div>
                  <p className="text-sm font-medium">Desktop</p>
                  <p className="text-lg font-bold">
                    {loading ? (
                      <span className="animate-pulse bg-muted h-6 w-12 rounded inline-block"></span>
                    ) : (
                      formatNumber(devices.desktop)
                    )}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Smartphone className="h-5 w-5 text-green-500" />
                <div>
                  <p className="text-sm font-medium">Mobile</p>
                  <p className="text-lg font-bold">
                    {loading ? (
                      <span className="animate-pulse bg-muted h-6 w-12 rounded inline-block"></span>
                    ) : (
                      formatNumber(devices.mobile)
                    )}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Tablet className="h-5 w-5 text-purple-500" />
                <div>
                  <p className="text-sm font-medium">Tablet</p>
                  <p className="text-lg font-bold">
                    {loading ? (
                      <span className="animate-pulse bg-muted h-6 w-12 rounded inline-block"></span>
                    ) : (
                      formatNumber(devices.tablet)
                    )}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
