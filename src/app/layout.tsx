import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavbarDemo } from "./components/nav";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "fitnesspergram.com",
  icons: {
    shortcut: "/favicon.ico",
  },
  manifest: "site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <div className="bg-black">
            <NavbarDemo />
            {children}
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
