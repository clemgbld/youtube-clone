import classes from "./YoutubeChannelIcon.module.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useRouter } from "next/router";

const YoutubeChannelIcon: React.FC<{
  thumbnail: string;
  size: string;
  channelId: string | string[] | undefined;
}> = ({ thumbnail, size, channelId }) => {
  const classImg = `${
    size === "large"
      ? classes["img-large"]
      : size === "small"
      ? classes["img-small"]
      : size === "extra-large"
      ? classes["img-extra-large"]
      : classes.img
  }`;

  const router = useRouter();

  const goToChannelPage = (e: React.MouseEvent<HTMLInputElement>) => {
    e.stopPropagation();
    router.push(`/c/${channelId}`);
  };

  const errorHandler = (e: any) => {
    e.target.src = "/fallback.PNG";
  };

  return (
    <div onClick={goToChannelPage}>
      <LazyLoadImage
        src={thumbnail}
        alt="thumbnail channel picture"
        className={classImg}
        effect="blur"
        onError={errorHandler}
      />
    </div>
  );
};

export default YoutubeChannelIcon;
