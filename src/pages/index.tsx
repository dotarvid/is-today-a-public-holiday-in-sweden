import React from "react";
import RootLayout from "@/components/layout";
import { usePublicHoliday } from "@/hooks/use-public-holiday";

export default function Page() {
  const isHoliday = usePublicHoliday();

  if (isHoliday === null) {
    return (
      <RootLayout>
        <div className="flex items-center justify-center h-screen">
          <p className="text-2xl text-gray-600">Loading...</p>
        </div>
      </RootLayout>
    );
  }

  return (
    <RootLayout>
      <div className="flex items-center justify-center h-screen">
        <p className={`text-2xl ${isHoliday ? 'text-green-500' : 'text-red-500'}`}>
          {isHoliday
            ? "Today is a public holiday"
            : "Today is not a public holiday"}
        </p>
      </div>
    </RootLayout>
  );
}