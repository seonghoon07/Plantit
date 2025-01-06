"use client"

import * as s from "./style.css";
import SproutImg from "@/assets/sproutImg";
import { useAtom } from "jotai";
import { userAtom } from "@/utils/atom/userAtom";
import { useEffect } from "react";

const PlantInfo = () => {
  const [user, setUser] = useAtom(userAtom);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, [setUser]);

  return (
    <div className={s.plantWrapper}>
      <div className={s.plantImgWrapper}>
        <SproutImg />
        <div className={s.plantUnderline} />
      </div>
      <div className={s.growthWrapper}>
        <div className={s.progressBar}>
          <div className={s.progress} style={{width: `${user?.percent}%`}} />
        </div>
        <p className={s.levelText}>
          레벨 {user?.level} : {user?.percent}%
        </p>
      </div>
    </div>
  );
};

export default PlantInfo;
