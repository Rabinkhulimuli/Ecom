"use client";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Layout from "@/components/homepage/Layout";
import Footer from "@/components/homepage/Footer";
import TopAds from "@/components/homepage/header/TopAds";
import AppQuery from "@/query/AppQuery";
import axios from "axios";
import { Provider } from "react-redux";
import { store } from "@/lib/store";

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

const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
axios.defaults.baseURL = apiUrl;
axios.defaults.withCredentials = true;
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
        <Provider store={store}>
          <AppQuery>
            <TopAds />
            <section className="mx-8  space-y-4 md:mx-33 ">
              <Layout />
              <div className=" mt-10 sm:mt-24">{children}</div>
            </section>
            <Footer />
          </AppQuery>
        </Provider>
      </body>
    </html>
  );
}
