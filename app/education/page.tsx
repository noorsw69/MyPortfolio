import Navbar from "@/components/Navbar";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

export default function EducationPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col justify-between">
      <Navbar />
      <div className="pt-36 pb-24 px-6 sm:px-16 max-w-7xl mx-auto w-full flex-grow">
        <div className="max-w-4xl w-full">
          <Education />
        </div>
      </div>
      <Contact />
    </main>
  );
}
