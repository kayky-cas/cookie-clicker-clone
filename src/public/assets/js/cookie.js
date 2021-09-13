// import { getStorage } from './storage.js';

const patternCookieObject = {
  cookies: 0,
  additionals: [],
};

let cookieObject = patternCookieObject;

const addCookie = amount => {
  cookieObject.cookies += amount;
};

const getCookie = () => cookieObject.cookies;

const getAdditionals = () => cookieObject.additionals;

const addAdditional = additional => {
  cookieObject.additionals.push(additional);
};

export { addCookie, getCookie, getAdditionals, addAdditional };
