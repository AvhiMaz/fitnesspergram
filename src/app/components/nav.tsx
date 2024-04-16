"use client";
import React, { useState } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/app/components/ui/navbar-menu";
import { cn } from "@/utlis/cn";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href="/">
          <ChevronLeft />
        </Link>

        <MenuItem setActive={setActive} active={active} item="Home">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/plans">Our Vision & Plans</HoveredLink>
            <HoveredLink href="/works">How it Works</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Subscription"
              href="/subscribe"
              src="https://assets.aceternity.com/demos/algochurn.webp"
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="View Price"
              href="/price"
              src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="Menu"
              href="/menu"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="Recipes"
              href="/recipes"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="More">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/contact">Contact Us</HoveredLink>
            <HoveredLink href="/about">About Us</HoveredLink>
            <HoveredLink href="/faq">FAQs</HoveredLink>
            <HoveredLink href="/condition">Terms & Conditions</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
