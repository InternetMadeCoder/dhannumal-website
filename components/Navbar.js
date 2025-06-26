"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms & Conditions" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    const stored =
      typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    if (stored) setTheme(stored);
    else if (window.matchMedia("(prefers-color-scheme: dark)").matches)
      setTheme("dark");
    else setTheme("dark"); 
  }, []);
  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.classList.toggle("dark", theme === "dark");
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur shadow-sm shadow-gray-200 dark:shadow-gray-900/20">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-2 py-3 relative">
        
        <div className="flex-1 flex items-center min-w-0">
          <Link
            href="/"
            className="font-bold text-xl tracking-tight mr-4 whitespace-nowrap transition-colors duration-200 hover:text-primary"
            style={{ minWidth: 0 }}
          >
            Dhannumal Stores
          </Link>
        </div>

        <div className="hidden md:flex flex-1 justify-center min-w-0">
          <div className="flex gap-8 items-center whitespace-nowrap">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`py-2 md:py-0 px-2 transition-all duration-200 whitespace-nowrap ${
                  pathname === link.href
                    ? "font-semibold underline underline-offset-4 text-primary"
                    : "hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex-1 flex justify-end items-center min-w-0">
          <button
            className="md:hidden p-2 mr-2"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span className="block w-6 h-0.5 bg-foreground mb-1 transition-all duration-200"></span>
            <span className="block w-6 h-0.5 bg-foreground mb-1 transition-all duration-200"></span>
            <span className="block w-6 h-0.5 bg-foreground transition-all duration-200"></span>
          </button>
          <IconButton
            sx={{ ml: 1 }}
            onClick={toggleTheme}
            color="inherit"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </div>
        {/* mobile menu */}
        {open && (
          <div className="md:hidden absolute left-0 right-0 top-full bg-background border-b border-gray-200 dark:border-gray-800 flex flex-col items-center gap-2 py-3 z-40 transition-all duration-300">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 w-full text-center transition-all duration-200 whitespace-nowrap ${
                  pathname === link.href
                    ? "font-semibold underline underline-offset-4 text-primary"
                    : "hover:text-primary"
                }`}
                onClick={() => setTimeout(() => setOpen(false), 100)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
