import {style} from "@vanilla-extract/css";
import {flex} from "@/styles/flex.css";
import theme from "@/styles/theme.css";

export const container = style({
  ...flex.FLEX,
  width: '100%',
  height: '72px',
  padding: '0px 8px',
  gap: '12px',
  backgroundColor: theme.gray["500"],
  position: "fixed",
  bottom: 0,
  left: 0,
})

export const itemWrapper = style({
  ...flex.COLUMN_CENTER,
  gap: '4px',
  width: '100%',
})

export const itemText = style({
  color: theme.white,
  fontSize: "12px",
  fontWeight: "300",
  fontFamily: "Pretendard",
  lineHeight: "110%",
})