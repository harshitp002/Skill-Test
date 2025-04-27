import { Header } from "@/components/Header";
import Sidebar from "@/components/Sidebar";

export default function InternshipPage() {
  return (
    <div>
      <Header />
      <div className="flex flex-col sm:flex-row min-h-screen bg-white">
        {/* Sidebar */}
        <div className="hidden md:block">
          <Sidebar />
        </div>

        {/* Main Content */}
        <main className="flex-1 px-6 pt-12">
          <h1 className="text-2xl font-bold mb-4 text-gray-700">Internship</h1>
          <p className="text-gray-500">Explore available internships and opportunities.</p>
        </main>
      </div>
    </div>
  );
}


