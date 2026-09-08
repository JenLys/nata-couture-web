import {Link} from "react-router-dom";
import {useEffect} from "react";
import {useRef} from "react";
import BookApt from "../pages/BookApt";
import {useLanguage} from "../language/LanguageSetter";


const BASE = import.meta.env.BASE_URL;

export default function Header() {

    //useLanguage is a hook defined in LanguageSetter.tsx
    const {currentTxt, lang, setLanguage} = useLanguage();

    //Header bar has a dynamic resizing--> width is computed and set
    const headerRef = useRef<HTMLElement>(null); //reference to the header DOM element *FOR THE DYNAMIC RESIZING, measures height
    //changing the language might make some divs longer and stretch out the page, so we must recalibrate the dimensions
    // height will be header-height <n> pixels, styles.css calc() will use it
    useEffect(() => {
        const element = headerRef.current;
        if (!element){
            return;
        }
        const setHeightVar= () => {document.documentElement.style.setProperty(
            "--header-height",
            `${element.offsetHeight}px`
        ); };

        setHeightVar(); //get measurements
        const observer = new ResizeObserver(setHeightVar);
        observer.observe(element);
        return ()=> observer.disconnect();
    }, [lang]); //if current context array [lang] gets changed, i.e. new language toggled; useEffect does its job
  
    return(

        <header className="site-header" ref={headerRef}>

            {/* Logo links back to home page if clicked */}

            <Link to="/" className="site-header__logo" aria-label="Home">
            <img src={`${BASE}images/brand/homeicon.png`} alt="home"></img>
            <span>{currentTxt.hero.name}</span> {/* display "hero" text section's name component in Active language*/}
            </Link>

            <nav className="site-header__nav" aria-label="Primary">
            <Link to="/gallery"> {currentTxt.nav.gallery}</Link>
            <Link to="/appointment"> {currentTxt.nav.book}</Link>
            </nav>

            <div className="lang-toggle" role="group" aria-label="Language">
                <button 
                type="button" 
                className={lang === "en" ? "is-active" : ""}
                aria-pressed={lang === "en"}
                onClick={() => setLanguage("en")}>
                    English
                </button>

                <button 
                type="button" 
                className={lang === "fr" ? "is-active" : ""}
                aria-pressed={lang === "fr"}
                onClick={() => setLanguage("fr")}>
                    Français
                </button>

            </div>

        </header>

    );
}