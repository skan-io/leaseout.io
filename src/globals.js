/* eslint-disable no-undef */


export const fetch = window.fetch || /* istanbul ignore next */(()=> null);
export const localStorage = window.localStorage;
export const location = window.location;
export const document = window.document;
export const history = window.history;
export const navigator = window.navigator;
export const URL = window.URL;
const win = window;
export {win as window};
