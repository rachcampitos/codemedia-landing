"use client";

import Image from "next/image";
import { siteConfig, getNavLinks } from "@/data/content";
import { useLanguage } from "@/i18n";
import { useMemo } from "react";

export function Footer() {
  const { locale, t } = useLanguage();
  const navLinks = useMemo(() => getNavLinks(locale), [locale]);

  return (
    <footer className="bg-[var(--surface)] dark:bg-[var(--surface)] border-t border-[var(--border)] py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo + name */}
          <div className="flex items-center gap-3">
            <Image
              src="/codemedia-logo.png"
              alt="Code Media logo"
              width={32}
              height={32}
              className="rounded-lg object-contain"
            />
            <span className="font-bold text-[var(--secondary)] dark:text-white">
              Code<span className="text-[var(--primary)]">Media</span>
            </span>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Location */}
          <p className="text-sm text-[var(--text-muted)]">
            {siteConfig.location}
          </p>
        </div>

        <div className="mt-8 pt-8 border-t border-[var(--border)] text-center">
          <p className="text-sm text-[var(--text-muted)]">
            &copy; {new Date().getFullYear()} {siteConfig.legalName}. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
