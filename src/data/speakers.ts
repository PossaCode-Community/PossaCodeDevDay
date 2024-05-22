
import { Twitter, Instagram, Dribbble, Linkedin, type LucideIcon } from 'lucide-react'


export type SpeakerProps = {
    imageSrc: string;
    name: string;
    title: string;
    description: string;

    socialLinks: {
        icon :LucideIcon;
        href: string;
    }[]; 

};


export const speakersData = [
    {
        imageSrc: "/public/profile.png",
        name: "Zisnad Q. Alex",
        title: "Speaker",
        description: "Completely conceptual high quality nice markers rather than long term impact human capital.",
        socialLinks: [{
            icon: Twitter,
            href: "https://twitter.com/zisnad",
        },
        {
            icon: Linkedin,
            href: "https://twitter.com/zisnad",
        }] 
        // Ajoutez d'autres intervenants ici
    },
    {
        imageSrc: "/public/profile.png",
        name: "Zisnad Q. Alex",
        title: "Speaker",
        description: "Completely conceptual high quality nice markers rather than long term impact human capital.",
        socialLinks: [{
            icon: Twitter,
            href: "https://twitter.com/zisnad",
        },
        {
            icon: Linkedin,
            href: "https://twitter.com/zisnad",
        }] 
        // Ajoutez d'autres intervenants ici
    },
    {
        imageSrc: "https://aminurislam.com/labartisan/kagont/assets/images/speakers/02.png",
        name: "Zisnad Q. Alex",
        title: "Speaker",
        description: "Completely conceptual high quality nice markers rather than long term impact human capital.",
        socialLinks: [{
            icon: Twitter,
            href: "https://twitter.com/zisnad",
        },
        {
            icon: Linkedin,
            href: "https://twitter.com/zisnad",
        }] 
        // Ajoutez d'autres intervenants ici
    },
    {
        imageSrc: "/public/04.png",
        name: "Zisnad Q. Alex",
        title: "Speaker",
        description: "Completely conceptual high quality nice markers rather than long term impact human capital.",
        socialLinks: [{
            icon: Twitter,
            href: "https://twitter.com/zisnad",
        },
        {
            icon: Linkedin,
            href: "https://twitter.com/zisnad",
        }] 
        // Ajoutez d'autres intervenants ici
    },
        // Ajoutez d'autres intervenants ici
]
