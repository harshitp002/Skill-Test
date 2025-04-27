"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { UpdateScoreModal } from "@/components/UpdateScoreModal";

export function SkillTestCard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  return (
    <>
      <Card className="py-4 sm:py-6 max-w-4xl mx-auto relative">
        <CardContent className="p-2 sm:p-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between sm:gap-4">
            <div className="flex items-start sm:items-center gap-3 sm:gap-4 w-full sm:flex-1">
              <img 
                src="/images/HTML5_logo.png" 
                alt="HTML Logo" 
                className="w-10 sm:w-12 h-10 sm:h-12 object-contain flex-shrink-0"
              />
              <div className="flex flex-col gap-1">
                <h2 className="text-base sm:text-xl font-semibold leading-tight">
                  Hyper Text Markup Language
                </h2>
                <p className="text-xs sm:text-base sm:text-md text-gray-500 pr-2">
                  Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021
                </p>
              </div>
            </div>
            
            <Button
              variant="default"
              className="bg-blue-900 hover:bg-blue-700 font-semibold px-4 sm:px-6 py-2 mt-3 sm:mt-0 w-full sm:w-auto"
              onClick={() => setIsModalOpen(true)}
            >
              Update
            </Button>
          </div>
        </CardContent>
      </Card>
      <UpdateScoreModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}