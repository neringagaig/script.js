import {
  facebookBlue,
  blue,
  red,
  lightRed,
  yellow,
  green,
  ytRed,
  ytWhite,
  ytBlack,
} from "./modules/colors.js";

console.log(facebookBlue);
console.log(blue, red, lightRed, yellow, green);
console.log(ytRed, ytWhite, ytBlack);

import numbers, { zero, nine } from "./modules/numbers.js";

console.log(numbers, zero, nine);

import { addition } from "./modules/math.js";

console.log(addition(zero, nine));

import renderHeader from "./modules/header.js";
renderHeader();
