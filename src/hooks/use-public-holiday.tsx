import { useState, useEffect } from "react";
import { fetchPubicHoliday } from "../components/fetch-public-holiday";

/**
 * Custom hook to check if today is a public holiday.
 * @returns {boolean | null} - Returns a boolean value indicating whether today is a public holiday or not. Returns null if the data is still being fetched.
 */
export const usePublicHoliday = () => {
  const [isHoliday, setIsHoliday] = useState<boolean | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsHoliday(await fetchPubicHoliday());
      } catch (error) {
        console.error("Failed to fetch public holiday:", error);
      }
    };

    fetchData();
  }, []);

  return isHoliday;
};
