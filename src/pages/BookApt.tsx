import {Link} from "react-router-dom";
import {useLanguage} from "../language/LanguageSetter";

export default function BookApt(){

    const {currentTxt} = useLanguage(); //current text in the active set language

    return(
    <div className="static-page">
        <h1>{currentTxt.book.title}</h1>
        <p>{currentTxt.book.body}</p>
        <Link to="/" className= "back-link"> {currentTxt.book.back} </Link>
    </div>
);
}