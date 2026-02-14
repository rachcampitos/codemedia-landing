"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "./ui/ThemeToggle";
import { LanguageToggle } from "./ui/LanguageToggle";
import { useLanguage } from "@/i18n";
import { getNavLinks } from "@/data/content";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");
  const { locale, t } = useLanguage();
  const navLinks = useMemo(() => getNavLinks(locale), [locale]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    navLinks.forEach((link) => {
      const element = document.getElementById(link.sectionId);
      if (!element) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(link.sectionId);
            }
          });
        },
        { threshold: 0.3, rootMargin: "-100px 0px -50% 0px" }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [navLinks]);

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }

    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 dark:bg-[#0A0A0A]/90 backdrop-blur-lg shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold text-[var(--secondary)] dark:text-white">
                Code<span className="gradient-text-animated">Media</span><span className="text-[#06B6D4]">/</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`relative font-medium transition-colors text-sm ${
                    activeSection === link.sectionId
                      ? "text-[var(--secondary)] dark:text-white"
                      : "text-[var(--text-secondary)] hover:text-[var(--secondary)] dark:text-[var(--text-muted)] dark:hover:text-white"
                  }`}
                >
                  {link.label}
                  {activeSection === link.sectionId && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[var(--primary)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <LanguageToggle />
              <ThemeToggle />
              <a
                href="#contacto"
                onClick={(e) => scrollToSection(e, "#contacto")}
                className="btn-primary !py-3 !px-6 text-sm"
              >
                {t("header.contact")}
              </a>
            </div>

            {/* Mobile */}
            <div className="lg:hidden flex items-center gap-2">
              <LanguageToggle />
              <ThemeToggle />
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-[var(--secondary)] dark:text-white"
                aria-label={
                  isMobileMenuOpen ? t("header.closeMenu") : t("header.openMenu")
                }
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white dark:bg-[#0A0A0A] pt-24 px-6 lg:hidden"
          >
            <nav className="flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className={`text-xl font-medium transition-colors py-2 block ${
                      activeSection === link.sectionId
                        ? "text-[var(--primary)]"
                        : "text-[var(--secondary)] dark:text-white hover:text-[var(--primary)]"
                    }`}
                  >
                    {link.label}
                  </a>
                </motion.div>
              ))}

              <div className="pt-6 border-t border-[var(--border)]">
                <a
                  href="#contacto"
                  onClick={(e) => scrollToSection(e, "#contacto")}
                  className="btn-primary text-center w-full justify-center"
                >
                  {t("header.contact")}
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
