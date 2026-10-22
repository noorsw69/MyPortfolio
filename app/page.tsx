import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import AboutSummary from "@/components/AboutSummary"; 
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-white min-h-screen w-full flex flex-col overflow-x-hidden">
      <Navbar /> 
      
    
      <div className="w-full relative">
        <Hero />
      </div>
      <div className="pt-24 clear-both block w-full bg-white">
  <Projects featuredOnly />
</div>

      <AboutSummary /> 
      <Skills />
      <Contact />
    </main>
  );
}