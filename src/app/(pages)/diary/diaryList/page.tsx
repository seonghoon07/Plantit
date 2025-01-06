"use client";

import * as s from "@/app/(pages)/diary/style.css";
import DiaryIcon from "@/assets/diary";
import theme from "@/styles/theme.css";
import { useEffect, useState } from "react";
import { customAxios } from "@/utils/customAxios";
import DiaryDetail from "@/app/(pages)/diary/diaryDetail/page";

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
  setIsDiaryWrite: (value: boolean) => void;
};

const DiaryList = ({ setIsDiaryWrite }: DiaryWriteProps) => {
  const today = new Date().toISOString().split("T")[0];
  const [diaryList, setDiaryList] = useState<DiaryData[]>([]);
  const [writeBtnState, setWriteBtnState] = useState<boolean>(true);
  const [selectedDiary, setSelectedDiary] = useState<DiaryResponse | null>(
    null,
  );
  const [isDiaryRead, setIsDiaryRead] = useState<boolean>(false);

  useEffect(() => {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();

    if (hours === 0 && minutes === 0) {
      setWriteBtnState(true);
    }

    (async () => {
      const { data } = await customAxios.get("/diary");
      setDiaryList(data.dataList);
    })();
    if (localStorage.getItem("isWrite") === "true") {
      setWriteBtnState(false);
    }

    const interval = setInterval(() => {
      const currentTime = new Date();
      const hours = currentTime.getHours();
      const minutes = currentTime.getMinutes();

      if (hours === 0 && minutes === 0) {
        setWriteBtnState(true);
        localStorage.setItem("isWrite", "false");
      }
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const diaryClick = async (id: number) => {
    try {
      const { data } = await customAxios.get(`/diary/${id}`);
      setSelectedDiary(data);
      setIsDiaryRead(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {isDiaryRead && selectedDiary ? (
        <DiaryDetail diary={selectedDiary} setIsDiaryRead={setIsDiaryRead} />
      ) : (
        <>
          <div className={s.diaryListWrapper}>
            {diaryList.map((item) => {
              const dateTime = item.createdAt;
              const date = dateTime.split("T")[0];
              const isToday = date === today;
              const dateColor = isToday ? theme.green[100] : theme.gray[100];
              return (
                <div
                  className={s.diaryContainer}
                  key={item.id}
                  onClick={() => diaryClick(item.id)}
                >
                  <p className={s.diaryTitle}>{item.title}</p>
                  <p className={s.diaryDate} style={{ color: dateColor }}>
                    {date}
                  </p>
                </div>
              );
            })}
          </div>
          <div className={s.deviceLine} />
          {writeBtnState ? (
            <button
              className={s.createDiaryBtn}
              style={{ backgroundColor: theme.green[100] }}
              onClick={() => setIsDiaryWrite(true)}
            >
              <div className={s.diaryIcon}>
                <DiaryIcon color={theme.white} />
              </div>
              일기쓰기
            </button>
          ) : (
            <button
              className={s.createDiaryBtn}
              style={{ backgroundColor: theme.green[200] }}
            >
              <div className={s.diaryIcon}>
                <DiaryIcon color={theme.white} />
              </div>
              오늘 작성한 일기가 이미 있습니다!
            </button>
          )}
        </>
      )}
    </>
  );
};

export default DiaryList;
