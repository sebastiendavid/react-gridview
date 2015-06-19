import {Rect} from "./rect";
import {Target} from "./target";
import {Point} from "./point";
import {COLOR} from "./color";
const VERTICAL_ALIGN = Object.freeze({
  TOP: "TOP",
  MIDDLE: "MIDDLE",
  BOTTOM: "BOTTOM"
});

const TEXT_ALIGN = Object.freeze({
  LEFT: "LEFT",
  CENTER: "CENTER",
  RIGHT: "RIGHT"
});

// リサイザーの幅
const RESIZER_BORDER_WIDTH = 4;



export {
  Rect,
  Target,
  Point,
  VERTICAL_ALIGN,
  TEXT_ALIGN,
  RESIZER_BORDER_WIDTH,
  COLOR
};
