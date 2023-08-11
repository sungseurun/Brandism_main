import Component from "./core/Component.js";

export default class Header extends Component {
  template() {
    return `
        <header>
            <h1>
                <a href="/">
                    <img src="../img/header-title-logo.svg" alt="로고" />
                </a>
            </h1>
            <nav>
                <button id="navOpen" class="header__mobile-only">
                    <img src="../img/header__nav-menu-button.svg" alt="메뉴버튼" />
                </button>
                <ul id="topMenu" class="header__pc-only header__top-menu">
                    <li class="header__mobile-only header__nav-close-button">
                        <button id="navClose">
                            <img src="../img/header__nav-close-button.svg" alt="닫기" />
                        </button>
                    </li>
                    <li><a href="../pages/about.html">About</a></li>
                    <li><a href="../pages/portfolio.html">Portfolio</a></li>
                    <li><a href="../pages/our.html">Our</a></li>
                    <li><a href="../pages/contact.html">Contact</a></li>
                </ul>
            </nav>
        </header>
    `;
  }
}
