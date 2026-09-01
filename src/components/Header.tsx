import {Link} from "react-router-dom";
import {useEffect} from "react";
import {useRef} from "react";
import BookApt from "../pages/BookApt";

export default function Header() {

    return(
        <header>

            <nav className="site-header" aria-label="Primary">
            <Link to="/gallery"> Gallery </Link>
            <Link to="/appointment"> Book Appointment</Link>
            </nav>

        </header>

    );
}