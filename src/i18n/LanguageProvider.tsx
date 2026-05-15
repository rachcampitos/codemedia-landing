"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { type Locale, translations } from "./translations";

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
  mounted: boolean;
}

const LanguageContext = createContext<LanguageContextType>({
  locale: "es",
  setLocale: () => {},
  t: (key: string) => key,
  mounted: false,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    if (typeof window === "undefined") return "es";
    const fromHtml = document.documentElement.lang;
    return fromHtml === "es" || fromHtml === "en" ? (fromHtml as Locale) : "es";
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("locale", newLocale);
    document.documentElement.lang = newLocale;
  };

  const t = (key: string) => translations[locale][key] ?? key;

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t, mounted }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

export type { Locale };
