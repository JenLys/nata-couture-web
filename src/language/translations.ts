/* contains all text, LanguageSetters imports this file
and uses the proper data when the toggle's picked language is selected/active */

export type Lang = "en" | "fr";

export interface Translations {
    nav: {
        gallery: string;
        book: string;
    };
    hero:{
        name: string;
        shortdesc: string;
    };
    description:{
        eyebrow: string,
        body: string;
    };
    gallery: {
        title: string;
        back: string;
    };
    book: {
        title: string;
        body: string;
        back: string;
    };
}

const en: Translations = {
    nav: {
        gallery: "View Gallery Portfolio",
        book: "Book an Appointment",
    },
    description:{
        eyebrow: "Hi, I'm Natalia!",
        body: "I am a professional seamstress in Laval. Experience in XYZ",
    },
    hero:{
        name: "Nata Couture",
        shortdesc: "Alteration and Tailoring Services by a Professional Seamstress with 20+ years in the industry",
    },
    gallery:{
        title: "Portfolio Overview",
        back: "← Back",
    },
    book:{
        title: "Book an Appointment",
        body: "To book an appointment with me please call me 514-561-4267",
        back: "← Back",
    },
};

const fr: Translations = {
    nav: {
        gallery: "Voir la galerie photo",
        book: "Prendre un rendez-vous",
    },
    description:{
        eyebrow: "Bonjour je m'appelle Natalia!",
        body: "Je suis une couturière professionnelle avec plus de 20 ans d'expérience dans la confection de vêtements. Je me situes à Laval XYZ... ",
    },
    hero:{
        name: "Nata Couture",
        shortdesc: "Services d'alterations de vêtements divers par une couturière expérimentée",
    },
    gallery:{
        title: "Mini Portfolio",
        back: "← Retour",
    },
    book:{
        title: "Prendre un rendez-vous",
        body: "Pour prendre un rendez-vous s'il-vous-plaît veuillez m'appeler au 514-561-4267",
        back: "← Retour",
    },
};


export const translations: Record<Lang, Translations> = {en, fr};