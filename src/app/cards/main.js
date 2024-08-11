import { level1_1 } from "../cards/level_1/set_1_1";
import { level1_2 } from "../cards/level_1/set_1_2";
import { level1_3 } from "../cards/level_1/set_1_3";
import { level1_4 } from "../cards/level_1/set_1_4";
import { level1_5 } from "../cards/level_1/set_1_5";
import { level1_6 } from "../cards/level_1/set_1_6";
import { level1_7 } from "../cards/level_1/set_1_7";
import { level1_8 } from "../cards/level_1/set_1_8";
import { level1_9 } from "../cards/level_1/set_1_9";
import { level1_10 } from "../cards/level_1/set_1_10";
import { level2_1 } from "../cards/level_2/set_2_1";
import { level2_2 } from "../cards/level_2/set_2_2";

const level1Cards = [
  ...level1_1,
  ...level1_2,
  ...level1_3,
  ...level1_4,
  ...level1_5,
  ...level1_6,
  ...level1_7,
  ...level1_8,
  ...level1_9,
  ...level1_10,
];
const level2Cards = [...level2_1, ...level2_2];

const Levels = [...level1Cards, ...level2Cards];

export default Levels;
