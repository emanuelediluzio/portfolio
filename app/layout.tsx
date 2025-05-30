import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: {
    default: "emanuelediluzio.it",
    template: "%s | emanuelediluzio.it",
  },
  description: "Studente di Artificial Intelligence Engineering, appassionato di sviluppo software, AI generativa e design interattivo",
  openGraph: {
    title: "emanuelediluzio.it",
    description:
      "Studente di Artificial Intelligence Engineering, appassionato di sviluppo software, AI generativa e design interattivo",
    url: "https://emanuelediluzio.it",
    siteName: "emanuelediluzio.it",
    images: [
      {
        url: "https://emanuelediluzio.it/og.png",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "it-IT",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Emanuele Di Luzio",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.png",
  },
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <html lang="it" className={[inter.variable, calSans.variable].join(" ")}>
      <head>
        <Analytics />
      </head>
      <body
        className={`bg-black ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined
          }`}
      >
        {children}
      </body>
    </html>
  );
}
