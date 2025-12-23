

export default function ServicesCards() {
    const services = [
  {
    id: "S1",
    name: "Smart Investment Potfolios",
    title: "Expertly managed potfolios",
    description:
      "Our Retirement Planning service helps you create a comprehensive plan to achieve your retiremnet goals. We'll work with you to assess your current financial situation, identify potential retirementincome sources, and develop a strategy to help you achieve your desired retirement lifestyle",
  },
  {
    id: "S2",
    name: "Retirement Planning",
    title: "Stay ahead of market trends",
    description:
      "Our Retirement Planning service helps you create a comprehensive plan to achieve your retiremnet goals. We'll work with you to assess your current financial situation, identify potential retirementincome sources, and develop a strategy to help you achieve your desired retirement lifestyle",
  },
  {
    id: "S3",
    name: "Market Insights",
    title: "Plan for a secure retiremnent",
    description:
      "Our Retirement Planning service helps you create a comprehensive plan to achieve your retiremnet goals. We'll work with you to assess your current financial situation, identify potential retirementincome sources, and develop a strategy to help you achieve your desired retirement lifestyle",
  },
  {
    id: "S4",
    name: "Wealth Management",
    title: "Comprehensive wealth solutions",
    description:
      "Our Retirement Planning service helps you create a comprehensive plan to achieve your retiremnet goals. We'll work with you to assess your current financial situation, identify potential retirementincome sources, and develop a strategy to help you achieve your desired retirement lifestyle",
  },
  {
    id: "S5",
    name: "Risk Management",
    title: "Protect your assets",
    description:
      "Our Retirement Planning service helps you create a comprehensive plan to achieve your retiremnet goals. We'll work with you to assess your current financial situation, identify potential retirementincome sources, and develop a strategy to help you achieve your desired retirement lifestyle Our Retirement Planning service helps you create a comprehensive plan to achieve your retiremnet goals. We'll work with you to assess your current financial situation, identify potential retirementincome sources, and develop a strategy to help you achieve your desired retirement lifestyle",
  },
  {
    id: "S6",
    name: "Financial Planning",
    title: "Achienve financial freedom",
    description:
      "Our Retirement Planning service helps you create a comprehensive plan to achieve your retiremnet goals. We'll work with you to assess your current financial situation, identify potential retirementincome sources, and develop a strategy to help you achieve your desired retirement lifestyle",
  },
];

    const cards = services.map( card => {
        return (
          <div key={card.id}
            className="border border-blue-200 rounded-md w-120 flex flex-col 
            gap-3 p-5 h-120 hover:scale-105 transition-all duration-1000 cursor-pointer
            hover:shadow-blue-800 hover:shadow-2xl">
            <div className="bg-gradient-to-r from-blue-400 to-blue-900 w-full h-60
                rounded-sm"></div>
            <div>
              <h3 className="text-2xl overflow-ellipsis whitespace-nowrap truncate">
                {card.name}
              </h3>
              <p>{card.title}</p>
            </div>
            <p className="text-sm text-[#999999] line-clamp-5">
              {card.description}
            </p>
          </div>
        );
    })
    return (
      <div className="grid grid-cols-3 gap-10 items-center justify-center my-10">
        {cards}
      </div>
    );
}