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
  const [locale, setLocaleState] = useState<Locale>("es");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("locale") as Locale | null;
    if (saved && (saved === "es" || saved === "en")) {
      setLocaleState(saved);
      document.documentElement.lang = saved;
    } else {
      const browserLang = navigator.language.toLowerCase();
      const detected: Locale = browserLang.startsWith("es") ? "es" : "en";
      setLocaleState(detected);
      document.documentElement.lang = detected;
    }
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
