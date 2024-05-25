import validateStatusCode from "@/components/validate-status-code";

export async function fetchPubicHoliday(): Promise<boolean> {
  const response = await fetch(
    "https://date.nager.at/api/v3/IsTodayPublicHoliday/SE"
  );

  return validateStatusCode(response.status);
}
