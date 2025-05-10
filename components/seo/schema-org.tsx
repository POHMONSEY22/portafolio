import Script from "next/script"

export default function SchemaOrg() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://juanpablogallo.vercel.app"

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        url: baseUrl,
        name: "Juan Pablo Gallo Arboleda | Frontend Developer & UI Designer",
        description:
          "Portfolio profesional de Juan Pablo Gallo Arboleda, desarrollador frontend especializado en React, Next.js y diseño UI/UX.",
        potentialAction: [
          {
            "@type": "SearchAction",
            target: `${baseUrl}/?s={search_term_string}`,
            "query-input": "required name=search_term_string",
          },
        ],
        inLanguage: "es",
      },
      {
        "@type": "WebPage",
        "@id": `${baseUrl}/#webpage`,
        url: baseUrl,
        name: "Juan Pablo Gallo Arboleda | Frontend Developer & UI Designer",
        isPartOf: {
          "@id": `${baseUrl}/#website`,
        },
        description:
          "Portfolio profesional de Juan Pablo Gallo Arboleda, desarrollador frontend especializado en React, Next.js y diseño UI/UX.",
        breadcrumb: {
          "@id": `${baseUrl}/#breadcrumb`,
        },
        inLanguage: "es",
        potentialAction: [
          {
            "@type": "ReadAction",
            target: [baseUrl],
          },
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${baseUrl}/#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Inicio",
          },
        ],
      },
      {
        "@type": "Person",
        "@id": `${baseUrl}/#person`,
        name: "Juan Pablo Gallo Arboleda",
        image: {
          "@type": "ImageObject",
          "@id": `${baseUrl}/#personimage`,
          inLanguage: "es",
          url: `${baseUrl}/profile.png`,
          contentUrl: `${baseUrl}/profile.png`,
          caption: "Juan Pablo Gallo Arboleda",
        },
        description:
          "Desarrollador Frontend & Diseñador UI/UX especializado en crear experiencias web modernas y atractivas.",
        sameAs: ["https://github.com/POHMONSEY22", "https://www.linkedin.com/in/juan-pablo-gallo-93999328a/"],
        jobTitle: "Frontend Developer & UI Designer",
        worksFor: {
          "@type": "Organization",
          name: "Freelance",
        },
      },
    ],
  }

  return (
    <Script id="schema-org" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  )
}
