import { Element } from 'react-scroll';
import Button from '../ui/button'
import ButtonHover from '../ui/button-hover';
import Stats from './statistics';
import ScrollDown from '../ui/scroll-down';

export default function Hero () {
    return (
      <Element name='Home'
        className="flex flex-col h-screen px-5 lg:px-20 gap-10 bg-[url('/hero-background-1.jpg')] 
      justify-center bg-cover bg-no-repeat"
      >
        <div>
          <h1 className="roboto-flex-heading text-4xl sm:text-4xl lg:text-7xl font-semibold 
            text-gray-200 max-w-4xl sm:text-center text-center lg:text-left">
            Grow Your Wealth with Confidence.
          </h1>
          <p className="text-lg font-stretch-50% text-gray-200 drop-shadow-md italic
            sm:text-center lg:text-left text-center">
            Expert Investment Solutions for a Brighter Future
          </p>
        </div>
        <section className="text-gray-200 flex items-center sm:justify-center lg:justify-start">
          <p className="drop-shadow-md sm:w-[70%] lg:w-[45%] sm:text-center lg:text-left text-center">
            Welcome to BlackCiti, your trusted partner for investment
            solutions. Our experienced team provides personalised service,
            expert guidance, and tailored investment strategies to help your
            financial goals. With years of experience and a deep understanding
            of the markets, we're dedicated to delivering exceptional results
            and helping you secure your financial future.
          </p>
        </section>
        <div className="flex flex-col md:flex-row space-x-5 space-y-5 justify-center lg:justify-start">
          <Button text="Get started today" />
          <ButtonHover text="Send a message" />
        </div>
        <Stats />
        <ScrollDown />
      </Element>
    );
}