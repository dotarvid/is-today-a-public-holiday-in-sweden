import React from "react";
import RootLayout from "@/components/layout";
import { usePublicHoliday } from "@/hooks/use-public-holiday";

/**
 * Renders the main page of the application.
 * Displays whether today is a public holiday or not.
 */
export default function Page() {
  const isHoliday = usePublicHoliday();

  if (isHoliday === null) {
    return (
      <RootLayout>
        <div className="flex flex-col items-center justify-center h-screen gap-4 p-4">
          <h1 className="text-4xl font-bold text-gray-800 text-center">
            Is today a public holiday in Sweden?
          </h1>
          <p className="text-2xl text-gray-600">Loading...</p>
        </div>
      </RootLayout>
    );
  }

  return (
    <RootLayout>
      <div className="flex flex-col items-center justify-center h-screen gap-4 p-4">
        <h1 className="text-4xl font-bold text-gray-800 text-center">
          Is today a public holiday in Sweden?
        </h1>
        <p
          className={`text-2xl ${
            isHoliday ? "text-green-500" : "text-red-500"
          }`}
        >
          {isHoliday
            ? "Yes"
            : "No"}
        </p>
      </div>
    </RootLayout>
  );
}
