"use client";

import { useState } from "react";
import { useScore } from "@/context/ScoreContext";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { DialogTitle } from "@radix-ui/react-dialog";
import Image from "next/image";

export function UpdateScoreModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { updateScores } = useScore();
  const [rank, setRank] = useState(1);
  const [percentile, setPercentile] = useState(30);
  const [correct, setCorrect] = useState(10);

  const [errors, setErrors] = useState({
    rank: "",
    percentile: "",
    correct: "",
  });

  const validateFields = () => {
    const newErrors = {
      rank: rank < 1 || rank > 15 ? "Rank should be between 1 and 15." : "",
      percentile: percentile < 0 || percentile > 100 ? "Percentile should be between 0 and 100." : "",
      correct: correct < 1 || correct > 15 ? "Correct score should be between 1 and 15." : "",
    };
    setErrors(newErrors);
    return !newErrors.rank && !newErrors.percentile && !newErrors.correct;
  };

  const handleSave = () => {
    if (validateFields()) {
      updateScores(rank, percentile, correct);
      onClose();
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="w-[90%] sm:max-w-md rounded-lg p-4 " >
        <DialogHeader className="flex flex-row items-center justify-between">
          <DialogTitle className="text-xl font-bold">Update scores</DialogTitle>
          <Image src="/images/HTML5_logo.png" alt="HTML5" width={30} height={30} /> {/* Update path if needed */}
        </DialogHeader>

        <div className="space-y-6 mt-4">
          {/* Rank */}
          <div className="flex items-start gap-4">
            <div className="bg-blue-700 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mt-1">
              1
            </div>
            <div className="w-full flex flex-row justify-between items-center">
              <label className="block mb-1 text-sm">
                Update your <span className="font-bold">Rank</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={rank === null ? "" : rank}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (value === "") {
                      setRank(null); // empty
                      setErrors(prev => ({ ...prev, rank: "Rank is required." }));
                    } else {
                      const num = Number(value);
                      if (num >= 1 && num <= 15) {
                        setRank(num);
                        setErrors(prev => ({ ...prev, rank: "" }));
                      } else {
                        setRank(num);
                        setErrors(prev => ({ ...prev, rank: "Rank should be between 1 and 15." }));
                      }
                    }
                  }}
                  placeholder="Rank"
                  className={`border rounded w-28 min-w-0 p-2 h-10 focus:outline-none focus:w-36 ${errors.rank ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-blue-500"
                    }`}
                />
                {/* Error message */}
                {errors.rank && (
                  <p className="absolute text-red-500 text-xs mt-1">{errors.rank}</p>
                )}
              </div>
            </div>
          </div>


          {/* Percentile */}
          <div className="flex items-start gap-4">
            <div className="bg-blue-700 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mt-1">
              2
            </div>
            <div className="w-full flex flex-row justify-between items-center">
              <label className="block mb-1 text-sm">
                Update your <span className="font-bold">Percentile</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={percentile === null ? "" : percentile}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (value === "") {
                      setPercentile(null);
                      setErrors(prev => ({ ...prev, percentile: "Percentile is required." }));
                    } else {
                      const num = Number(value);
                      if (num >= 0 && num <= 100) {
                        setPercentile(num);
                        setErrors(prev => ({ ...prev, percentile: "" }));
                      } else {
                        setPercentile(num);
                        setErrors(prev => ({ ...prev, percentile: "Percentile should be between 0 and 100." }));
                      }
                    }
                  }}
                  placeholder="Percentile"
                  className={`border rounded w-28 min-w-0 p-2 h-10 focus:outline-none focus:w-36 ${errors.percentile ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-blue-500"
                    }`}
                />
                {/* Error message */}
                {errors.percentile && (
                  <p className="absolute text-red-500 text-xs mt-1">{errors.percentile}</p>
                )}
              </div>
            </div>
          </div>


          {/* Current Score */}
          <div className="flex items-start gap-4">
            <div className="bg-blue-700 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mt-1">
              3
            </div>
            <div className="w-full flex flex-row justify-between items-center">
              <label className="block mb-1 text-sm">
                Update your <span className="font-bold">Current Score (out of 15)</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={correct === null ? "" : correct}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (value === "") {
                      setCorrect(null);
                      setErrors(prev => ({ ...prev, correct: "Current Score is required." }));
                    } else {
                      const num = Number(value);
                      if (num >= 1 && num <= 15) {
                        setCorrect(num);
                        setErrors(prev => ({ ...prev, correct: "" }));
                      } else {
                        setCorrect(num);
                        setErrors(prev => ({ ...prev, correct: "Current Score should be between 1 and 15." }));
                      }
                    }
                  }}
                  placeholder="Current Score"
                  className={`border rounded w-28 min-w-0 p-2 h-10 focus:outline-none focus:w-36 ${errors.correct ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-blue-500"
                    }`}
                />
                {/* Error message */}
                {errors.correct && (
                  <p className="absolute text-red-500 text-xs mt-1">{errors.correct}</p>
                )}
              </div>
            </div>
          </div>

        </div>

        <div className="flex justify-end gap-2 mt-6">
          <Button
            variant="outline"
            className="lowercase text-blue-700 border-blue-700"
            onClick={onClose}
          >
            cancel
          </Button>
          <Button
            onClick={handleSave}
            className="lowercase flex items-center gap-2 bg-blue-700 hover:bg-blue-600"
          >
            save
            <span className="text-lg">&rarr;</span>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

