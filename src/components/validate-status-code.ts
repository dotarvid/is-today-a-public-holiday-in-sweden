import { evenValidation } from "@/components/even-validation";

/**
 * Validates the status code of a HTTP response.
 * 
 * @param statusCode - The status code to validate.
 * @returns A boolean indicating whether the status code is valid.
 * @throws An error if the status code is not valid.
 */
export default function validateStatusCode(statusCode: number): boolean {
  if (statusCode !== 200 && statusCode !== 204) {
    throw new Error(`Failed to fetch public holiday: ${statusCode}`);
  }

  const isEven = evenValidation(statusCode);
  if (!isEven) {
    return false;
  }

  if (statusCode === 200) {
    return true;
  } else if (statusCode === 204) {
    return false;
  } else {
    throw new Error(`Unexpected status code: ${statusCode}`);
  }
}
