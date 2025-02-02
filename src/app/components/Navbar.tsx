"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Icons for the mobile menu

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-2 left-0 w-full   bg-black/50 backdrop-blur-lg z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <img
              src="https://www.fightcrime.in/assets/img/indian_laww.svg"
              alt="logo"
              className="w-14 h-14 rounded-full"
            />
            <span className="text-white text-3xl font-semibold">
              Crime Report
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 text-xl">
            <NavItem href="/submit-report" text="Submit Report" />
            <NavItem href="/track-report" text="Track Report" />
            <NavItem href="/how-it-work" text="How It Works" />
            <NavItem href="/resources" text="Resources" />
            <NavItem href="/contact" text="Contact" />
          </div>

          {/* Emergency Button */}
          <button className="relative flex items-center gap-2 rounded-full ring-1 ring-red-500 bg-red-600/20 text-red-500 px-4 py-2 text-lg font-semibold transition hover:bg-red-600 hover:text-white">
            <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-red-500 animate-ping"></span>
            Emergency: 911
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-black/80 backdrop-blur-lg border-t border-gray-700 shadow-lg">
          <div className="flex flex-col space-y-4 p-4">
            <NavItem href="/submit-report" text="Submit Report" />
            <NavItem href="/track-report" text="Track Report" />
            <NavItem href="/how-it-work" text="How It Works" />
            <NavItem href="/resources" text="Resources" />
            <NavItem href="/contact" text="Contact" />
          </div>
        </div>
      )}
    </nav>
  );
}

// Reusable Navigation Item
function NavItem({ href, text }: { href: string; text: string }) {
  return (
    <Link href={href} className="text-gray-400 hover:text-white transition">
      {text}
    </Link>
  );
}
