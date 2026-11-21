
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://samgrotech-website-git-main-growthersamuel-7753.vercel.app"
  ),
  title: {
    default: "samgroTech Solutions | Technology That Moves Your Business Forward",
    template: "%s | samgroTech Solutions",
  },
  description:
    "samgroTech Solutions provides modern web development, software development, IT and networking, cybersecurity, and business technology solutions in Kenya and beyond.",
  applicationName: "samgroTech Solutions",
  keywords: [
    "samgroTech Solutions",
    "Web Development Kenya",
    "Software Development Kenya",
    "IT Support Kenya",
    "Cybersecurity Services",
    "Networking Solutions",
    "Business Technology Solutions",
    "Website Design Kenya",
  ],
  authors: [{ name: "samgroTech Solutions" }],
  creator: "samgroTech Solutions",
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: "/",
    siteName: "samgroTech Solutions",
    title: "samgroTech Solutions | Technology That Moves Your Business Forward",
    description:
      "Modern digital experiences, practical software, and reliable technology solutions for businesses in Kenya and beyond.",
    images: [
      {
        url: "/images/samgrotech-logo.png",
        width: 1200,
        height: 630,
        alt: "samgroTech Solutions logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "samgroTech Solutions | Technology That Moves Your Business Forward",
    description:
      "Modern digital experiences, practical software, and reliable technology solutions.",
    images: ["/images/samgrotech-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
