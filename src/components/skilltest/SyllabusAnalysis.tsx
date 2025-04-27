"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";

export function SyllabusAnalysis() {
  const syllabus = [
    { label: "HTML Tools, Forms, History", progress: 80, color: "bg-blue-500" },
    { label: "Tags & References in HTML", progress: 60, color: "bg-orange-400" },
    { label: "Tables & References in HTML", progress: 24, color: "bg-red-400" },
    { label: "Tables & CSS Basics", progress: 96, color: "bg-green-500" },
  ];

  return (
    <Card className="py-6">
      <CardContent className="space-y-6 mb-6">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-md font-semibold">Syllabus Wise Analysis</h2>
        </div>
        {syllabus.map((item, idx) => (
          <ProgressBar key={idx} item={item} />
        ))}
      </CardContent>
    </Card>
  );
}

function ProgressBar({ item }: { item: typeof syllabus[number] }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Trigger animation after component mounts
    setProgress(item.progress);
  }, [item.progress]);

  return (
    <div className="space-y-2">
  <span className="text-sm text-gray-700">{item.label}</span>
  <div className="flex items-center justify-between gap-4">
    <div className="flex-1 h-2.5 bg-gray-100 rounded-full overflow-hidden">
      <div
        className={`${item.color} h-2.5 rounded-full transition-all duration-1000 ease-out`}
        style={{ width: `${progress}%` }}
      />
    </div>
    <span className="text-sm font-semibold text-gray-900 w-12 text-right">
      {progress}%
    </span>
  </div>
</div>
  );
}