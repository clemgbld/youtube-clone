import classes from "./YoutubeChanelTitle.module.css";
import { useRouter } from "next/router";

const YoutubeChanelTitle: React.FC<{
  title: string;
  size: string;
  channelId: string | string[] | undefined;
}> = ({ title, size, channelId }) => {
  const classTitle = `${
    size === "large"
      ? classes["title-large"]
      : size === "small"
      ? classes["title-small"]
      : size === "extra-large"
      ? classes["title-extra-large"]
      : size === "comment"
      ? classes["title-comment"]
      : classes.title
  }`;

  const router = useRouter();

  const goToChannelPage = (e: React.MouseEvent<HTMLInputElement>) => {
    e.stopPropagation();
    router.push(`/c/${channelId}`);
  };

  return (
    <p onClick={goToChannelPage} className={classTitle}>
      {title}
    </p>
  );
};

export default YoutubeChanelTitle;
