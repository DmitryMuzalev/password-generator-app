export function checkPasswords(length, rating) {
  if (length <= 3) return "too weak!";
  else if (length <= 5 && rating < 3) return "too weak!";
  else if (length <= 5 && rating >= 3) return "weak";
  else if (length > 5 && length < 10 && rating < 3) return "weak";
  else if (length > 5 && length < 10 && rating >= 3) return "medium";
  else if (length >= 10 && rating < 3) return "medium";
  else if (length >= 10 && rating >= 3) return "strong";
}
