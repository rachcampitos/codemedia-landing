"use client";

import { useLanguage } from "@/i18n";

export function LanguageToggle() {
  const { locale, setLocale, t, mounted } = useLanguage();

  if (!mounted) {
    return <div className="w-10 h-10" />;
  }

  return (
    <button
      onClick={() => setLocale(locale === "es" ? "en" : "es")}
      className="p-2.5 rounded-xl bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--primary)] transition-all duration-200 text-xs font-bold text-[var(--secondary)] dark:text-white min-w-10"
      aria-label={t("lang.switch")}
    >
      {locale === "es" ? "EN" : "ES"}
    </button>
  );
}
