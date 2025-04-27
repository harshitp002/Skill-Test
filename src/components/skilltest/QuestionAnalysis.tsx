"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useScore } from "@/context/ScoreContext";
import { PieChart, Pie, Cell } from "recharts";
import { FaBullseye } from "react-icons/fa";

const COLORS = ["#3B82F6", "#E5E7EB"];

export function QuestionAnalysis() {
  const [isClient, setIsClient] = useState(false);
  const { correct, total } = useScore();

  const data = [
    { name: "Correct", value: correct },
    { name: "Incorrect", value: total - correct },
  ];

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <Card className="p-6">
      <div className="flex flex-row justify-between">
        <h2 className="text-md font-bold">Comparison Graph</h2>
        <div className="text-blue-600 font-semibold mb-1">
          {correct}/{total}
        </div>
      </div>
      <CardContent className="p-0">
        <div className="text-sm text-gray-600">
            <span className="font-bold">You scored {correct} questions</span> correct out of {total}. However, it still needs some improvements.
        </div>

        {/* Piechart + Target */}
        <div className="flex justify-center items-center mt-4">
          {isClient && (
            <div className="relative w-40 h-40">
              <PieChart width={160} height={160}>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={70}
                  paddingAngle={1}
                  dataKey="value"
                  startAngle={90}
                  endAngle={-270}
                >
                  {data.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative flex items-center justify-center">
                  <FaBullseye className="text-5xl text-red-500" />
                </div>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}