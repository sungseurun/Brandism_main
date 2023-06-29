
// 마우스 휠 중복 과다 제어 막기 ==> 휠 이벤트 타임 딜레이 주기

var timeout;
 
// 휠이벤트가 발생하면
window.onwheel = function(){
    clearTimeout(timeout);   // 이전 휠 이벤트 제거
    timeout = setTimeout(function(){  // 다시 휠 이벤트 발생  0.1초 후
        // to do
    }, 100);
};
