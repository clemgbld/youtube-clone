export const formatComment = (comment: string): string[] => {
  return comment.split("<br>");
};

export const formatCommentCount = (commentCount: string): string => {
  const numComCount = +commentCount;

  return numComCount > 1 ? `${numComCount} comments` : `${numComCount} comment`;
};
