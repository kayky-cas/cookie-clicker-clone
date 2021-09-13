import { COOKIE_STORAGE } from './environment/env.js';

const getStorage = () => {
  return JSON.parse(localStorage.getItem(COOKIE_STORAGE));
};

const setStorage = cookieObject => {
  localStorage.setItem(COOKIE_STORAGE, JSON.stringify(cookieObject));
};

export { setStorage, getStorage };
