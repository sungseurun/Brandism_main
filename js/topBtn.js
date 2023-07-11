
// 탑버튼 이벤트

let Top = document.getElementById('topBtn');

// window.addEventListener('scroll', function(e){
//   if (this.scrollY > 200) {
//     Top.classList.add('on');
//   } else {
//     Top.classList.remove('on');
//   }
// });

// 탑버튼 클릭하면 위로가는 이벤트 
Top.addEventListener('click', function(e){
  e.preventDefault();
  window.scrollTo({ top:0, behavior: 'smmooth' });
});

