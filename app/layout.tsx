import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { tiktok, instagram } from "./assets";
import Image from "next/image";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "FILMMAKER",
  description: "Generated by create next app",
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
        <div
          className="absolute  z-40 flex lg:right-7 lg:top-10 top-1 right-3 gap-2
        "
        >
          <a target="_blank" href="https://www.tiktok.com/@edgarbaylon?lang=es">
            <Image src={tiktok} alt="tiktok" width={30} height={30} />
          </a>
          <a target="_blank" href="https://www.instagram.com/edgar_baylon/">
            <Image src={instagram} alt="instagram" width={30} height={30} />
          </a>
        </div>
        {children}
      </body>
    </html>
  );
}
