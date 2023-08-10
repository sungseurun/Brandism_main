import Header from "./Header.js";
import Footer from "./Footer.js";

function App() {
  const $header = document.querySelector("#header");
  const $footer = document.querySelector("#footer");
  new Header($header);
  new Footer($footer);
}
// class App {
//   constructor() {
//     const $header = document.querySelector("#header");
//     const $footer = document.querySelector("#footer");
//     new Header($header);
//     new Footer($footer);
//   }
// }

new App();
