import { ImageResponse } from "next/og"

export const runtime = "edge"

export const alt = "Juan Pablo Gallo Arboleda - Frontend Developer & UI Designer"
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 48,
        background: "white",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center",
        padding: 48,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 24,
        }}
      >
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/l-KO0Cr6jiSlc6ZcyrFuPwMqOP0oCW8M.png"
          alt="Logo"
          width={120}
          height={120}
          style={{ marginRight: 24 }}
        />
      </div>
      <h1 style={{ margin: 0, fontSize: 64, fontWeight: 900, marginBottom: 12 }}>Juan Pablo Gallo Arboleda</h1>
      <p style={{ margin: 0, fontSize: 32, color: "#666", marginBottom: 48 }}>Frontend Developer & UI Designer</p>
      <div
        style={{
          display: "flex",
          gap: 16,
          marginTop: 24,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 24, color: "#333" }}>React</div>
        <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 24, color: "#333" }}>Next.js</div>
        <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 24, color: "#333" }}>Tailwind CSS</div>
        <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 24, color: "#333" }}>UI/UX</div>
      </div>
    </div>,
    {
      ...size,
    },
  )
}
