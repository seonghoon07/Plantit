import {style} from "@vanilla-extract/css";
import {flex} from "@/styles/flex.css";
import theme from "@/styles/theme.css";

export const background = style({
  ...flex.CENTER,
  justifyContent: "center",
  height: "100vh",
  width: "100%",
  backgroundColor: theme.gray["600"],
  padding: "0 16px",
})

export const contentWrapper = style({
  ...flex.COLUMN_FLEX,
  justifyContent: "center",
  gap: "104px",
  width: "100%",
  height: "100%",
})

export const infoWrapper = style({
  ...flex.COLUMN_FLEX,
  justifyContent: "center",
  gap: "74px",
  width: "100%",
})

export const logoWrapper = style({
  ...flex.COLUMN_CENTER,
  gap: "12px",
})

export const subTitle = style({
  color: theme.white,
  textAlign: "center",
  fontFamily: "Pretendard",
  fontSize: "16px",
  fontWeight: "400",
  letterSpacing: "0.32px",
})

export const treesLayout = style({
  width: "100%",
  ...flex.CENTER,
})

export const loginWrapper = style({
  width: "100%",
  ...flex.COLUMN_FLEX,
  gap: "16px",
})

export const devideLayout = style({
  width: "100%",
  ...flex.CENTER,
  gap: "12px",
})

export const devideLine = style({
  width: "132px",
  height: "1px",
  backgroundColor: theme.gray["100"],
})

export const easyLoginText = style({
  color: theme.white,
  textAlign: "center",
  fontFamily: "Pretendard",
  fontSize: "12px",
  fontWeight: "400",
  lineHeight: "160%",
})

export const googleLoginLayout = style({
  width: "100%",
  height: "48px",
  padding: "11px 12px",
  borderRadius: "4px",
  border: `1px solid ${theme.gray[100]}`,
  background: theme.white,
  ...flex.FLEX,
})

export const googleLoginTextLayout = style({
  ...flex.CENTER,
  width: "100%",
})

export const googleLoginText = style({
  color: theme.black,
  textAlign: "center",
  fontFamily: "Pretendard",
  fontSize: "16px",
  fontWeight: "500",
  lineHeight: "160%",
})