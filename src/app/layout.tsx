import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavbarDemo } from "./components/nav";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "fitnesspergram.store",
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
            <footer className="text-center text-white">
              <p className="text-[15px]">
                © 2024 fitnesspergram | Email : info@fitnesspergram.store |
                <br /> Phone : +917086615792 | Business Address : Guwahati
                <br />
                --------- @ ----------
              </p>
            </footer>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
