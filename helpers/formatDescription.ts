export const formatDescription = (description: string): string[] => {
  return description.split("-");
};

export const sumarizeDescription = (description: string): string => {
  if (description.length < 100) return description;

  return `${description.slice(0, 100)}...`;
};
