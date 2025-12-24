import ServicesCards from "../ui/cards/ServiceCard";
export default function Services() {
    
    return (
      <div className="flex flex-col items-center justify-center bg-blue-50 pt-5 px-5">
        <div className="flex flex-col items-center gap-3">
          <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold
             w-[95%] lg:w-[65%] sm:text-3xl">
            Maximize Your Returns with Our Proven Investment Strategies
          </h1>
          <p className="text-[#999999] text-center">
            Expert guidance for achieving your financial goals
          </p>
        </div>
        <ServicesCards />
      </div>
    );
}