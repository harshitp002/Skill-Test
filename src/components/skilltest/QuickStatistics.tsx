"use client";

import { useScore } from "@/context/ScoreContext";
import { Card, CardContent } from "@/components/ui/card";
import { BsTrophyFill } from "react-icons/bs";
import { FaClipboardList } from "react-icons/fa";
import { MdAssignmentTurnedIn } from "react-icons/md";

export function QuickStatistics() {
    const { rank, percentile, correct, total } = useScore();

    const statItems = [
        {
            icon: <BsTrophyFill className="text-yellow-500 text-xl" />,
            value: rank,
            label: "YOUR RANK"
        },
        {
            icon: <FaClipboardList className="text-gray-400 text-xl" />,
            value: `${percentile}%`,
            label: "PERCENTILE"
        },
        {
            icon: <MdAssignmentTurnedIn className="text-green-500 text-xl" />,
            value: `${correct} / ${total}`,
            label: "CORRECT ANSWERS"
        }
    ];

    return (
        <Card className="p-5 max-w-4xl mx-auto">
            <h2 className="text-md font-bold">Quick Statistics</h2>
            <CardContent className="p-0">
                <div className="flex flex-col sm:flex-row space-y-2 ">
                    {statItems.map((item, index) => (
                        <div 
                            key={index}
                            className={`
                                flex items-center sm:flex-1 
                                ${index === 0 ? 'sm:pr-4 sm:border-r sm:border-gray-200 ' : ''}
                                ${index === 1 ? 'sm:px-4 sm:border-r sm:border-gray-200' : ''}
                                ${index === 2 ? 'sm:pl-4' : ''}
                            `}
                        >
                            <div className="bg-gray-100 p-3 rounded-full mr-4">
                                {item.icon}
                            </div>
                            <div className="flex flex-col">
                                <div className="text-lg font-bold">{item.value}</div>
                                <p className="text-sm text-gray-500">
                                    {item.label}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
