

// size={16} color="#ffffff" strokeWidth={1.5} 
import {speakersData} from '../data/speakers'
type SpeakerProps = typeof speakersData[number]

export const Speakers = () => {

    return (
        <div className="flex flex-wrap justify-center ">
            {speakersData.map((speaker) => (
                <Speaker
                    key={speaker.name + speaker.title}
                    {...speaker}
                />
            ))}
        </div>
    );
};


export const Speaker = ({imageSrc,name,description,title,socialLinks } : SpeakerProps ) => {
    return (
        <div className="flex flex-col py-8 space-y-8 items-center justify-center md:flex-row md:w-1/2 md:space-x-12 group">
            <div className="relative flex flex-col items-center ">

                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-darkBlue rounded-full w-60 h-60 md:w-72 md:h-72 z-0 opacity-75"></div>
                <img src={imageSrc} alt={name}   className="z-10 w-56 h-80 object-cover grayscale group-hover:grayscale-0 transition-all duration-300 " />
            </div>
            <div className="flex flex-col gap-2 items-center justify-center md:w-1/2 md:items-start ">
                <span className="font-bold text-lg group-hover:text-blue-500 transition-all duration-300 ">{name}</span>
                <p>{title}</p>
                <p className="text-center md:text-left">{description}</p>
                <ul className='flex space-x-2 items-center'>
                    {socialLinks.map((socialLink) =>(
                        <li><a href={socialLink.href} target='_blank' className='transition-colors  text-gray-500 hover:text-blue-500  duration-300'>{<socialLink.icon/>}</a></li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
