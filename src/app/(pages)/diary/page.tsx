"use client"

import * as s from "./style.css"
import {useState} from "react";
import DiaryWrite from "@/app/(pages)/diary/diaryWrite/page";
import DiaryList from "@/app/(pages)/diary/diaryList/page";

const Diary = () => {
  const [isDiaryWrite, setIsDiaryWrite] = useState(false);

  return (
    <div className={s.container}>
      <div className={s.contentWrapper}>
        {isDiaryWrite ? <DiaryWrite setIsDiaryWrite={setIsDiaryWrite}/> : <DiaryList setIsDiaryWrite={setIsDiaryWrite}/>}
      </div>
    </div>
  );
};

export default Diary;