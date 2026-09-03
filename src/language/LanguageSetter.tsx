import {createContext} from "react";
import {useContext, useEffect, useState} from "react";
import {type ReactNode} from "react";
import {translations, type Lang, type Translations} from "./translations";

/* Keep the active state- that's the selected language
using React Context API
call useLanguage() hook to get info on what language is set*/

interface LanguageContextValue{
    lang: Lang; //currently active language
    currentTxt: Translations; //all of the current text data (active language version text)

    setLanguage: (lang:Lang) => void; 
    toggleLanguage: ()=> void; //toggle flip
}

//error handling
const LanguageContext = createContext<LanguageContextValue | undefined>( undefined);

const STORAGE_KEY = "site-language"; //save user's language choice

//GETTER pick language to set when site loads: checks if any stashed value, if none, use default EN
// returns stashed value (english or french) if applicable, else returns english
function getInitialLang(): Lang {
    try{
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored === "en" || stored === "fr"){
            return stored;
        }
    }
    catch{
        //no language preference stored
    }
    return "en";
}


//holds language state- lets other parts(nested branches) use it (call useLanguage())
// App.tsx has <HashRouter>

export function LanguageProvider({children}: {children: ReactNode}){
    //active language value stored in useState
    const [lang, setLang] = useState<Lang>(getInitialLang); //callback function runs once on first render


    //user selects the other language (non-active):
    // update html lang attrib + save new set lang to local STORAGE_KEY
    useEffect(() => {
        document.documentElement.lang = lang;
        try{
            localStorage.setItem(STORAGE_KEY, lang);
        }
        catch{
            //if error, we don't save selected language to STORAGE_KEY
        }
    }, [lang]);


    // lang (either "en" or "fr") gets turned into the full english or french text stored in translations.ts
    const value: LanguageContextValue = {
        lang,
        currentTxt: translations[lang],
        setLanguage: setLang,
        toggleLanguage: ()=> setLang((prev)=> (prev === "en" ? "fr" : "en")),

    };

    //each page can call useLanguage, if [lang] context array has a change useEffect gets triggered.
    // toggling between EN FR switches the displayed language right away (no page reload)
    return(
        <LanguageContext.Provider value={value}> {children} </LanguageContext.Provider>
    );
    
}

export function useLanguage() {
    const ctx = useContext(LanguageContext);
    //error checking
    if (!ctx){
        throw new Error("useLanguage must be used within a descendant of the provider LanguageProvider")
    }
    
    return ctx;
}
