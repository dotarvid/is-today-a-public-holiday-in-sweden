import { useState, useEffect } from "react";
import { fetchPubicHoliday } from "../components/fetch-public-holiday";

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
