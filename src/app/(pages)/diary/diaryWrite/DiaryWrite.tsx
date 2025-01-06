"use client"

import {useState} from "react";
import * as s from "@/app/(pages)/diary/style.css";
import LeftArrowIcon from "@/assets/leftArrowIcon";
import {customAxios} from "@/utils/customAxios";

type DiaryWriteProps = {
  setIsDiaryWrite: (value: boolean) => void;  // 부모에서 받은 상태 변경 함수
};

const DiaryWrite = ({setIsDiaryWrite}: DiaryWriteProps) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onDiarySubmit = async () => {
    try {
      await customAxios.post("/diary", {title: title, content: content})
      alert("일기가 등록되었습니다!");
      localStorage.setItem("isWrite", "true");
      setIsDiaryWrite(false);
    } catch(err) {
      alert("일기가 등록되지 않았습니다.")
    }
  }
  return (
    <div className={s.diaryWriteContainer}>
      <div className={s.leftArrow} onClick={() => setIsDiaryWrite(false)}><LeftArrowIcon/></div>
      <div className={s.textsWrapper}>
        <input
          className={s.writeTitle}
          placeholder="제목을 입력해주세요"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className={s.writeDevideLine}/>
        <textarea
          className={s.writeContent}
          placeholder="오늘은 어떤일을 겪으셨나요?"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <button className={s.writeFinishBtn} onClick={onDiarySubmit}>작성 완료</button>
    </div>
  )
}

export default DiaryWrite;
