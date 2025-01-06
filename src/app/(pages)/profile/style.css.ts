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
  width: "100%",
  height: "calc(100% - 72px)",
  padding: "52px 0px 16px 0px",
  gap: "16px",
})

export const profileWrapper = style({
  width: "100%",
  ...flex.COLUMN_FLEX,
  gap: "32px",
})

export const profileHeader = style({
  width: "100%",
  ...flex.FLEX,
  justifyContent: "space-between",
  alignItems: "center",
})

export const profileText = style({
  color: theme.white,
  fontFamily: "Pretendard",
  fontSize: "16px",
  fontWeight: "600",
  lineHeight: "110%",
})

export const userInfoContainer = style({
  width: "100%",
  ...flex.FLEX,
  justifyContent: "space-between",
  alignItems: "center",
})

export const userInfoWrapper = style({
  ...flex.COLUMN_FLEX,
  gap: "4px",
})

export const userName = style({
  color: theme.white,
  fontFamily: "Pretendard",
  fontSize: "14px",
  fontWeight: "400",
  lineHeight: "110%",
})

export const userLevel = style({
  color: theme.white,
  fontFamily: "Pretendard",
  fontSize: "12px",
  fontWeight: "400",
  lineHeight: "110%",
})

export const userInfoFixBtn = style({
  ...flex.CENTER,
  padding: "4px 8px",
  borderRadius: "4px",
  border: `1px solid #FF8E8E`,
  backgroundColor: "transparent",
  color: "#FF8E8E",
  fontFamily: "Pretendard",
  fontSize: "12px",
  fontWeight: "400",
  lineHeight: "110%",
})

export const coinContainer = style({
  width: "100%",
  ...flex.CENTER,
  padding: "12px 16px",
  justifyContent: "space-between",
  borderRadius: "8px",
  backgroundColor: theme.gray[500],
})

export const myCoinText = style({
  color: theme.white,
  fontFamily: "Pretendard",
  fontSize: "14px",
  fontWeight: "400",
  lineHeight: "110%",
})

export const coin = style({
  color: theme.green[100],
  fontFamily: "Pretendard",
  fontSize: "14px",
  fontWeight: "600",
  lineHeight: "110%",
})

export const chargeText = style({
  color: theme.gray[200],
  fontFamily: "Pretendard",
  fontSize: "12px",
  fontWeight: "400",
  lineHeight: "110%",
})

export const resultWrapper = style({
  ...flex.CENTER,
  padding: "8px",
  gap: "8px",
  borderRadius: "8px",
  backgroundColor: theme.white,
  width: "100%",
})

export const diaryCountWrapper = style({
  ...flex.COLUMN_CENTER,
  padding: "12px 0",
  gap: "6px",
  width: "100%",
})

export const diaryCountTitle = style({
  color: theme.gray[500],
  fontFamily: "Pretendard",
  fontSize: "16px",
  fontWeight: "600",
  lineHeight: "110%",
})

export const diaryCount = style({
  color: theme.gray[500],
  fontFamily: "Pretendard",
  fontSize: "16px",
  fontWeight: "400",
  lineHeight: "110%",
})

export const resultDeviceLine = style({
  width: "1px",
  height: "52px",
  backgroundColor: theme.gray[300],
})

export const plantWrapper = style({
  ...flex.CENTER,
  width: "100%",
  height: "100%",
})