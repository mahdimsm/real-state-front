import type { Metadata } from "next";
import {Roboto} from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";

const font=Roboto({
  weight:['100','300','400','500','700'],
  subsets:["latin"],
})

export const metadata: Metadata = {
  title: "Real state Project Next JS",
  description: "Real state website with nextjs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ResponsiveNav/>
        {children}
      </body>
    </html>
  );
}
