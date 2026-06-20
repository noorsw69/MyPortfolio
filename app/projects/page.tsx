import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function ProjectsPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col justify-between">
      <Navbar />
      {/* Changed pt-32 to pt-16 to clear the empty space gap */}
      <div className="pt-16 pb-24 flex-grow">
        <Projects />
      </div>
      <Contact />
    </main>
  );
}