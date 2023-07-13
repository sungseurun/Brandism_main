
document.addEventListener("DOMContentLoaded", function(){
  allSectionNone(); 
  singleSectionDisplay( '1' );  // 1개만 보이게 한다
  // setTimeout();
});

// 탑버튼 이벤트
function sectionEvent(){
  if (wheelNumber >=0 ){
    allSectionNone();
    document.getElementById('topBtn').style.visibility = 'visible';
  }
}

let Top = document.getElementById('topBtn');

// window.addEventListener('scroll', function(e){
//   if (this.scrollY > 200) {
//     Top.classList.add('on');
//   } else {
//     Top.classList.remove('on');
//   }
// });

// 탑버튼 클릭하면 위로가는 이벤트 
// Top.addEventListener('click', function(e){
//   e.preventDefault();
//   window.scrollTo({ top:0, behavior: 'smmooth' });
// });

// 우린 탑버튼 클릭하면 섹션1이 보이게 하는 이벤트
// visivility: hidden;

Top.addEventListener('click', function(e){
  location.href = "index.himl";
  e.preventDefault();
  window.onwheel({ visivility:visible, });
});