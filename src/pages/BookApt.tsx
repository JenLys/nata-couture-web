import {Link} from "react-router-dom";
import {useLanguage} from "../language/LanguageSetter";

export default function BookApt(){

    const {currentTxt} = useLanguage(); //current text in the active set language

    return(
    <>
    <div className="static-page">
        <Link to="/" className= "back-link"> {currentTxt.book.back} </Link>
        <h1>{currentTxt.book.title}</h1>
        <p>{currentTxt.book.body}</p>
    </div>
    
    <div className="map-embed">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.247629805189!2d-73.7945926232101!3d45.525222171074994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f60!3m3!1m2!1s0x4cc9238461ecd66b%3A0x8279aa7f5a57c878!2sNata%20Couture!5e0!3m2!1sen!2sca!4v1788886819570!5m2!1sen!2sca"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Nata Couture- 294 rue Boulanger, Laval, H7X3R2"
            width="600" 
            height="450" 
            allowFullScreen
        ></iframe>
    </div>
    </>
);
}