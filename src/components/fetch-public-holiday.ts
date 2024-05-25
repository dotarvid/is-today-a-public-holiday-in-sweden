import validateStatusCode from "@/components/validate-status-code";

/**
 * Fetches the public holiday status for today in Sweden.
 * @returns A promise that resolves to a boolean indicating whether today is a public holiday.
 */
export async function fetchPubicHoliday(): Promise<boolean> {
  const response = await fetch(
    "https://date.nager.at/api/v3/IsTodayPublicHoliday/SE"
  );

  return validateStatusCode(response.status);
}
