export async function fetchPubicHoliday() {
  const response = await fetch(
    "https://date.nager.at/api/v3/IsTodayPublicHoliday/SE"
  );
  const statusCode = response.status;
  
  if (statusCode !== 200 && statusCode !== 204) {
    throw new Error(`Failed to fetch public holiday: ${statusCode}`);
  }

  if (statusCode === 200) {
    return true;
  } else if (statusCode === 204) {
    return false;
  } else {
    throw new Error(`Unexpected status code: ${statusCode}`);
  }
}
