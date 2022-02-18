export const formatTags = (tags: string[] ): string => {


  if (tags.length < 3) {
    return tags.map((tag) => `#${tag}`).join(" ");
  }

  return tags
    .slice(0, 3)
    .map((tag) => `#${tag}`)
    .join(" ");
};
