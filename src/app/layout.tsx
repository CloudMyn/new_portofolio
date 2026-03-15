import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abdi Natsir | Fullstack Web Developer",
  description: "Professional Fullstack Web Developer specializing in Laravel, React, and Flutter. Creating modern, responsive web applications with expertise in backend development and UI/UX design.",
  keywords: ["Abdi Natsir", "Fullstack Developer", "Laravel", "React", "Flutter", "Web Developer", "PHP", "JavaScript", "Freelancer"],
  authors: [{ name: "Abdi Natsir" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Abdi Natsir | Fullstack Web Developer",
    description: "Professional Fullstack Web Developer specializing in Laravel, React, and Flutter",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdi Natsir | Fullstack Web Developer",
    description: "Professional Fullstack Web Developer specializing in Laravel, React, and Flutter",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
