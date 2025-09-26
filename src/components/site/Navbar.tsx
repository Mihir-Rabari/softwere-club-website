"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/theme/ThemeToggle";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/committee", label: "Committee" },
  { href: "/gallery", label: "Gallery" },
  { href: "/#events", label: "Events" },
  { href: "/#achievements", label: "Highlights" },
  { href: "/#contact", label: "Contact" },
] as const;

export default function Navbar({ className }: { className?: string }) {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onHash = () => setOpen(false);
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 border-b border-border/60 backdrop-blur supports-[backdrop-filter]:bg-background/60",
        className
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="/" className="font-mono text-sm sm:text-base tracking-widest">
          <span className="text-accent">SOFTWARE</span> CLUB
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-foreground hover:opacity-90 transition-opacity"
            >
              {item.label}
            </a>
          ))}
          <a
            href="/#contact"
            className={cn(
              "ml-2 inline-flex items-center justify-center rounded-md font-medium border border-border bg-accent text-accent-foreground hover:opacity-90 h-9 px-3 text-sm"
            )}
          >
            Join Us
          </a>
          <ThemeToggle className="ml-2" />
        </nav>

        <button
          className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded border border-border"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle Menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background/90 backdrop-blur">
          <div className="px-4 py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="py-2 text-sm text-foreground hover:opacity-90"
              >
                {item.label}
              </a>
            ))}
            <a
              href="/#contact"
              className={cn(
                "mt-1 inline-flex items-center justify-center rounded-md font-medium border border-border bg-accent text-accent-foreground hover:opacity-90 h-9 px-3 text-sm"
              )}
            >
              Join Us
            </a>
            <div className="pt-2">
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
