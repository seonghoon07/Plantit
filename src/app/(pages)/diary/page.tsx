"use client"

import * as s from "./style.css"
import DiaryIcon from "@/assets/diary"
import theme from "@/styles/theme.css";
import {useState} from "react";
import LeftArrowIcon from "@/assets/leftArrowIcon";

const Diary = () => {
  const [isDiaryWrite, setIsDiaryWrite] = useState(false);

  const DiaryListDom = () => {
    return (
      <>
        <div className={s.diaryListWrapper}>
          <div className={s.diaryContainer}>
            <p className={s.diaryTitle}>다이어리 제목입니다</p>
            <p className={s.diaryDate}>2025.01.05</p>
          </div>
        </div>
        <div className={s.deviceLine}/>
        <button className={s.createDiaryBtn} onClick={() => setIsDiaryWrite(true)}>
          <div className={s.diaryIcon}><DiaryIcon color={theme.white}/></div>
          일기쓰기
        </button>
      </>
    )
  }

  const DiaryWriteDom = () => {
    return (
      <div className={s.diaryWriteContainer}>
        <div className={s.leftArrow} onClick={() => setIsDiaryWrite(false)}><LeftArrowIcon/></div>
        <div className={s.textsWrapper}>
          <input className={s.writeTitle} placeholder="제목을 입력해주세요"/>
          <div className={s.writeDevideLine}/>
          <textarea className={s.writeContent} placeholder="오늘은 어떤일을 겪으셨나요?"/>
        </div>
        <button className={s.writeFinishBtn}>작성 완료</button>
      </div>
    )
  }

  return (
    <div className={s.container}>
      <div className={s.contentWrapper}>
        {isDiaryWrite ? <DiaryWriteDom/> : <DiaryListDom/>}
      </div>
    </div>
  );
};

export default Diary;