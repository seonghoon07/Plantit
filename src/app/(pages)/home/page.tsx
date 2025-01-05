import * as s from "./style.css"
import Coin from "@/assets/coin";
import MarketIcon from "@/assets/marketIcon";
import SproutImg from "@/assets/sproutImg";

const Home = () => {
  return (
    <div className={s.container}>
      <div className={s.contentWrapper}>
        <div className={s.headerWrapper}>
          <div className={s.coinWrapper}>
            <Coin />
            <p className={s.coinText}>62</p>
          </div>
          <MarketIcon />
        </div>
        <div className={s.plantInfoWrapper}>
          <div className={s.plantImgWrapper}>
            <SproutImg />
            <div className={s.plantUnderline} />
          </div>
          <div className={s.growthWrapper}>
            <div className={s.progressBar} />
            <p className={s.levelText}>레벨 2 : 23%</p>
          </div>
        </div>
        <div className={s.commentContainer}>
          <pre className={s.comment}>{`오늘은 어제보다 식물이 4% 더 자랐어요\n이대로 계속해서 일기를 써보아요`}</pre>
        </div>
      </div>
    </div>
  );
};

export default Home;