import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Define the types for event items and events
interface Speaker {
  name: string;
  photo: string;
}

interface EventContent {
  title: string;
  speakers: Speaker[];
}

interface EventItem {
  imgSrc: string;
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
        imgSrc:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "DIGITAL CONFERENCE INTRODUCTION",
        content: {
          title: "Ubi est nobilis cobaltum? Domesticus capios ducunt ad demissio. Torquiss favere, tanquam bassus glos. Vae, hippotoxota! Superbus, mirabilis poetas vix aperto de teres, germanus amicitia. Vae. Fortis nixs ducunt ad acipenser. A falsis, musa nobilis gabalium. Cum decor ire, omnes fraticinidaes",
        
          speakers: [
            {
              name: "Jane Smith",
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
                "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
            {
              name: "Bob Brown",
              photo:
                "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
            {
              name: "Charlie Davis",
              photo:
                "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
            {
              name: "Fiona Harris",
              photo:
                "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
          ],

        },
      },
      {
        imgSrc:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "DIGITAL CONFERENCE INTRODUCTION",
        content: {
          title: "Ubi est nobilis cobaltum? Domesticus capios ducunt ad demissio. Torquiss favere, tanquam bassus glos. Vae, hippotoxota! Superbus, mirabilis poetas vix aperto de teres, germanus amicitia. Vae. Fortis nixs ducunt ad acipenser. A falsis, musa nobilis gabalium. Cum decor ire, omnes fraticinidaes",
        
          speakers: [
            {
              name: "Jane Smith",
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
                "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
            {
              name: "Bob Brown",
              photo:
                "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
            {
              name: "Charlie Davis",
              photo:
                "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
  },
  {
    date: "21 December 2021",
    hour: "8:00am - 9:00am",
    localisation: "Summer C",
    items: [
      {
        imgSrc:
          "/public/profile.png",
        title: "DIGITAL CONFERENCE INTRODUCTION",
        content: {
          title: "Ubi est nobilis cobaltum? Domesticus capios ducunt ad demissio. Torquiss favere, tanquam bassus glos. Vae, hippotoxota! Superbus, mirabilis poetas vix aperto de teres, germanus amicitia. Vae. Fortis nixs ducunt ad acipenser. A falsis, musa nobilis gabalium. Cum decor ire, omnes fraticinidaes",
        
          speakers: [
            {
              name: "Jane Smith",
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
                "/public/profile.png",
            },
            {
              name: "Bob Brown",
              photo:
                "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
            {
              name: "Charlie Davis",
              photo:
                "/public/profile.png",
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
  },
  // Add more events as needed
];
export function AccordionDemo() {
  return (
    <div className="container grid grid-cols-1 md:grid-rows-2 mx-auto gap-x-12 md:flex">
      {/* // Automatisation de l'accordion */}
      {events.map((event, eventIndex) => (
        <div className="w-full " key={eventIndex}>
          <div className="">
            <h1 className="font-bold text-2xl py-8 text-center">
              {event.date}
            </h1>
          </div>
          <Accordion type="single" collapsible className="">
            {event.items.map((item, itemIndex) => (
              <AccordionItem key={itemIndex} value={`item-${itemIndex}`}>
                {/* // image principal */}
                <AccordionTrigger>
                  <div className="flex flex-col gap-x-24 items-center md:flex-row">
                    <img
                      src={item.imgSrc}
                      alt="event"
                      className="size-28 rounded-full border-spacing-4 object-cover items-start"
                    />
                    <div className="flex flex-col items-start space-y-4">
                      <p className="text-red-700">{event.hour}</p>{" "}
                      {/* Utiliser event.hour pour automatiser */}
                      <h1 className="">{item.title}</h1>
                      <p className="text-gray-500">
                        by
                        <span className="text-yellow-600"> Jessica Brown</span> -
                        Co Founder
                      </p>
                    </div>
                  </div>
                </AccordionTrigger>

                {/*  // contenu de de l'evenement  */}
                <AccordionContent>
                  <div className="flex  flex-col flex-wrap items-center space-y-4 gap-x-24 md:pl-52">
                    <p className="text-gray-500">{item.content.title}</p>
                    <div className="flex -space-x-4 ">
                      {item.content.speakers.map((speaker, speakerIndex) => (
                        <div
                          key={speakerIndex}
                          className="relative group hover:z-20 transition-transform duration-300"
                        >
                          <img
                            src={speaker.photo}
                            alt={speaker.name}
                            className="size-14 rounded-full object-cover border-2 border-white group-hover:scale-150 transition-transform duration-300"
                          />                    
                        </div>
                      ))}
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
