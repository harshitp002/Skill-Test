"use client";

import { createContext, useContext, useState } from "react";

type ScoreContextType = {
  rank: number;
  percentile: number;
  correct: number;
  total: number;
  updateScores: (newRank: number, newPercentile: number, newCorrect: number) => void;
};

const ScoreContext = createContext<ScoreContextType | undefined>(undefined);

export function ScoreProvider({ children }: { children: React.ReactNode }) {
  const [rank, setRank] = useState(1);
  const [percentile, setPercentile] = useState(30);
  const [correct, setCorrect] = useState(10);
  const total = 15;

  const updateScores = (newRank: number, newPercentile: number, newCorrect: number) => {
    setRank(newRank);
    setPercentile(newPercentile);
    setCorrect(newCorrect);
  };

  return (
    <ScoreContext.Provider value={{ rank, percentile, correct, total, updateScores }}>
      {children}
    </ScoreContext.Provider>
  );
}

export function useScore() {
  const context = useContext(ScoreContext);
  if (!context) {
    throw new Error("useScore must be used within a ScoreProvider");
  }
  return context;
}
