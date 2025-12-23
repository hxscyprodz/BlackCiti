import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
export default function FAQCards() {
  const faqs = [
    {
      id: "F1",
      question: "What types of investment services do you offer?",
      answer:
        "We offer a range of investment services, including investment management, financial planning, retirement planning, and estate planning. Our goal is help you achieve your financial objectives.",
    },
    {
      id: "F2",
      question: "What are your fees, and how are they structured?",
      answer:
        "Our fees are competitive and transparent, We'll charge a management fee based on the assets under management, and we'll provide you eith a clear fee schedule before you invest.",
    },
    {
      id: "F3",
      question: "How do you manage risk and protect my investments?",
      answer:
        "We manage risk through diversification, thorough research, and regular portfolio monitoring. We'll alsu use various strategies to help protect your investments from market volatility.",
    },
    {
      id: "F4",
      question: "What types of investment services do you offer?",
      answer:
        "We offer a range of investment services, including investment management, financial planning, retirement planning, and estate planning. Our goal is help you achieve your financial objectives.",
    },
    {
      id: "F5",
      question:
        "How can l access my accunt infromation and communicate with my investment advisor?",
      answer:
        "You can access your account information online or though our mobile app. You can also contact your investment advisor directly by phone or email, and we'll provide you with regular account statemnts.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const cards = faqs.map((faq) => {
    return (
      <div
        className="w-3/4 flex flex-col items-center p-3 transform hover:-translate-y-2 
            transition-all duration-700 gap-2 cursor-pointer"
            onClick={() => toggleFAQ(faq.id)}
      >
        <div
          className="flex items-center justify-around w-full bg-blue-200 
            h-18 rounded-md"
        >
          <p className="text-2xl text-blue-600 w-3/4">{faq.question}</p>
          <button className="cursor-pointer" onClick={() => toggleFAQ(faq.id)}>
            {openIndex === faq.id ? (
              <ChevronUp color="#155dfc" className="h-6 w-6 text-primary" />
            ) : (
              <ChevronDown color="#155dfc" className="h-6 w-6 text-primary" />
            )}
          </button>
        </div>
        <div
          className={`bg-blue-50 p-5 items-center justify-center ${
            openIndex === faq.id ? "flex" : "hidden"
          }`}
        >
          <p className="w-3/4 text-center">{faq.answer}</p>
        </div>
      </div>
    );
  });

  return (
    <div className="px-20 py-10 w-full flex flex-col items-center">
      {cards}
    </div>
  );
}
