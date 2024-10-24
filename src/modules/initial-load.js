import { addHomeElement } from './home.js';

export default () =>
  (window.onload = (e) => {
    addHomeElement();
  });
