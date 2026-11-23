"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Lang = "en" | "id";
export type Localized = { en: string; id: string };

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggle: () => void;
  tr: (value: Localized) => string;
};

const STORAGE_KEY = "portfolio-lang";
const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "en" || saved === "id") {
      setLangState(saved);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Storage can be blocked in private mode; the in-memory state still works.
    }
  }, []);

  const toggle = useCallback(() => {
    setLang(lang === "en" ? "id" : "en");
  }, [lang, setLang]);

  const tr = useCallback((value: Localized) => value[lang], [lang]);

  const value = useMemo(
    () => ({ lang, setLang, toggle, tr }),
    [lang, setLang, toggle, tr],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useI18n() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useI18n must be used inside <LanguageProvider>");
  }
  return context;
}
