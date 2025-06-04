import { NextResponse } from "next/server"

// Simulación de datos realistas mientras configuramos la API real de Vercel
const generateRealisticData = (range: string) => {
  const baseMultiplier = range === "24h" ? 0.1 : range === "7d" ? 0.5 : 1

  return {
    pageViews: Math.floor(1247 * baseMultiplier),
    uniqueVisitors: Math.floor(892 * baseMultiplier),
    topPages: [
      { page: "/", views: Math.floor(456 * baseMultiplier) },
      { page: "/projects", views: Math.floor(234 * baseMultiplier) },
      { page: "/contact", views: Math.floor(123 * baseMultiplier) },
      { page: "/about", views: Math.floor(89 * baseMultiplier) },
    ],
    topCountries: [
      { country: "Colombia", visitors: Math.floor(345 * baseMultiplier) },
      { country: "México", visitors: Math.floor(234 * baseMultiplier) },
      { country: "España", visitors: Math.floor(156 * baseMultiplier) },
      { country: "Argentina", visitors: Math.floor(123 * baseMultiplier) },
      { country: "Estados Unidos", visitors: Math.floor(98 * baseMultiplier) },
    ],
    devices: {
      desktop: Math.floor(456 * baseMultiplier),
      mobile: Math.floor(334 * baseMultiplier),
      tablet: Math.floor(102 * baseMultiplier),
    },
    loading: false,
    error: null,
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const range = searchParams.get("range") || "30d"

  try {
    // TODO: Reemplazar con la API real de Vercel Analytics
    // const vercelResponse = await fetch(`https://api.vercel.com/v1/analytics/...`, {
    //   headers: {
    //     'Authorization': `Bearer ${process.env.VERCEL_ACCESS_TOKEN}`,
    //   },
    // })

    // Por ahora, devolvemos datos simulados realistas
    const data = generateRealisticData(range)

    return NextResponse.json(data)
  } catch (error) {
    console.error("Error fetching Vercel Analytics:", error)

    // En caso de error, devolver datos de fallback
    return NextResponse.json(generateRealisticData(range))
  }
}
