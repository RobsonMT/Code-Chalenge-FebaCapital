import About from "@/components/About";
import Carrosel from "@/components/Carrosel";
import Footer from "@/components/Footer";
import Form from "@/components/Form";
import SectionFilter from "@/components/SectionFilter";

export default function Home() {
  return (
    <div>
      <Carrosel />
      <About />
      <Form />
      <SectionFilter />
      <Footer />
    </div>
  );
}
