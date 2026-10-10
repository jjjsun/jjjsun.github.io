import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import FAQ from "@/components/FAQ/FAQ";
import Hero from "@/components/Hero/Hero";
import Projects from "@/components/Projects/Projects";
import Timeline from "@/components/Timeline/Timeline";

export default function Page() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Timeline />
      <FAQ />
      <Contact />
    </>
  );
}
