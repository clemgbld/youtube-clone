import classes from "./YoutubeContainerExplorer.module.css";
import YoutubeButtonExplorer from "./YoutubeButtonExplorer/YoutubeButtonExplorer";
import MusicIcon from "./YoutubeIconExplorer/MusicIcon/MusicIcon";
import GamingIcon from "./YoutubeIconExplorer/GamingIcon/GamingIcon";
import NewsIcon from "./YoutubeIconExplorer/NewsIcon/NewsIcon";
import SportIcon from "./YoutubeIconExplorer/SportIcon/SportIcon";
import DocumentaryIcon from "./YoutubeIconExplorer/DocumentaryIcon/DocumentaryIcon";
import FashionIcon from "./YoutubeIconExplorer/FashionIcon/FashionIcon";

const music = "music";
const gaming = "gaming";
const news = "news";
const sport = "sport";
const documentary = "documentary";
const fashion = "fashion";

const YoutubeContainerExplorer: React.FC = () => {
  return (
    <div className={classes.grid}>
      <YoutubeButtonExplorer text={music}>
        <MusicIcon text={music} />
      </YoutubeButtonExplorer>
      <YoutubeButtonExplorer text={gaming}>
        <GamingIcon text={gaming} />
      </YoutubeButtonExplorer>
      <YoutubeButtonExplorer text={news}>
        <NewsIcon text={news} />
      </YoutubeButtonExplorer>
      <YoutubeButtonExplorer text={sport}>
        <SportIcon text={sport} />
      </YoutubeButtonExplorer>
      <YoutubeButtonExplorer text={documentary}>
        <DocumentaryIcon text={documentary} />
      </YoutubeButtonExplorer>
      <YoutubeButtonExplorer text={fashion}>
        <FashionIcon text={fashion} />
      </YoutubeButtonExplorer>
    </div>
  );
};

export default YoutubeContainerExplorer;
