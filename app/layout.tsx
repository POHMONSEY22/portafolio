import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import ParallaxBackground from "@/components/parallax-background"
import CustomCursor from "@/components/custom-cursor"

const inter = Inter({ subsets: ["latin"] })

// Definimos la URL base para los metadatos absolutos
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://juanpablogallo.vercel.app"

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Juan Pablo Gallo Arboleda | Frontend Developer & UI Designer",
    template: "%s | Juan Pablo Gallo Arboleda",
  },
  description:
    "Portfolio profesional de Juan Pablo Gallo Arboleda, desarrollador frontend especializado en React, Next.js y diseño UI/UX con experiencia en proyectos creativos y soluciones web modernas.",
  keywords: [
    "frontend developer",
    "UI designer",
    "React",
    "Next.js",
    "Tailwind CSS",
    "desarrollo web",
    "Juan Pablo Gallo",
    "portfolio",
    "diseño web",
    "programador",
  ],
  authors: [{ name: "Juan Pablo Gallo Arboleda", url: baseUrl }],
  creator: "Juan Pablo Gallo Arboleda",
  publisher: "Juan Pablo Gallo Arboleda",
  formatDetection: {
    email: true,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: baseUrl,
    title: "Juan Pablo Gallo Arboleda | Frontend Developer & UI Designer",
    description:
      "Portfolio profesional de Juan Pablo Gallo Arboleda, desarrollador frontend especializado en React, Next.js y diseño UI/UX con experiencia en proyectos creativos y soluciones web modernas.",
    siteName: "Portfolio de Juan Pablo Gallo Arboleda",
    images: [
      {
        url: `${baseUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Juan Pablo Gallo Arboleda - Frontend Developer & UI Designer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Juan Pablo Gallo Arboleda | Frontend Developer & UI Designer",
    description:
      "Portfolio profesional de Juan Pablo Gallo Arboleda, desarrollador frontend especializado en React, Next.js y diseño UI/UX.",
    images: [`${baseUrl}/og-image.jpg`],
    creator: "@juanpablogallo",
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/apple-touch-icon.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/apple-touch-icon-precomposed.png",
    },
  },
  manifest: `${baseUrl}/site.webmanifest`,
  category: "technology",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.png" />
        <link rel="canonical" href={baseUrl} />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <ParallaxBackground />
          <CustomCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
