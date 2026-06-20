import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function SkillsPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col justify-between">
      <Navbar />
      
      {/* Set to pt-16 to perfectly align beneath the non-fixed navbar */}
      <div className="pt-16 pb-24 flex-grow">
        <Skills />
      </div>
      
      <Contact />
    </main>
  );
}