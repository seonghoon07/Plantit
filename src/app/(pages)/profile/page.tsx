"use client"

import * as s from "./style.css"
import SettingIcon from "@/assets/settingIcon";
import PlantInfo from "@/components/PlantInfo/page";
import {useAtom} from "jotai";
import {userAtom} from "@/utils/atom/userAtom";
import { useEffect, useState } from "react";
import { customAxios } from "@/utils/customAxios";
import { useRouter } from "next/navigation";

interface Diary {
  id: number;
  title: string;
  createdAt: string;
}

const Profile = () => {
  const router = useRouter();
  const [user, setUser] = useAtom(userAtom);
  const [diaryList, setDiaryList] = useState<Diary[]>([]);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, [setUser]);
  useEffect(() => {
    (async () => {
      const { data } = await customAxios.get("/diary");
      setDiaryList(data.dataList);
    })();
  }, []);

  const logoutClick = async () => {
    const result = confirm("정말로 로그아웃 하시겠습니까?");
    if (result) {
      try {
        await customAxios.delete("/auth");
        localStorage.clear()
        router.push("/login");
      } catch (err) {
        console.log(err)
      }
    }
  }

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
              <p className={s.userName}>{user?.name}</p>
              <p className={s.userLevel}>LV.{user?.level} 새싹 - {user?.percent}%</p>
            </div>
            <button className={s.userInfoFixBtn} onClick={logoutClick}>로그아웃</button>
          </div>
        </div>
        <div className={s.coinContainer}>
          <p className={s.myCoinText}>내 코인 <span className={s.coin}>0개</span></p>
          <p className={s.chargeText}>충전하기</p>
        </div>
        <div className={s.resultWrapper}>
          <div className={s.diaryCountWrapper}>
            <p className={s.diaryCountTitle}>적은 일기 수</p>
            <p className={s.diaryCount}>{diaryList.length}</p>
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