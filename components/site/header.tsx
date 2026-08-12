"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

import type { NavItem } from "@/lib";

export function Header({ navItems }: { navItems: NavItem[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const lastScrollY = useRef(0);
  const ticking = useRef(false);
  const isHidden = useRef(false);

  const navRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const logoRef = useRef<HTMLAnchorElement>(null);

  const handleScroll = useCallback(() => {
    if (ticking.current) return;
    ticking.current = true;

    window.requestAnimationFrame(() => {
      const y = window.scrollY;
      const delta = y - lastScrollY.current;

      const newAtTop = y < 72;

      let newHidden = isHidden.current;
      if (newAtTop) {
        newHidden = false;
      } else if (delta > 8) {
        newHidden = true;
      } else if (delta < -10) {
        newHidden = false;
      }

      if (newHidden !== isHidden.current) {
        isHidden.current = newHidden;
        navRef.current?.classList.toggle("header-element-hidden", newHidden);
        btnRef.current?.classList.toggle("header-element-hidden", newHidden);
      }

      logoRef.current?.classList.toggle("header-element-hidden", y > 72);

      lastScrollY.current = y;
      ticking.current = false;
    });
  }, []);

  useEffect(() => {
    lastScrollY.current = window.scrollY;
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Reset scroll state on navigation so nav always shows on new page
  useEffect(() => {
    lastScrollY.current = 0;
    isHidden.current = false;
    navRef.current?.classList.remove("header-element-hidden");
    btnRef.current?.classList.remove("header-element-hidden");
    logoRef.current?.classList.remove("header-element-hidden");
  }, [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="relative mx-auto h-20 max-w-[var(--container-max)] px-4 sm:h-24 sm:px-6 lg:h-[124px] lg:px-0">
        <Link
          ref={logoRef}
          href="/"
          className="absolute top-1/2 left-4 block h-[64px] w-[64px] -translate-y-1/2 overflow-hidden text-white sm:h-[74px] sm:w-[74px] lg:left-0 lg:h-[88px] lg:w-[88px]"
          aria-label="Sathriyan Group home"
        >
          <Image
            src="/assets/logo/sathriyan-generated-logo-light.png"
            alt="Sathriyan Group"
            width={1128}
            height={1108}
            priority
            className="h-full w-full object-contain drop-shadow-[0_8px_18px_rgba(0,0,0,0.42)]"
          />
        </Link>

        <nav
          ref={navRef}
          aria-label="Primary navigation"
          className="ease-brand absolute top-1/2 left-1/2 hidden -translate-x-1/2 -translate-y-1/2 transition-[transform,opacity] duration-300 will-change-[transform,opacity] lg:block"
        >
          <div className="bg-brand-ink-soft/85 flex items-center gap-1.5 rounded-full border border-white/18 p-2 shadow-[0_22px_64px_rgba(0,0,0,0.26)]">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`relative rounded-full px-5 py-3 text-sm leading-5 font-bold text-white/80 transition duration-300 ${
                  pathname === item.href
                    ? "bg-white/18 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] ring-1 ring-white/24"
                    : "hover:text-brand-gold hover:bg-white/10"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>

        <button
          ref={btnRef}
          type="button"
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((v) => !v)}
          className="bg-brand-ink-soft/85 ease-brand absolute top-1/2 right-4 grid size-11 -translate-y-1/2 place-items-center rounded-full border border-white/22 text-white shadow-[0_12px_34px_rgba(0,0,0,0.2)] transition-[transform,opacity] duration-300 will-change-[transform,opacity] sm:right-6 sm:size-12 lg:hidden"
        >
          {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>

        {isOpen && (
          <nav
            aria-label="Mobile navigation"
            className="bg-brand-ink-soft/95 absolute inset-x-4 top-[74px] rounded-[14px] border border-white/16 p-3 shadow-[0_22px_64px_rgba(16,32,48,0.38)] sm:inset-x-6 sm:top-[88px] lg:hidden"
          >
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block rounded-[10px] px-4 py-3 text-sm font-bold transition duration-300 ${
                  pathname === item.href
                    ? "text-brand-ink bg-white"
                    : "hover:text-brand-gold text-white hover:bg-white/10"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
