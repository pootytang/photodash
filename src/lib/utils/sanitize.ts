import DOMPurify from "isomorphic-dompurify";
import validator from "validator";

interface InputObj { [key: string]: any; }

/**
 * Sanitizes user input to prevent injection attacks.
 * @param {Object} input - An object containing user inputs (key-value pairs).
 * @returns {Object} - The sanitized version of the input.
 */
export function sanitizeUserInput(input: InputObj) {
  if (typeof input !== "object" || input === null) {
    throw new Error("Invalid input: expected an object.");
  }

  const sanitized: InputObj = {};

  for (const key in input) {
    if (Object.prototype.hasOwnProperty.call(input, key)) {
      let value = input[key];

      if (typeof value === "string") {
        // Remove dangerous HTML or scripts
        value = DOMPurify.sanitize(value);

        // Trim whitespace and escape potentially harmful characters
        value = validator.escape(value);
      }

      sanitized[key] = value;
    }
  }

  return sanitized;
}
