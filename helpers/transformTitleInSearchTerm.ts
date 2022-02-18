export const transformTitleInSearchTerm = (
  title: string | undefined
): string | void => {
  if (!title) return;

  const titleArr = title.split(" ");

  if (titleArr.length < 3) return title;

  return titleArr.slice(0, 3).join(" ");
};
