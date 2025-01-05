"use client"

import * as s from "./style.css"
import Coin from "@/assets/coin";
import MarketIcon from "@/assets/marketIcon";
import PlantInfo from "@/components/PlantInfo/page";

const Home = () => {
  return (
    <div className={s.container}>
      <div className={s.contentWrapper}>
        <div className={s.headerWrapper}>
          <div className={s.coinWrapper}>
            <Coin />
            <p className={s.coinText}>0</p>
          </div>
          <MarketIcon />
        </div>
        <PlantInfo />
        <div className={s.commentContainer}>
          <pre className={s.comment}>{`오늘은 어제보다 식물이 4% 더 자랐어요\n이대로 계속해서 일기를 써보아요`}</pre>
        </div>
      </div>
    </div>
  );
};

export default Home;