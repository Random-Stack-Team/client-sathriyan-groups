"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export type NavItem = {
  label: string;
  href: string;
};

export function Header({ navItems }: { navItems: NavItem[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const pathname = usePathname();

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDifference = currentScrollY - lastScrollY;

      // Always show at the top
      if (currentScrollY <= 20) {
        setIsVisible(true);
      }

      // Scrolling down
      else if (scrollDifference > 5) {
        setIsVisible(false);
        setIsOpen(false);
      }

      // Scrolling up
      else if (scrollDifference < -5) {
        setIsVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-transform duration-500 ease-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="relative mx-auto flex h-28 max-w-[1240px] items-center justify-between px-6 lg:h-[124px] lg:px-0">
        <Link
          href="/"
          className="group flex h-[82px] w-[258px] items-center text-white transition duration-300 hover:opacity-90 lg:h-[94px] lg:w-[330px]"
          aria-label="Sathriyan Group home"
        >
          <Image
            src="/assets/logo/sathriyan-generated-logo-light.png"
            alt="Sathriyan Group"
            width={1128}
            height={1108}
            priority
            className="h-full w-auto object-contain drop-shadow-[0_10px_22px_rgba(0,0,0,0.46)] transition duration-300 group-hover:scale-[1.01]"
          />
        </Link>

        <nav
          aria-label="Primary navigation"
          className="absolute left-1/2 hidden -translate-x-1/2 lg:block"
        >
          <div className="bg-brand-ink-soft/42 flex items-center gap-1.5 rounded-full border border-white/18 p-2 shadow-[0_22px_64px_rgba(0,0,0,0.26)] backdrop-blur-2xl">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`relative rounded-full px-5 py-3 text-sm leading-5 font-bold text-white/80 transition duration-300 ${
                  pathname === item.href
                    ? "bg-white/18 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] ring-1 ring-white/24"
                    : "hover:bg-white/10 hover:text-brand-gold"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>

        <button
          type="button"
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
          className="bg-brand-ink-soft/38 grid size-12 place-items-center rounded-full border border-white/22 text-white shadow-[0_12px_34px_rgba(0,0,0,0.2)] backdrop-blur-2xl lg:hidden"
        >
          {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>

        {isOpen && (
          <nav
            aria-label="Mobile navigation"
            className="bg-brand-ink-soft/96 absolute inset-x-6 top-[98px] rounded-[14px] border border-white/16 p-3 shadow-[0_22px_64px_rgba(16,32,48,0.38)] backdrop-blur-2xl lg:hidden"
          >
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block rounded-[10px] px-4 py-3 text-sm font-bold transition duration-300 ${
                  pathname === item.href
                    ? "bg-white text-brand-ink"
                    : "text-white hover:bg-white/10 hover:text-brand-gold"
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