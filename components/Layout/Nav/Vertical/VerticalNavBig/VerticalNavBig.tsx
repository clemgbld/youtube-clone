import classes from "./VerticalNavBig.module.css";
import VerticalEndPointBig from "./VerticalEndpointBig/VerticalEndpointBig";
import HomeIcon from "../../../../UI/VerticalIcons/HomeIcon";
import CompassIcon from "../../../../UI/VerticalIcons/CompassIcon";
import ClockIcon from "../../../../UI/VerticalIcons/ClockIcon";
import LogoutButton from "../LogoutButton/LogoutButton";
import VerticalChannelBig from "./VerticalChannelBig/VerticalChannelBig";
import { useAuth } from "../../../../../store/auth";

const data = [
  {
    thumbnail:
      "https://yt3.ggpht.com/qXwJcIl7ufH0x8skbCBBdACHCgRKuPxXRIR3AQCBxNolUiQ0OwOEdK3Qo9p7tiTGBAzq0nY0430=s88-c-k-c0x00ffffff-no-rj",
    title: "Lofi Girl",
    channelId: "UCSJ4gkVC6NrvII8umztf0Ow",
    isLive: true,
  },
  {
    thumbnail:
      "https://yt3.ggpht.com/ytc/AKedOLSTkCiA1P1KpQtzy822NZzJRR4_0cwNppb35qGe=s88-c-k-c0x00ffffff-no-rj",
    title: "lofi geek",
    channelId: "UCyD59CI7beJDU493glZpxgA",
    isLive: true,
  },

  {
    thumbnail:
      "https://yt3.ggpht.com/ytc/AKedOLQQyk5jwEXO63EzSGgZYOAoxQP8LHR173K3vuoPmw=s88-c-k-c0x00ffffff-no-rj",
    title: "After Skool",
    channelId: "UC1KmNKYC1l0stjctkGswl6g",
    isLive: false,
  },
  {
    thumbnail:
      "https://yt3.ggpht.com/ytc/AKedOLTcIl6kKt3lEPJEySUf_hpHiKDKiFeo9eWPReLysQ=s88-c-k-c0x00ffffff-no-rj",
    title: "Fireship",
    channelId: "UCsBjURrPoezykLs9EqgamOA",
    isLive: false,
  },
  {
    thumbnail:
      "https://yt3.ggpht.com/ytc/AKedOLQXx-JXf1NsSUtVHcYhx4B4MaIYE0m7I_H0GHmu-w=s88-c-k-c0x00ffffff-no-rj",
    title: "Tech With Tim",
    channelId: "UC4JX40jDee_tINbkjycV4Sg",
    isLive: false,
  },

  {
    thumbnail:
      "https://yt3.ggpht.com/ytc/AKedOLThoAgtyeHHDitjE92w0DhnK6HG5zE0IFJae5Pq9g=s176-c-k-c0x00ffffff-no-rj-mo",
    title: "Improvement Pill",
    channelId: "UCBIt1VN5j37PVM8LLSuTTlw",
    isLive: false,
  },
  {
    thumbnail:
      "https://yt3.ggpht.com/ytc/AKedOLQpvSjzSCSo8ZKCjBZS7TRX7omb_kyQirh2zgEY=s88-c-k-c0x00ffffff-no-rj",
    title: "Web Dev Simplified",
    channelId: "UCFbNIlppjAuEX4znoulh0Cw",
    isLive: false,
  },
];

const VerticalNavBig: React.FC = () => {
  const { user } = useAuth();

  return (
    <header className={classes.header}>
      <VerticalEndPointBig href="/" href2="/tags">
        <HomeIcon />
        <p className={classes["icon-title"]}>Home</p>
      </VerticalEndPointBig>

      <VerticalEndPointBig href="/explorer">
        <CompassIcon />
        <p className={classes["icon-title"]}>Explorer</p>
      </VerticalEndPointBig>
      {user && (
        <VerticalEndPointBig href="/later">
          <ClockIcon />
          <p className={classes["icon-title"]}>Watch later</p>
        </VerticalEndPointBig>
      )}
      <div className={classes["title-container"]}>
        <h3 className={classes.title}>Channel you might like</h3>
      </div>

      {data.map((item: any) => (
        <VerticalChannelBig
          key={item.channelId}
          channelId={item.channelId}
          thumbnail={item.thumbnail}
          title={item.title}
          isLive={item.isLive}
        />
      ))}
      <LogoutButton size="large" />
    </header>
  );
};

export default VerticalNavBig;
