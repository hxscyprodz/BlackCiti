import { Element } from "react-scroll";
import MainLayout from "../libs/MainLayout";
import Hero from "../components/hero";
import About from "../components/about";
import FAQCards from "../ui/cards/FAQCard";
import Header from "../libs/header";
import Footer from "../libs/footer";

export default function HomePage() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Element name="FAQS">
        <h1 className="pt-25 text-4xl text-center">Frequently asked questions</h1>
        <FAQCards />
      </Element>
      <Footer />
    </div>
  );
}
