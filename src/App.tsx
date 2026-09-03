import {HashRouter, Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import BookApt from "./pages/BookApt";
import { LanguageProvider } from "./language/LanguageSetter";


export default function App(){
    return(
       <LanguageProvider>
        <HashRouter>
            <Header />
            <Routes>
                <Route path="/" element = {<Home />} />
                <Route path="/gallery" element= {<Gallery/>}/>
                <Route path="/appointment" element={<BookApt />}/>
                
            </Routes>
        </HashRouter>
       </LanguageProvider>
       
    );
}