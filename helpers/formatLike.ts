import numeral from "numeral";

export const formatLike = (likeCount: string, type: string): string => {
  const numLikeCount = +likeCount;

  if (numLikeCount < 1) {
    if (type === "comment") return "";

    return "LIKE";
  }

  return numeral(likeCount).format("0.a");
};
