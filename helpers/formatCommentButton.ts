export const formatCommentButtonHidden = (length: number): string => {
  if (length === 1) return "Display the answer";

  return `Display the ${length} answers`;
};

export const formatCommentButtonShow = (length: number): string => {
  if (length === 1) return "Hide the answer";

  return `Hide the ${length} answers`;
};
