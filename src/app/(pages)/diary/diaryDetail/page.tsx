"use client";

import { useState } from "react";
import * as s from "@/app/(pages)/diary/style.css";
import LeftArrowIcon from "@/assets/leftArrowIcon";
import { customAxios } from "@/utils/customAxios";

interface DiaryData {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

type DiaryWriteProps = {
  diary: DiaryData; // 수정된 타입
  setIsDiaryRead: (value: boolean) => void;
};

const DiaryDetail = ({ diary, setIsDiaryRead }: DiaryWriteProps) => {
  const [getDiary, setGetDiary] = useState(diary);

  const onDiarySubmit = async () => {
    try {
      // 수정 요청 코드 추가
      // await customAxios.put(`/diary/${getDiary.id}`, {
      //   title: getDiary.title,
      //   content: getDiary.content,
      // });
      // alert("일기가 수정되었습니다!");
      // setIsDiaryRead(false);
    } catch (err) {
      alert("일기가 수정되지 않았습니다.");
    }
  };

  return (
    <div className={s.diaryWriteContainer}>
      <div className={s.leftArrow} onClick={() => setIsDiaryRead(false)}>
        <LeftArrowIcon />
      </div>
      <div className={s.textsWrapper}>
        <input
          className={s.writeTitle}
          value={getDiary.title}
          onChange={(e) =>
            setGetDiary({ ...getDiary, title: e.target.value })
          }
        />
        <div className={s.writeDevideLine} />
        <textarea
          className={s.writeContent}
          value={getDiary.content}
          onChange={(e) =>
            setGetDiary({ ...getDiary, content: e.target.value })
          }
        />
      </div>
      <button className={s.writeFinishBtn} onClick={onDiarySubmit}>
        수정하기
      </button>
    </div>
  );
};

export default DiaryDetail;
