import Component from "./core/Component.js";

export default class Header extends Component {
  template() {
    return `
    <header>
        <h1>
            <img src="img/header-title-logo.svg" alt="로고" />  
        </h1>
        <nav>
            <button class="mobile-only">
                <img src="img/nav-menu-button.svg" alt="메뉴버튼" />
            </button>
            <ul class="pc-only header__top-menu">
                <li><a href="/about">About</a></li>
                <li><a href="/portfolio">Portfolio</a></li>
                <li><a href="/our">Our</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    </header>
    `;
  }
}
