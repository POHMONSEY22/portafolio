import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Juan Pablo Gallo Arboleda | Portfolio",
    short_name: "JP Gallo",
    description: "Portfolio profesional de Juan Pablo Gallo Arboleda, desarrollador frontend y diseñador UI/UX",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/favicon.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/favicon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  }
}
