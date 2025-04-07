"use client";
import { store } from "@/lib/store";
import AppQuery from "@/query/AppQuery";
import React from "react";
import { Provider } from "react-redux";
import TopAds from "../homepage/header/TopAds";
import Layout from "../homepage/Layout";
import Footer from "../homepage/Footer";

export default function LayoutProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Provider store={store}>
        <AppQuery>
          <TopAds />
          <section className="mx-8  space-y-4 md:mx-33 ">
            <Layout />
            {children}
          </section>
          <Footer />
        </AppQuery>
      </Provider>
    </div>
  );
}
