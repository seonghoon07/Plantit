"use client";

import { useEffect, useState } from "react";
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

interface DiaryDetailProps {
  diary: DiaryData;
  setIsDiaryRead: (value: boolean) => void;
}

const DiaryDetail = ({ diary, setIsDiaryRead }: DiaryDetailProps) => {
  const [getDiary, setGetDiary] = useState<DiaryData>(diary);
  const [isModified, setIsModified] = useState(false);

  useEffect(() => {
    const modified =
      diary.title !== getDiary.title || diary.content !== getDiary.content;
    setIsModified(modified);
  }, [diary, getDiary]);

  const onDiarySubmit = async () => {
    if (!isModified) return;

    try {
      const { data } = await customAxios.put(`/diary/${getDiary.id}`, {
        title: getDiary.title,
        content: getDiary.content,
      });
      alert("일기가 수정되었습니다!");
      setIsDiaryRead(false);
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
          onChange={(e) => setGetDiary({ ...getDiary, title: e.target.value })}
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
      <button
        className={`${
          isModified ? s.writeFinishBtn : s.modifyDisableBtn
        }`}
        onClick={onDiarySubmit}
        disabled={!isModified}
      >
        수정하기
      </button>
    </div>
  );
};

export default DiaryDetail;
