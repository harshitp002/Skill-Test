import { SkillTestCard } from "@/components/skilltest/SkillTestCard";
import { QuickStatistics } from "@/components/skilltest/QuickStatistics";
import { ComparisonGraph } from "@/components/skilltest/ComparisonGraph";
import { SyllabusAnalysis } from "@/components/skilltest/SyllabusAnalysis";
import { QuestionAnalysis } from "@/components/skilltest/QuestionAnalysis";
import { Header } from "@/components/Header";
import Sidebar from "@/components/Sidebar";

export default function SkillTestPage() {
  return (
    <div>
      <Header />
      <div className="flex flex-col lg:flex-row min-h-screen bg-white">
        {/* Sidebar */}
        <div className="hidden lg:block">
          <Sidebar />
        </div>

        {/* Main Content */}
        <main className="flex-1 px-3 sm:px-4 md:px-6 lg:pl-8 lg:pr-6 pt-4 sm:pt-6 md:pt-8 lg:pt-12">
          {/* Page Title */}
          <div className="text-gray-400 ml-2 text-xl mt-2 mb-4 md:mb-5 lg:mb-6 sm:mt-0">Skill Test</div>
          
          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-5 lg:gap-6 mt-3 sm:mt-4 md:mt-5">
            {/* Left Column */}
            <div className="space-y-4 md:space-y-5 lg:space-y-6 md:col-span-2 lg:col-span-3 mb-4 sm:mb-5 lg:mb-6">
              <SkillTestCard />
              <QuickStatistics />
              <ComparisonGraph />
            </div>
            
            {/* Right Column */}
            <div className="space-y-4 md:space-y-5 lg:space-y-6 md:col-span-1 lg:col-span-2">
              <SyllabusAnalysis />
              <QuestionAnalysis />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}