import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import ParallaxBackground from "@/components/parallax-background"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Juan Pablo Gallo Arboleda - Frontend Developer",
  description: "Portfolio personal de Juan Pablo Gallo Arboleda, desarrollador frontend",
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
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <ParallaxBackground />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
