
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
        imageSrc: "https://plus.unsplash.com/premium_photo-1663099358462-bcacf22f97c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
        imageSrc: "https://plus.unsplash.com/premium_photo-1664367173362-593de24d940e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dg",
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
        imageSrc: "https://plus.unsplash.com/premium_photo-1664367173362-593de24d940e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dg",
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
        imageSrc: "https://plus.unsplash.com/premium_photo-1664367173362-593de24d940e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dg",
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
    }
]
