import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";

import {AnimatedTooltipPreview} from "@/components/exemple"

// Define the types for event items and events
interface Speaker {
  id:number;
  name: string;
  photo: string;
  designation:string;
}

interface EventContent {
  title: string;
  speakers: Speaker[];
}

interface EventItem {
  //imgSrc: string;
  title: string;
  content: EventContent;
}

interface Event {
  date: string;
  hour: string;
  localisation: string;
  items: EventItem[];
}

// Sample data
const events: Event[] = [
  {
    date: "21 December 2021",
    hour: "8:00am - 9:00am",
    localisation: "Summer C",
    items: [
      {
        title: "DIGITAL CONFERENCE INTRODUCTION",
        content: {
          title:
            "Ubi est nobilis cobaltum? Domesticus capios ducunt ad demissio. Torquiss favere, tanquam bassus glos. Vae, hippotoxota! Superbus, mirabilis poetas vix aperto de teres, germanus amicitia. Vae. Fortis nixs ducunt ad acipenser. A falsis, musa nobilis gabalium. Cum decor ire, omnes fraticinidaes",

          speakers: [
            {
              id: 1,
              name: "Jane Smith",
              designation: "Software Engineer",
              photo:
                "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHN0YXR1c3xlbnwwfHwwfHx8MA%3D%3D",
            },

            {
              id: 2,
              name: "Jane Smith",
              designation: "Software Engineer",
              photo:
                "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHN0YXR1c3xlbnwwfHwwfHx8MA%3D%3D",
            },
            {
              id: 3,
              name: "Jane Smith",
              designation: "Software Engineer",
              photo:
                "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
            {
              id: 4,
              name: "Jane Smith",
              designation: "Software Engineer",
              photo:
                "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
            {
              id: 5,
              name: "Jane Smith",
              designation: "Software Engineer",
              photo:
                "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
            {
              id: 6,
              name: "Jane Smith",
              designation: "Software Engineer",
              photo:
                "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
            {
              id: 7,
              name: "Jane Smith",
              designation: "Software Engineer",
              photo:
                "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
          ],
        },
        
      },
      // Add more items as needed
    ],
  },

  /* {
    date: "21 December 2021",
    hour: "8:00am - 9:00am",
    localisation: "Summer C",
    items: [
      {
        imgSrc:
          "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "DIGITAL CONFERENCE INTRODUCTION",
        content: {
          title:
            "Ubi est nobilis cobaltum? Domesticus capios ducunt ad demissio. Torquiss favere, tanquam bassus glos. Vae, hippotoxota! Superbus, mirabilis poetas vix aperto de teres, germanus amicitia. Vae. Fortis nixs ducunt ad acipenser. A falsis, musa nobilis gabalium. Cum decor ire, omnes fraticinidaes",

          speakers: [
            {
              id: 1,
              name: "Jane Smith",
              designation: "Software Engineer",
              photo:
                "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHN0YXR1c3xlbnwwfHwwfHx8MA%3D%3D",
            },

            {
              name: "Jane Doe",
              photo:
                "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHN0YXR1c3xlbnwwfHwwfHx8MA%3D%3D",
            },
            {
              name: "Jean Doe",
              photo:
                "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
            {
              name: "Alice Johnson",
              photo:
                "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
            {
              name: "Bob Brown",
              photo:
                "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
            {
              name: "Charlie Davis",
              photo: "/profile.png",
            },
            {
              name: "Fiona Harris",
              photo:
                "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
          ],
        },
      },
      // Add more items as needed
    ],
  }, */

  // Add more events as needed
];


export function AccordionDemo() {
  const [focusedItem, setFocusedItem] = useState<{
    eventIndex: number;
    itemIndex: number;
  } | null>(null);

  const handleClick = (eventIndex: number, itemIndex: number) => {
    {
      if (
        focusedItem &&
        focusedItem.eventIndex === eventIndex &&
        focusedItem.itemIndex === itemIndex
      ) {
        setFocusedItem(null); // Si déjà cliqué, annuler le focus
      } else {
        setFocusedItem({ eventIndex, itemIndex }); // Sinon, mettre à jour le focus
      }
    }
  };

  return (
    <div className="container grid grid-cols-1 gap-10 lg:grid-cols-2">
      {/* // Automatisation de l'accordion */}
      {events.map((event, eventIndex) => (
        <div className="w-full border-black" key={eventIndex}>
          <div className="">
            <h1 className="font-bold text-3xl py-8 text-center">
              {event.date}
            </h1>
          </div>

          <Accordion type="single" collapsible className="">
            {event.items.map((item, itemIndex) => (
              <AccordionItem key={itemIndex} value={`item-${itemIndex}`}>
                <AccordionTrigger className="">
                  <div className="flex flex-col gap-12 items-center  md:flex-row ">
                    
                    <div
                      className={`flex flex-col items-start space-y-2 text-left  py-8 px-10  ${focusedItem && focusedItem.eventIndex === eventIndex && focusedItem.itemIndex === itemIndex ? "bg-slate-100" : ""}`}
                      onClick={() => handleClick(eventIndex, itemIndex)}
                    >
                      <p className="text-red-700 tracking-widest uppercase text-base font-serif font-semibold">
                        {event.hour}
                      </p>{" "}
                      {/* Utiliser event.hour pour automatiser */}
                      <h1 className="text-xl font-bold font-serif">
                        {item.title}
                      </h1>
                    </div>
                  </div>
                </AccordionTrigger>

                {/*  // contenu de de l'evenement  */}
                <AccordionContent>
                  <div className="flex flex-col space-y-4 md:pl-10">
                    <div>
                      <p className="text-gray-500 mb-4">{item.content.title}</p>
                    </div>
                    <div className="flex flex-wrap">
                      <AnimatedTooltipPreview />
                    </div>
                  </div>
                </AccordionContent>

              </AccordionItem>
            ))}
          </Accordion>
        </div>
      ))}

     
    </div>
  );
}
