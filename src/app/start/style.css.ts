import {style} from "@vanilla-extract/css"
import theme from "@/styles/theme.css";
import {flex} from "@/styles/flex.css";

export const background = style({
  height: '100vh',
  width: '100%',
  backgroundColor: theme.gray["600"],
  ...flex.CENTER,
})