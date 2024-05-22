import { useState, useEffect } from "react";
import { fetchPubicHoliday } from "../components/holiday";

export const usePublicHoliday = () => {
  const [isHoliday, setIsHoliday] = useState<boolean | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      let holiday = false;
      try {
        holiday = await fetchPubicHoliday();
      } catch (error) {
        console.error("Failed to fetch public holiday:", error);
      }
      setIsHoliday(holiday);
    };

    fetchData();
  }, []);

  return isHoliday;
};
