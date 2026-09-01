import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import { translations, type Lang } from "@/data/translations";

export type { Lang };

const STORAGE_KEY = "highlighter-lang";

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (typeof translations)["pt"];
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

function getInitialLang(): Lang {
  if (typeof window === "undefined") return "pt";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "pt" || stored === "en") return stored;
  return "pt";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(getInitialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    window.localStorage.setItem(STORAGE_KEY, lang);
  }, [lang]);

  const setLang = (next: Lang) => setLangState(next);

  const value = useMemo<LanguageContextValue>(
    () => ({ lang, setLang, t: translations[lang] }),
    [lang],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
