import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { siteConfig } from "@/lib/config";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const title = `${siteConfig.name} — Backend Engineer`;
const description =
  "Backend developer focused on distributed systems, cloud-native applications, and scalable service design. Working with Java, Spring Boot, PostgreSQL, Redis, Kafka, Docker, and Azure.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title,
  description,
  keywords: [
    "Harsh Shah",
    "Backend Engineer",
    "Distributed Systems",
    "Java Developer",
    "Spring Boot",
    "Software Engineer Portfolio",
  ],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    title,
    description,
    url: siteConfig.domain,
    siteName: `${siteConfig.name} — Portfolio`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={jetbrainsMono.variable}>
      <body className="bg-bg text-fg font-mono antialiased selection:bg-accent/20 selection:text-accent">
        {children}
      </body>
    </html>
  );
}
