// size={16} color="#ffffff" strokeWidth={1.5}
import { speakersData } from "../data/speakers";
type SpeakerProps = (typeof speakersData)[number];

export const Speakers = () => {
  return (
    <div className="container flex flex-col gap-7 lg:flex-row">
      <div className="flex flex-wrap justify-center ">
        {speakersData.map((speaker) => (
          <Speaker key={speaker.name + speaker.title} {...speaker} />
        ))}
      </div>
    </div>
  );
};

export const Speaker = ({
  imageSrc,
  name,
  description,
  title,
  socialLinks,
}: SpeakerProps) => {
  return (
    <div className="flex flex-col py-8 space-y-8 items-center  lg:w-1/2  md:flex-row md:space-x-12  group">
      <div className="relative flex flex-col items-center ">
        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-b from-[#a60792] to-transparent rounded-full w-60 h-60 md:w-72 md:h-72 z-0 opacity-75"></div>
        <div className="relative">
          <img
            src={imageSrc}
            alt={name}
            className="z-10 w-56 object-cov
                er grayscale group-hover:grayscale-0 transition-all duration-300 "
          />
        </div>
      </div>
      
      <div className=" flex flex-col gap-2 items-center justify-center md:w-1/2 md:items-start ">
        <span className="text-2xl font-serif font-bold text-white group-hover:text-blue-500 transition-all duration-300 ">
          {name}
        </span>
        <p className="text-lg text-gray-100 font-sans font-semibold">{title}</p>
        <p className="text-gray-100 text-center font-sans md:text-left ">{description}</p>
        <ul className="flex space-x-2 items-center">
          {socialLinks.map((socialLink) => (
            <li>
              <a
                href={socialLink.href}
                target="_blank"
                className="transition-colors  text-gray-100 hover:text-blue-500  duration-300"
              >
                {<socialLink.icon />}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
