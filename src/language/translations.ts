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
        scrollhint: string;
    };
    description:{
        eyebrow: string,
        body: string;
    };
    gallery: {
        title: string;
        subtext: string;
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
        body: "I’m a professional senior seamstress based in Laval, with over 20 years of experience in garment alterations and tailoring.I offer alteration and fitting services for everyone 👖👗🥼👕. Whether you need pants, dresses, or sleeves hemmed, or a garment adjusted for a better fit, I’m here to help! And sometimes, I get to use my magic! ✨ \n\n  From transforming oversized garments to making a smaller dress fit, I use my experience and creativity to find the best solution for each unique piece. Each garment is different, so pricing is based on the time, skill, care, materials, and complexity required. For this reason, quotes are provided individually, per item. \n\nTo receive a quote, please book an appointment or reach out to me directly. I’ll be happy to assess your garment and discuss your needs 😊. I strive to provide every client with courteous, honest, and professional service. Feel free to contact me or explore my portfolio highlights to see some of my past work! \n\n I look forward to putting my experience, creativity, and skills to work for you! 💜🪡",
    },
    hero:{
        name: "Nata Couture",
        shortdesc: "Alteration and Tailoring Services by a Professional Seamstress with 20+ years in the industry",
        scrollhint: "Scroll",
    },
    gallery:{
        title: "Portfolio Overview",
        subtext: "All photos have been obtained with client's consent. Do not replicate- property of Nata Couture",
        back: "← Back",
    },
    book:{
        title: "Book an Appointment",
        body: "I work during the week and maintain a busy schedule, which is why I offer my services by appointment only. To book an appointment or inquire about pricing, please call me at \n 514-561-4267.\n I’ll be happy to answer your questions and discuss your needs!",
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
        body: "Je suis une couturière professionnelle basée à Laval, avec plus de 20 ans d’expérience en retouches et en confection. J’offre des services de retouches et d’ajustements pour tout le monde 👖👗🥼👕. Que ce soit pour raccourcir un pantalon, une robe ou des manches, ou encore pour ajuster un vêtement afin qu’il vous aille parfaitement, je suis là pour vous aider. Et parfois, j’ai l’occasion d’utiliser un peu de ma magie! ✨ \n\nQu’il s’agisse de transformer un vêtement trop grand ou de faire en sorte qu’une robe trop petite puisse vous aller, je mets mon expérience et ma créativité à profit pour trouver la meilleure solution pour chaque pièce unique. Chaque vêtement est différent. Le prix est donc établi en fonction du temps, de l’expertise, du soin, des matériaux et de la complexité du travail requis. Pour cette raison, les soumissions sont faites individuellement, par article. \n\nPour obtenir une soumission, veuillez prendre rendez-vous ou communiquer directement avec moi. Je serai heureuse d’évaluer votre vêtement et de discuter de vos besoins 😊. Je m’efforce d’offrir à chaque client un service courtois, honnête et professionnel. N’hésitez pas à me contacter ou à consulter les réalisations présentées dans mon portfolio pour découvrir quelques-uns de mes travaux! \n\nAu plaisir de mettre mon expérience, ma créativité et mon savoir-faire à votre service! 💜🪡",
    },
    hero:{
        name: "Nata Couture",
        shortdesc: "Services d'alterations de vêtements divers par une couturière expérimentée",
        scrollhint: "Défiler",
    },
    gallery:{
        title: "Mini Portfolio",
        subtext:"Toutes les photos ont été publiées avec l’autorisation des clients. Toute reproduction est interdite— propriété de NataCouture.",
        back: "← Retour",
    },
    book:{
        title: "Prendre un rendez-vous",
        body: "Je travaille durant la semaine et mon horaire est bien rempli. C’est pourquoi j’offre mes services sur rendez-vous seulement. Pour prendre rendez-vous ou obtenir des renseignements sur les prix, veuillez m’appeler au \n 514-561-4267. \n Je serai heureuse de répondre à vos questions et de discuter de vos besoins!",
        back: "← Retour",
    },
};


export const translations: Record<Lang, Translations> = {en, fr};