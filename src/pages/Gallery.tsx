import {Link} from "react-router-dom";
import {useLanguage} from "../language/LanguageSetter";
import {photos} from "../displayScript/photoDisplay";

export default function Gallery() {

    const {currentTxt} = useLanguage(); //currentTxt is all of the text in the active lang


    return(
        <div className= "gallery-page">
            <div className="gallery-header">
                <h1>{currentTxt.gallery.title}</h1>
                <Link to="/" className="back-link">{currentTxt.gallery.back}</Link>
            </div>

            <div className="gallery-grid">
                {/* .map() will turn the photo array into jsx elements */}
                {photos.map((photo) => (
                    <figure className="gallery-item" key={photo.src}>
                        <img src={photo.src} alt={photo.alt} loading="lazy" />
                    </figure>
                ))}
            </div>

        </div>
    );
}