import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavbarDemo } from "./components/nav";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "fitnesspergram.store",
  icons: {
    icon: ["/favicon.ico?v=1"],
    apple: ["/apple-touch-icon.png?v=4"],
    shortcut: ["/apple-touch-icon.png"],
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
            <footer className="text-center text-sm text-white">
              © 2024 fitnesspergram | Email : info@fitnesspergram |<br /> Phone
              : +917086615792 Business Address : uday ka ghar <br />
              --------- @ ----------
            </footer>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
