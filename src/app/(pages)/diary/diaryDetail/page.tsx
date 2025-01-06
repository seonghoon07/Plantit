"use client"

import {useState} from "react";
import * as s from "@/app/(pages)/diary/style.css";
import LeftArrowIcon from "@/assets/leftArrowIcon";
import {customAxios} from "@/utils/customAxios";

interface DiaryData {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

interface DiaryResponse {
  code: string;
  message: string;
  data: DiaryData;
}

type DiaryWriteProps = {
  diary: DiaryResponse;  // 부모에서 받은 diary 데이터
  setIsDiaryRead: (value: boolean) => void;  // 부모에서 받은 상태 변경 함수
};

const DiaryDetail = ({diary, setIsDiaryRead}: DiaryWriteProps) => {
  const [getDiary, setGetDiary] = useState(diary.data)

  const onDiarySubmit = async () => {
    try {
      // await customAxios.post("/diary", {title: title, content: content})
      // alert("일기가 등록되었습니다!");
      // localStorage.setItem("isWrite", "true");
      // setIsDiaryWrite(false);
    } catch(err) {
      alert("일기가 등록되지 않았습니다.")
    }
  }
  return (
    <div className={s.diaryWriteContainer}>
      <div className={s.leftArrow} onClick={() => setIsDiaryRead(false)}><LeftArrowIcon/></div>
      <div className={s.textsWrapper}>
        <input
          className={s.writeTitle}
          value={getDiary.title}
        />
        <div className={s.writeDevideLine}/>
        <textarea
          className={s.writeContent}
          value={getDiary.content}
        />
      </div>
      <button className={s.writeFinishBtn} onClick={onDiarySubmit}>수정하기</button>
    </div>
  )
}

export default DiaryDetail;
