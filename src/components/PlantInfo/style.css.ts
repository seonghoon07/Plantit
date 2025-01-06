import {style} from "@vanilla-extract/css";
import {flex} from "@/styles/flex.css";
import theme from "@/styles/theme.css";

export const plantWrapper = style({
  ...flex.COLUMN_FLEX,
  gap: "32px",
})
export const plantImgWrapper = style({
  ...flex.COLUMN_CENTER,
  gap: "4px",
})

export const plantUnderline = style({
  width: "72px",
  height: "3px",
  backgroundColor: theme.green[100],
})

export const growthWrapper = style({
  ...flex.COLUMN_CENTER,
  gap: "8px",
})

export const progressBar = style({
  width: "240px",
  height: "6px",
  borderRadius: "9999px",
  border: `0.5px solid ${theme.white}`,
})

export const levelText = style({
  color: theme.white,
  textAlign: "center",
  fontFamily: "Pretendard",
  fontSize: "12px",
  fontWeight: "400",
  lineHeight: "110%",
})

export const progress = style({
  height: "100%",
  backgroundColor: theme.green[100],
})