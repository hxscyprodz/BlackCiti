import ServicesCards from "../ui/cards/ServiceCard";
export default function Services() {
    
    return (
      <div className="flex flex-col items-center justify-center bg-blue-50 pt-5">
        <div className="flex flex-col items-center gap-3">
          <h1 className="text-center text-5xl font-bold w-[60%]">
            Maximize Your Returns with Our Proven Investment Strategies
          </h1>
          <p className="text-[#999999]">
            Expert guidance for achieving your financial goals
          </p>
        </div>
        <ServicesCards />
      </div>
    );
}