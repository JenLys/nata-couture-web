import type { CSSProperties } from "react";
import {Link} from "react-router-dom";
import {useLanguage} from "../language/LanguageSetter";

const BASE = import.meta.env.BASE_URL;

export default function Home(){

    const{currentTxt} = useLanguage(); //currentTxt is the full text set in the active lang
    const heroStyle = {
        ["--hero-image" as string]: `url(${BASE}images/brand/backdrop.png)`,
    } as CSSProperties;

    return(
    <div className = "scroll-container">
        <section className="scroll-section hero" style={heroStyle}>
            <h2 className="hero__shortdesc"> {currentTxt.hero.shortdesc} </h2>

            <span className="scroll-hint">
                <svg
                    className="scroll-hint__icon"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <polyline points="3 9 12 15 21 9" />
                </svg>
                <span className="scroll-hint__label">{currentTxt.hero.scrollhint}</span>
            </span>
            
        </section>

        <section className="scroll-section about">
            <h2 className="about__eyebrow"> {currentTxt.description.eyebrow} </h2>
            <p className="about__body">{currentTxt.description.body}</p>

            <section>
            <div className="cta__buttons">
                <Link to="/appointment" className="button">{currentTxt.nav.book}</Link>
                <Link to="/gallery" className="button">{currentTxt.nav.gallery}</Link>
            </div>

            </section>

        </section>

        

    </div>
);
}
