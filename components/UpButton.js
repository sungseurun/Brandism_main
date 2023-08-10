import Component from "./core/Component.js";

export default class UpButton extends Component {
  template() {
    return `
    <button id="goTop" class="aside__move-top-button" >
            <!-- <img src="../img/contact__arrow-button-top.svg"/> -->
            <svg id="arrow-button-top" width="12" height="17" viewBox="0 0 12 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.96013 16.0398L5.96013 1.96015M5.96013 1.96015L0.717695 7.20259M5.96013 1.96015L11.0528 7.05281" stroke="black" stroke-width="1.97872"/>
            </svg>                
    </button>
    `;
  }
}
