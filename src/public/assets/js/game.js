import { getAdditionals, addCookie, addAdditional } from './cookie.js';
import { log } from './debug.js';

let cookiesPerSecond = 0;
let cookiesPerClick = 1;

const calculateCookiesPerSecond = () => {
  const additionals = getAdditionals();
  const values = additionals.map(v => v.value);

  cookiesPerSecond = values.reduce((a, b) => a + b);
};

const calculateCookiesPerClick = () => {
  cookiesPerClick += cookiesPerSecond / 10;
};

const click = () => {
  addCookie(cookiesPerClick);
};

const calculate = () => {
  calculateCookiesPerSecond();
  calculateCookiesPerClick();
};

const increase = () => {
  calculate();
  addCookie(cookiesPerSecond / 10);
};

const buy = additional => {
  addAdditional(additional);
  calculate();
};

export { click, increase, buy };
