import moment from "moment";
import numeral from "numeral";

// Format Views

export const formatViews = (
  views: string | undefined,
  size: string
): string => {
  if (!views) return "";

  const numViews = +views;

  if (size === "large") {
    const largeViews = numeral(views).format("0,0").split(",").join(" ");

    return `${largeViews} ${numViews > 1 ? "views" : "view"} •`;
  }

  return `${numeral(views).format("0.a")} ${numViews > 1 ? "views" : "view"} •`;
};

// Format Duration
export const formatDuration = (duration: string): string => {
  const seconds = moment.duration(duration).asSeconds();

  if (seconds >= 3600) {
    return moment.utc(seconds * 1000).format("hh:mm:ss");
  }

  return moment.utc(seconds * 1000).format("mm:ss");
};

// Format Published format

export const formatPublishedAt = (
  publishedAt: string,
  size: string
): string => {
  if (size === "large") {
    const largePublishedAt = moment(publishedAt).format("ll").replace(",", ".");

    return largePublishedAt;
  }

  return moment(publishedAt).fromNow();
};

// Format Subscribers

export const formatSubscribers = (subscribers: string): string => {
  const numSubs = +subscribers;

  return `${numeral(subscribers).format("0.a")} ${
    numSubs > 1 ? "subscribers" : "subscriber"
  }`;
};
