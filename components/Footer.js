import Component from "./core/Component.js";

export default class Footer extends Component {
  template() {
    return `
    <footer>
        <h2 class="footer__title">
            <img src="img/footer-title-logo.svg" alt="브랜디즘 로고">
        </h2>
        <div class="pc-flex">
            <div class="footer__address_wrap">
                <h4>Address</h4>
                <address>
                    서울특별시 강남구 테헤란로10길9 그랑프리빌딩 6층 <br class="mobile-only"/> 
                    (지번 : 서울특별시 강남구 역삼동 823-42 그랑프리빌딩 6층)
                </address>
            </div>
            <div class="footer__mail_wrap">
                <h4>Mail</h4>
                <a href="mailto:brandinglize@brandinglize.com">brandinglize@brandinglize.com</a>
            </div>
        </div>
        <a id='footer__phone' href="tel:026202-3399">02-6101-3399</a>
        <p class="footer__copyright">Copyright BRANDISM STUDIO All rights reserved.</p>
    </footer>
    `;
  }
}
