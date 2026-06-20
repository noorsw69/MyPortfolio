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
      
      {/* 
        1. Full Screen Wrapper for Hero 
        This wrapper expands across the full width of the screen, completely occupying 
        100% of the viewport height (h-screen). This forms an unbreachable barrier 
        that forces the Projects component down.
      */}
      <div className="w-full h-screen block relative">
        <Hero />
      </div>

      {/* 
        2. Clean Section Divider & Top Padding for Projects 
        Adding pt-24 ensures that when the user scrolls down, the "Projects." heading 
        has beautiful, premium breathing room from the top of the browser window.
      */}
      <div id="projects" className="pt-24 clear-both block w-full bg-white">
        <Projects />
      </div>

      {/* Other sections follow naturally */}
      <AboutSummary /> 
      <Skills />
      <Contact />
    </main>
  );
}