"use client";
import "./globals.css";

import { Inter } from "next/font/google";
import { useEffect } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "WebApp",
  description: "React Web App ",
};

export default function RootLayout({ children }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <html lang="en">
      <body className={inter.className}>
      <Nav/>
      {children}
      <Footer/>
      </body>
    </html>
  );
}
