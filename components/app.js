import Header from "./Header.js";
import Footer from "./Footer.js";
import UpButton from "./UpButton.js";

function App() {
  const $header = document.querySelector("#header");
  const $footer = document.querySelector("#footer");
  const $UpButton = document.querySelector("#upButton");
  new Footer($footer);
  new Header($header);
  new UpButton($UpButton);
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
