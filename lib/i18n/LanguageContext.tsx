"use client";

import {
    createContext,
    useContext,
    useState,
    useEffect,
    useCallback,
    type ReactNode,
} from "react";
import { translations, rtlLanguages, type Language, type Translations } from "./translations";

interface LanguageContextValue {
    lang: Language;
    t: Translations;
    setLang: (lang: Language) => void;
    isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextValue>({
    lang: "en",
    t: translations.en,
    setLang: () => { },
    isRTL: false,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [lang, setLangState] = useState<Language>("en");

    const setLang = useCallback((newLang: Language) => {
        setLangState(newLang);
        // Update document attributes for RTL and language
        const isRTL = rtlLanguages.includes(newLang);
        document.documentElement.lang = newLang;
        document.documentElement.dir = isRTL ? "rtl" : "ltr";
        // Persist preference
        try {
            localStorage.setItem("ithelper-lang", newLang);
        } catch { }
    }, []);

    useEffect(() => {
        // Restore from localStorage
        try {
            const saved = localStorage.getItem("ithelper-lang") as Language | null;
            if (saved && translations[saved]) {
                setLang(saved);
            }
        } catch { }
    }, [setLang]);

    const isRTL = rtlLanguages.includes(lang);
    const t = translations[lang];

    return (
        <LanguageContext.Provider value={{ lang, t, setLang, isRTL }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    return useContext(LanguageContext);
}
