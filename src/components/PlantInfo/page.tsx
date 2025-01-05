import * as s from "./style.css";
import SproutImg from "@/assets/sproutImg";

const PlantInfo = () => {
  return (
    <div className={s.plantWrapper}>
      <div className={s.plantImgWrapper}>
        <SproutImg/>
        <div className={s.plantUnderline}/>
      </div>
      <div className={s.growthWrapper}>
        <div className={s.progressBar}/>
        <p className={s.levelText}>레벨 2 : 23%</p>
      </div>
    </div>
  );
};

export default PlantInfo;