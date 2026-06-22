import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";
import ScrollRevealInit from "@/components/ScrollRevealInit";
import ThemeTransition from "@/components/ThemeTransition";
import AnnouncementBar from "@/components/AnnouncementBar";
import CustomCursor from "@/components/CustomCursor";
import BackToTop from "@/components/BackToTop";
import MagneticInit from "@/components/MagneticInit";
import TiltInit from "@/components/TiltInit";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Mission-Driven Consulting`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "management consulting",
    "mission-driven consulting",
    "public sector partner",
    "BASH Insights",
    "strategic consulting",
    "program management",
    "operations support",
  ],
  authors: [{ name: SITE_NAME }],
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Mission-Driven Consulting`,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: `${SITE_NAME} | Mission-Driven Consulting`,
    description: SITE_DESCRIPTION,
  },
  icons: {
    icon: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#06B6D4",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${inter.variable} ${sora.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const t = localStorage.getItem('theme') || 'dark';
                document.documentElement.dataset.theme = t;
              } catch(e) {
                document.documentElement.dataset.theme = 'dark';
              }
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <ThemeTransition />
        <ScrollRevealInit />
        <CustomCursor />
        <BackToTop />
        <MagneticInit />
        <TiltInit />
        <AnnouncementBar />
        {children}
      </body>
    </html>
  );
}
