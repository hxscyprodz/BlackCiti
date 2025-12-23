import { Element } from 'react-scroll'
import Teams from "./teams";
import Values from "./values";
import ServicesCards from '../ui/cards/ServiceCard';

export default function About () {
    return(
        <Element name='About' className="pt-15 px-20 flex flex-col gap-5">
            <Values />
            <div className="flex flex-col justify-center items-center gap-5 mt-20 bg-blue-100 p-5 rounded-2xl">
                <h1 className="text-4xl font-semibold text-gray-800">Our <span className="text-blue-800">Story</span></h1>
                <div className="flex flex-col gap-5 w-1/2 text-base text-gray-950">
                    <p>
                        At BlackCiti, our journey began with a simple yet powerful vision: to 
                        deliver exceptional investment outcomes for our clients. Founded by a team 
                        of passionate and experienced investment proffessionals, our firm has evolved 
                        over the years to become a trusted partner for individuals and instituitions 
                        seeking tailored investment solutions.
                    </p>
                    <p>
                        Our story is built on a foundation of integrity, innovation, and a relentless 
                        pursuit of excellence. We've navigated countless market cycles, economic shifts, 
                        and regulatory changes, always staying true to our core values and commitment to 
                        our clients.
                    </p>
                    
                </div>
            </div>
            <h1 className='text-4xl text-center mt-10'>We offer the following services:</h1>
            <ServicesCards />
            <Teams />
        </Element>
    )
}