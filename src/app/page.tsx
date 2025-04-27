// app/page.tsx

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-xl sm:text-4xl font-bold text-purple-700 mb-4 ">Welcome to WhatBytes Skills Dashboard</h1>
      <p className="text-lg text-gray-600 mb-6">
        Track your assessments, analyze your performance, and grow your skills.
      </p>

      <Link href="/dashboard/skill-test">
        <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 text-lg rounded-lg">
          Go to Skill Test Report →
        </Button>
      </Link>
    </main>
  );
}
