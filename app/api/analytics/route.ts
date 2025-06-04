import { NextResponse } from "next/server"

// Simulación de datos de analytics más realistas
const projectAnalytics = {
  "717-streetwear": {
    views: 247,
    uniqueVisitors: 189,
    bounceRate: 0.32,
    avgSessionDuration: "2:34",
    topCountries: ["Colombia", "México", "España"],
  },
  "mf-doom": {
    views: 189,
    uniqueVisitors: 156,
    bounceRate: 0.28,
    avgSessionDuration: "3:12",
    topCountries: ["Estados Unidos", "Colombia", "Argentina"],
  },
  canserbero: {
    views: 156,
    uniqueVisitors: 134,
    bounceRate: 0.35,
    avgSessionDuration: "2:45",
    topCountries: ["Venezuela", "Colombia", "México"],
  },
  "tupac-amaru": {
    views: 134,
    uniqueVisitors: 112,
    bounceRate: 0.29,
    avgSessionDuration: "3:01",
    topCountries: ["Estados Unidos", "Colombia", "Brasil"],
  },
  clauyuli: {
    views: 98,
    uniqueVisitors: 87,
    bounceRate: 0.41,
    avgSessionDuration: "1:58",
    topCountries: ["Colombia", "España", "México"],
  },
  "kobe-bryant": {
    views: 112,
    uniqueVisitors: 95,
    bounceRate: 0.33,
    avgSessionDuration: "2:22",
    topCountries: ["Estados Unidos", "Colombia", "Argentina"],
  },
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const project = searchParams.get("project")

  if (project && projectAnalytics[project as keyof typeof projectAnalytics]) {
    return NextResponse.json(projectAnalytics[project as keyof typeof projectAnalytics])
  }

  // Retornar estadísticas generales
  const totalViews = Object.values(projectAnalytics).reduce((sum, project) => sum + project.views, 0)
  const totalUniqueVisitors = Object.values(projectAnalytics).reduce((sum, project) => sum + project.uniqueVisitors, 0)

  return NextResponse.json({
    totalViews,
    totalUniqueVisitors,
    totalProjects: Object.keys(projectAnalytics).length,
    avgBounceRate: 0.33,
    topProject: "717-streetwear",
  })
}
