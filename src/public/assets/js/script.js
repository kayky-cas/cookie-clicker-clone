import { getCookie } from './cookie.js';
import { log, changeDebugStatus } from './debug.js';
import { click, increase } from './game.js';

changeDebugStatus(true);

const main = () => {
  log('Script loaded', 'color:yellow;font-size:1rem');

  const clicker = document.getElementById('cookieClicker');
  const counter = document.getElementById('cookieCounter');

  const changeCounter = () => {
    let cookies = getCookie();
    let fixed = 0;

    if (cookies < 1000) {
      fixed = 1;
    }

    counter.innerText = cookies.toFixed(fixed);
  };

  clicker.onclick = () => {
    click();
    changeCounter();
  };

  setInterval(() => {
    increase();
    changeCounter();
  }, 100);
};

document.addEventListener('DOMContentLoaded', main);
