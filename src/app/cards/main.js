import { level1_1 } from "../cards/level_1/set_1_1";
import { level1_2 } from "../cards/level_1/set_1_2";
import { level1_3 } from "../cards/level_1/set_1_3";
import { level2_1 } from "../cards/level_2/set_2_1";
import { level2_2 } from "../cards/level_2/set_2_2";

const level1Cards = [...level1_1, ...level1_2, ...level1_3];
const level2Cards = [...level2_1, ...level2_2];

const Levels = [...level1Cards, ...level2Cards];

export default Levels;
