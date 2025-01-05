import {style} from "@vanilla-extract/css";
import theme from "@/styles/theme.css";
import {flex} from "@/styles/flex.css";

export const container = style({
  width: "100%",
  height: "100vh",
  backgroundColor: theme.gray["600"],
  padding: "0px 16px",
  ...flex.COLUMN_FLEX,
})

export const contentWrapper = style({
  ...flex.COLUMN_FLEX,
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  height: "calc(100% - 72px)",
  padding: "52px 0px 16px 0px",
})

export const headerWrapper = style({
  width: "100%",
  ...flex.FLEX,
  justifyContent: "space-between",
  alignItems: "center",
})

export const coinWrapper = style({
  ...flex.FLEX,
  alignItems: "center",
  gap: "4px",
})

export const coinText = style({
  color: theme.white,
  fontSize: "16px",
  fontWeight: 400,
  fontFamily: "Pretendard",
  lineHeight: "110%",
  marginTop: "2px",
})

export const plantInfoWrapper = style({
  ...flex.COLUMN_FLEX,
  alignItems: "center",
  gap: "32px",
})

export const commentContainer = style({
  ...flex.COLUMN_CENTER,
  width: "100%",
  height: "72px",
  borderRadius: "8px",
  backgroundColor: theme.gray[500],
})

export const comment = style({
  color: theme.white,
  textAlign: "center",
  fontFamily: "Pretendard",
  fontSize: "14px",
  fontWeight: "400",
  lineHeight: "140%",
})