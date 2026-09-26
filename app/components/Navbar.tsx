"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#usps", label: "USPs" },
  { href: "#facilities", label: "Facilities" },
  { href: "#rooms", label: "Rooms" },
  { href: "#gallery", label: "Gallery" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`ombara-header ${scrolled ? "is-scrolled" : ""}`}>
      <nav className="ombara-nav">
        <a href="#home" className="ombara-brand">
          <span className="font-serif-ombara">OMBARA</span>
        </a>

        <button
          className="ombara-burger"
          aria-label="Toggle navigation"
          onClick={() => setOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>

        <ul className={`ombara-menu ${open ? "is-open" : ""}`}>
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
            </li>
          ))}
          <li>
            <a href="#register" className="ombara-register" onClick={() => setOpen(false)}>
              Register
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}