window.onload = function () {
  //메뉴 토글
  function showMenu() {
    const open_nav = document.getElementById("navOpen");
    const close_nav = document.getElementById("navClose");
    const sidebar = document.querySelector("#sidebar");
    open_nav.addEventListener("click", () => {
      // if(document.getElementById('topMenu').classList.contains('pc-only'))
      document.getElementById("topMenu").classList.remove("header__pc-only");
    });
    close_nav.addEventListener("click", () => {
      document.getElementById("topMenu").classList.add("header__pc-only");
    });
  }
  showMenu();
  //위로가기
  const scrollBtn = document.getElementById("goTop");
  const scrollBtnDisplay = () => {
    window.addEventListener("scroll", () => {
      if (document.querySelector("html").scrollTop > 100) {
        scrollBtn.style.display = "block";
      } else {
        scrollBtn.style.display = "none";
      }
    });
  };
  const scrollWindow = function () {
    if (window.scrollY != 0) {
      setTimeout(function () {
        window.scrollTo(0, window.scrollY - 50);
        scrollWindow();
      }, 10);
    }
  };
  scrollBtnDisplay();
  scrollBtn.addEventListener("click", scrollWindow);
};
