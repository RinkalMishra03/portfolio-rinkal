/**
 * Simple email address validator
 */
export function validateEmail(email: string): boolean {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

/**
 * Validates whether a phone number matches general formatting rules
 */
export function validatePhone(phone: string): boolean {
  const re = /^\+?[0-9\s\-]{7,15}$/;
  return re.test(phone);
}
