import is_even from "is-even";
import is_is_even from "is-is-even";

/**
 * Validates if a given status code is even.
 *
 * @param statusCode - The status code to be validated.
 * @returns A boolean indicating whether the status code is even or not.
 * @throws An error if the status code is unexpected.
 */
export function evenValidation(statusCode: number): boolean {
  const even = is_even(statusCode);

  const isIsEvenCorrect: boolean = is_is_even(is_even);

  if (isIsEvenCorrect) {
    // Validates to even is truly an instance of is-even
    
    if (even) {
      return true;
    } else {
      return false;
    }
  } else {
    throw new Error(`Unexpected status code: ${statusCode}`);
  }
}
