import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import type { Metadata } from "next";
import ClientWrapper from "@/components/ClientWrapper";
export const metadata: Metadata = {
  title: "Toastrr - Modern Toast Notifications for React",
  description: "Toastrr is a lightweight, customizable toast notifications library for React applications. Create beautiful, accessible notifications with ease.",
  keywords: "toast notifications, react, javascript, ui components, notifications library, react hooks",
  authors: [{ name: "Toastrr" }],
  openGraph: {
    title: "Toastrr - Modern Toast Notifications for React",
    description: "Create beautiful, accessible toast notifications with ease in React applications",
    type: "website",
    locale: "en_US",
    siteName: "Toastrr",
    images: [
      {
        url: 'https://toastrr.vercel.app/toastrr.png'
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Toastrr - Modern Toast Notifications for React",
    description: "Create beautiful, accessible toast notifications with ease in React applications",
    images: [
      {
        url: 'https://toastrr.vercel.app/toastrr.png',
        alt: "Toastrr - Modern Toast Notifications for React"
      }
    ]
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};
// Keep RootLayout as a server component
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className='antialiased'
        data-new-gr-c-s-check-loaded="14.1224.0"
        data-gr-ext-installed=""
      >
        <ClientWrapper>
          {children}
        </ClientWrapper>
        <Analytics />
      </body>
    </html>
  );
}
