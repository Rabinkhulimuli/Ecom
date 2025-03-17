"use client"
import { Geist, Geist_Mono,Poppins } from "next/font/google";
import "./globals.css";
import Layout from "@/components/homepage/Layout";
import Footer from "@/components/homepage/Footer";
import TopAds from "@/components/homepage/header/TopAds";
import { SessionProvider } from "next-auth/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const poppins=Poppins({
  subsets:['latin'],
  weight:'400'
})
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`max-w-[1440px] ${poppins.className} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SessionProvider>
          <TopAds />
          <section className="mx-8  space-y-4 md:mx-33 ">
            <Layout />
            <div className=" mt-10 sm:mt-24">
               {children}
            </div>
           
          </section>

          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
