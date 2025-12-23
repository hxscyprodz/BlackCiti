import { Element } from "react-scroll";
import MainLayout from "../libs/MainLayout";
import Hero from "../components/hero";
import About from "../components/about";
import FAQCards from "../ui/cards/FAQCard";

export default function HomePage() {
  return (
    <MainLayout>
      <Hero />
      <About />
      <Element name="FAQS">
        <h1 className="pt-25 text-4xl text-center">Frequently asked questions</h1>
        <FAQCards />
      </Element>
    </MainLayout>
  );
}
