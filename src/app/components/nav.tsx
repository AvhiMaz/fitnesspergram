"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "@/app/components/ui/navbar-menu";
import { cn } from "@/utlis/cn";
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
        <Link href="/">Home</Link>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/subscribe">Subscribe</HoveredLink>
            <HoveredLink href="/price">Pricing</HoveredLink>
            <HoveredLink href="/menu">Menu</HoveredLink>
            <HoveredLink href="/recipes">Recipes</HoveredLink>
          </div>
        </MenuItem>

        <Link href="/contact">Contact</Link>
        <MenuItem setActive={setActive} active={active} item="About">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/about">About Us</HoveredLink>
            <HoveredLink href="/faq">FAQs</HoveredLink>
            <HoveredLink href="/condition">Terms & Conditions</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
