'use strict'; // 순수 자바스크립트 사용 - 좀 더 빠른 자바스크립트 성능개선


    // 탑버튼 위로가기
    const scroll = () => {
      const scrollBtn = document.getElementById('goTop')
      const scrollBtnDisplay = () => {
          window.addEventListener('scroll', () => {
              if (document.querySelector('html').scrollTop > 100) {
              document.getElementById('goTop').style.display = "block";
              } else {
              document.getElementById('goTop').style.display = "none";
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
    }
  
    scroll();