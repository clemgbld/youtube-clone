import classes from "./VerticalChannelBig.module.css";
import YoutubeChannelIcon from "../../../../../Youtube/shared/YoutubeChannelIcon/YoutubeChannelIcon";
import { IoIosRadio } from "react-icons/io";
import { useRouter } from "next/router";

const VerticalChannelBig: React.FC<{
  title: string;
  channelId: string;
  thumbnail: string;
  isLive: boolean;
}> = ({ title, thumbnail, isLive, channelId }) => {
  const router = useRouter();

  const { asPath } = router;

  const channelPageLink = `/c/${channelId}`;

  const classEndpoint =
    asPath === channelPageLink ? classes["endpoint-active"] : classes.endpoint;

  const goToChannelPage = () => {
    router.push(channelPageLink);
  };

  return (
    <div onClick={goToChannelPage} className={classEndpoint}>
      <div className={classes.justify}>
        <YoutubeChannelIcon
          thumbnail={thumbnail}
          channelId={channelId}
          size={"small"}
        />
      </div>
      <p className={classes.title}>{title}</p>
      {isLive && <IoIosRadio className={classes.icon} />}
    </div>
  );
};

export default VerticalChannelBig;
