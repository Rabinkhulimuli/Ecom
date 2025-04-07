import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import axios from "axios";
import LayoutProvider from "@/components/layout/LayoutProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Xprive.com",
  description: "Best luxury shop where items are made in  hell",
  keywords: "Luxury xprive xeron e-commerse-Website expensive",
};

const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
axios.defaults.baseURL = apiUrl;
axios.defaults.withCredentials = true;
export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`max-w-[1440px] ${poppins.className} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LayoutProvider>
          <div className=" mt-10 sm:mt-24">{children}</div>
          {modal}
        </LayoutProvider>
      </body>
    </html>
  );
}
