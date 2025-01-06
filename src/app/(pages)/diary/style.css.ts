import {style} from "@vanilla-extract/css";
import theme from "@/styles/theme.css";
import {flex} from "@/styles/flex.css";

export const container = style({
  width: '100%',
  height: '100vh',
  backgroundColor: theme.gray["600"],
  padding: "0px 16px",
})

export const contentWrapper = style({
  ...flex.COLUMN_FLEX,
  alignItems: "center",
  justifyContent: "end",
  width: "100%",
  height: "calc(100% - 72px)",
  padding: "52px 0px 16px 0px",
  gap: "20px",
})

export const createDiaryBtn = style({
  ...flex.CENTER,
  border: "none",
  borderRadius: "8px",
  padding: "12px 16px",
  width: "100%",
  backgroundColor: theme.green["100"],
  color: theme.white,
  fontFamily: "Pretendard",
  fontSize: "16px",
  fontWeight: "600",
  lineHeight: "110%",
  position: "relative",
})

export const diaryIcon = style({
  position: "absolute",
  left: "16px",
  marginTop: "2px",
})

export const deviceLine = style({
  width: "240px",
  height: "1px",
  backgroundColor: theme.gray[100],
})

export const diaryListWrapper = style({
  ...flex.COLUMN_FLEX,
  gap: "8px",
  width: "100%",
})

export const diaryContainer = style({
  ...flex.FLEX,
  padding: "14px 16px",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: theme.gray[500],
  borderRadius: "8px",
})

export const diaryTitle = style({
  width: "90%",
  color: theme.white,
  fontFamily: "Pretendard",
  fontSize: "14px",
  fontWeight: "500",
  lineHeight: "110%",
})

export const diaryDate = style({
  width: "35%",
  color: theme.gray["100"],
  textAlign: "right",
  fontFamily: "Pretendard",
  fontSize: "12px",
  fontWeight: "400",
  lineHeight: "110%",
})

export const diaryWriteContainer = style({
  ...flex.COLUMN_FLEX,
  justifyContent: "space-between",
  width: "100%",
  height: "100%",
  padding: "60px 20px 20px 20px",
  backgroundColor: theme.gray[500],
  borderRadius: "12px",
  position: "relative",
  gap: "20px",
})

export const leftArrow = style({
  position: "absolute",
  left: "12px",
  top: "12px",
})

export const textsWrapper = style({
  ...flex.COLUMN_CENTER,
  alignItems: "start",
  gap: "12px",
  width: "100%",
  height: "100%",
})

export const writeTitle = style({
  color: theme.white,
  fontFamily: "Pretendard",
  fontSize: "18px",
  fontWeight: "600",
  lineHeight: "110%",
  backgroundColor: "transparent",
  border: "none",
  width: "100%",

  selectors: {
    "&:focus": {
      outline: "none",
    },
    "&:placeholder": {
      color: theme.gray["300"],
    }
  }
})

export const writeDevideLine = style({
  width: "100%",
  height: "1px",
  backgroundColor: theme.gray[300],
})

export const writeContent = style({
  width: "100%",
  height: "100%",
  color: theme.white,
  fontFamily: "Pretendard",
  fontSize: "16px",
  fontWeight: "400",
  lineHeight: "110%",
  backgroundColor: "transparent",
  border: "none",

  selectors: {
    "&:focus": {
      outline: "none",
    },
    "&:placeholder": {
      color: theme.gray["300"],
    }
  }
})

export const writeFinishBtn = style({
  width: "100%",
  padding: "12px 16px",
  ...flex.CENTER,
  borderRadius: "8px",
  backgroundColor: theme.white,
  color: theme.black,
  border: "none",
  fontFamily: "Pretendard",
  fontSize: "16px",
  fontWeight: "600",
  lineHeight: "110%",
})

export const modifyDisableBtn = style({
  width: "100%",
  padding: "12px 16px",
  ...flex.CENTER,
  borderRadius: "8px",
  backgroundColor: theme.gray["300"],
  color: theme.black,
  border: "none",
  fontFamily: "Pretendard",
  fontSize: "16px",
  fontWeight: "600",
  lineHeight: "110%",
})