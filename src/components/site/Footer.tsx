import * as React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-sm flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="text-foreground">© {new Date().getFullYear()} Software Club. All rights reserved.</div>
        <div className="flex items-center gap-4 text-foreground">
          <a href="/#about" className="hover:text-foreground">About</a>
          <a href="/#events" className="hover:text-foreground">Events</a>
          <a href="/#contact" className="hover:text-foreground">Contact</a>
        </div>
      </div>
    </footer>
  );
}
