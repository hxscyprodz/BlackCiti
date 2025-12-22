import Layout from "../libs/layout";
import Hero from "../components/hero";
import About from "../components/about";

export default function HomePage() {
  return (
    <Layout>
        <Hero />
        <About />
    </Layout>
  );
}
