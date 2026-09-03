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
            <h2 className= "hero__shortdesc"> {currentTxt.hero.shortdesc} </h2>
        </section>

        <section className="scroll-section about">
            <h2 className="about__eyebrow"> {currentTxt.description.eyebrow} </h2>
            <p className="about__body">{currentTxt.description.body}</p>
        </section>

        <section className="scroll-section cta">
            <div className="cta__buttons">
                <Link to="/appointment" className="button">{currentTxt.nav.book}</Link>
                <Link to="/gallery" className="button">{currentTxt.nav.gallery}</Link>
            </div>

        </section>

    </div>
);
}
