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
  title: "Tarun Kumar - Senior Software Engineer",
  description: "Senior Software Engineer with 9+ years of experience creating game and app experiences for Android, iOS, PC, and VR platforms. Expert in Unity 3D, React Native, React.js, Next.js, and Node.js.",
  keywords: ["Tarun Kumar", "Software Engineer", "Game Developer", "Unity 3D", "React", "Next.js", "VR Developer", "Mobile Developer"],
  authors: [{ name: "Tarun Kumar" }],
  openGraph: {
    title: "Tarun Kumar - Senior Software Engineer",
    description: "9+ years of experience in game and app development for mobile, web, and VR platforms",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
