import {Link} from "react-router-dom";
import {useLanguage} from "../language/LanguageSetter";
import {photos} from "../displayScript/photoDisplay";
import {useState, useEffect} from "react";

export default function Gallery() {

    const {currentTxt} = useLanguage(); //currentTxt is all of the text in the active lang

    //When user selects photo, it enlarges on the whole screen. Keep track of selected photos
    const [selectedPhoto, setSelectedPhoto] = useState<typeof photos[number] | null>(null);
    //null = viewer closed. storing the whole photo obj instead of index to prevent looking back

    //clicking X or escape closes the enlarged photo view
    useEffect(() => {
        function handleKeyDown(e: KeyboardEvent){
            if(e.key === "Escape") setSelectedPhoto(null);
        }
        window.addEventListener("keydown", handleKeyDown);
        return()=> window.removeEventListener("keydown", handleKeyDown);
    }, []);

    //When a photo is enlarged, the user can't scroll through the protfolio anymore. It gets a dark shadow overlay
    useEffect(()=>{
        document.body.style.overflow = selectedPhoto ? "hidden" : "";
    return ()=>{document.body.style.overflow = "";};
    }, [selectedPhoto]);





    return(
        <div className= "gallery-page">
            <div className="gallery-header">
                <Link to="/" className="back-link">{currentTxt.gallery.back}</Link>
                <h1>{currentTxt.gallery.title}</h1>
                <p>{currentTxt.gallery.subtext}</p>
            </div>
        

            <div className="gallery-grid">
                {/* .map() will turn the photo array into jsx elements */}
                {photos.map((photo) => (
                    <figure className="gallery-item" key={photo.src} onClick={()=> setSelectedPhoto(photo)} role="button" tabIndex={0} onKeyDown={(e)=>{if (e.key ==="Enter") setSelectedPhoto(photo); }}>
                        <img src={photo.src} alt={photo.alt} loading="lazy" />
                    </figure>
                ))}
            </div>

            {/* Enlarged image view--- exists only in DOM when photo is selected for viewing*/}
            {selectedPhoto && (
                <div className="lightbox" onClick={()=> setSelectedPhoto(null)}>

                    <button className="lightbox__close" aria-label="Close" onClick={()=> setSelectedPhoto(null)}>
                        &times;
                    </button>

                    <img
                    className="lightbox__image"
                    src={selectedPhoto.src}
                    alt={selectedPhoto.alt}
                    onClick={(e) => e.stopPropagation()}
                />

                </div>
                
            )}

        </div>
    );
}