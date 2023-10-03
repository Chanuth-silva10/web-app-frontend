import DOMPurify from "dompurify";

export const SanitizeText = (dirty) => {
  const clean = DOMPurify.sanitize(dirty);
  return clean;
};
