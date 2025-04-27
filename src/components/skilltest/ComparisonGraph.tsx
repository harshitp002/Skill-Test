"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  TooltipProps,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";
import { PiChartLineUpLight } from "react-icons/pi"; 
// import { cn } from "@/lib/utils"; 

const data = [
  { percentile: 0, count: 1 },
  { percentile: 10, count: 2 },
  { percentile: 20, count: 5 },
  { percentile: 30, count: 8 },
  { percentile: 40, count: 12 },
  { percentile: 50, count: 18 },
  { percentile: 60, count: 10 },
  { percentile: 70, count: 6 },
  { percentile: 80, count: 3 },
  { percentile: 90, count: 4 },
  { percentile: 100, count: 2 },
];

const CustomTooltip = ({ active, payload }: TooltipProps<number, string>) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 rounded-md shadow-md border text-xs text-gray-700">
        <div className="text-base font-bold">{payload[0].payload.percentile}</div>
        <div className="text-purple-600">
          numberOfStudent : <span className="text-gray-800">{payload[0].payload.count}</span>
        </div>
      </div>
    );
  }

  return null;
};

export function ComparisonGraph() {
  const userPercentile = 30;

  return (
    <Card className="relative p-6">
      {/* Top Right Icon */}
      <div className="absolute top-4 right-4 bg-gray-100 border p-2 rounded-full">
        <PiChartLineUpLight className="text-red-400 text-2xl" />
      </div>

      <h2 className="text-md font-bold mb-2">Comparison Graph</h2>

      <CardContent className="p-0">
      <div className="text-sm mb-6 text-gray-600 leading-relaxed sm:flex sm:flex-wrap sm:gap-1">
  <span className="font-bold block sm:inline">You scored 30% percentile</span> 
  which is lower than the
  <span className="block sm:inline">average percentile 72% of all the engineers who took this assessment</span>
</div>



        {/* Line Chart */}
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <XAxis
                dataKey="percentile"
                domain={[0, 100]}
                type="number"
                tick={{ fontSize: 12 }}
              />
              <YAxis hide />
              <Tooltip content={<CustomTooltip />} />
              <ReferenceLine
                x={userPercentile}
                stroke="#aaa"
                strokeDasharray="3 3"
                label={{
                  position: "insideBottom",
                  value: "your percentile",
                  fontSize: 12,
                  fill: "#aaa",
                }}
              />
              <Line
                type="monotone"
                dataKey="count"
                stroke="#a78bfa"
                strokeWidth={2}
                dot={{ r: 4, stroke: "#a78bfa", strokeWidth: 2 }}
                activeDot={{ r: 6, fill: "#7c3aed" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}

