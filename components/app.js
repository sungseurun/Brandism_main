import Header from "./Header.js";
import Footer from "./Footer.js";

class App {
  constructor() {
    const $header = document.querySelector("#header");
    const $footer = document.querySelector("#footer");
    new Header($header);
    new Footer($footer);
  }
}

new App();
