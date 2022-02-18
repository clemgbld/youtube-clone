export const transfromTitle = (title: string, size: string): string => {
  const transformTitleHelper = (num: number): string => {
    if (title.length > num) {
      return `${title.split("").slice(0, num).join("")}...`;
    }
    return title;
  };

  if (size === "small") {
    return transformTitleHelper(30);
  }

  return transformTitleHelper(50);
};
