import * as s from "./style.css"
import SettingIcon from "@/assets/settingIcon";
import PlantInfo from "@/components/PlantInfo/page";

const Profile = () => {
  return (
    <div className={s.container}>
      <div className={s.contentWrapper}>
        <div className={s.profileWrapper}>
          <div className={s.profileHeader}>
            <p className={s.profileText}>프로필</p>
            <SettingIcon />
          </div>
          <div className={s.userInfoContainer}>
            <div className={s.userInfoWrapper}>
              <p className={s.userName}>최성훈</p>
              <p className={s.userLevel}>LV.2 새싹 - 23%</p>
            </div>
            <button className={s.userInfoFixBtn}>프로필 수정</button>
          </div>
        </div>
        <div className={s.coinContainer}>
          <p className={s.myCoinText}>내 코인 <span className={s.coin}>64개</span></p>
          <p className={s.chargeText}>충전하기</p>
        </div>
        <div className={s.resultWrapper}>
          <div className={s.diaryCountWrapper}>
            <p className={s.diaryCountTitle}>적은 일기 수</p>
            <p className={s.diaryCount}>1</p>
          </div>
          <div className={s.resultDeviceLine}/>
          <div className={s.diaryCountWrapper}>
            <p className={s.diaryCountTitle}>연속 작성 횟수</p>
            <p className={s.diaryCount}>-</p>
          </div>
        </div>
        <div className={s.plantWrapper}>
          <PlantInfo />
        </div>
      </div>
    </div>
  );
};

export default Profile;