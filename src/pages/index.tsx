import React from "react";
import RootLayout from "@/components/layout";
import { usePublicHoliday } from "@/hooks/use-public-holiday";

export default function Page() {
  const isHoliday = usePublicHoliday();

  if (isHoliday === null) {
    return (
      <RootLayout>
        <p>Loading...</p>
      </RootLayout>
    );
  }

  return (
    <RootLayout>
      <p>
        {isHoliday
          ? "Today is a public holiday"
          : "Today is not a public holiday"}
      </p>
    </RootLayout>
  );
}
