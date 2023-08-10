import Component from "./core/Component.js";

export default class Header extends Component {
  template() {
    return `
        <header>
            <h1>
                <img src="../img/header-title-logo.svg" alt="로고" />  
            </h1>
            <nav>
                <button id="navOpen" class="mobile-only">
                    <img src="../img/header__nav-menu-button.svg" alt="메뉴버튼" />
                </button>
                <ul id="topMenu" class="pc-only header__top-menu">
                    <li class="mobile-only header__nav-close-button">
                        <button id="navClose">
                            <img src="../img/header__nav-close-button.svg" alt="닫기" />
                        </button>
                    </li>
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
