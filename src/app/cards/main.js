import { level1_1 } from "../cards/level_1/set_1_1";
import { level1_2 } from "../cards/level_1/set_1_2";
import { level2_1 } from "../cards/level_2/set_2_1";

const level1Cards = [...level1_1, ...level1_2];
const level2Cards = [...level2_1];

const Levels = [...level1Cards, ...level2Cards];

export default Levels;
