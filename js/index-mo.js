// 자바스크립트 모바일 터치이벤트 touchstart / touchmove /touchend 


/* [html 최초 로드 및 이벤트 상시 대기 실시] */
// window.onload = function() {
  // [터치 등록 이벤트 호출]
  // main();
// };

window.addEventListener("load", function(){
  main();
});

// 모바일 X,Y 좌표값 체크
let xStart;
let xEnd;
let yStart;
let yEnd;

/* [터치 이벤트 등록 및 터치 상황 확인 함수] */
function main(){    		
  document.addEventListener("touchstart", handleStart, false);
  document.addEventListener("touchmove", handleMove, false);
  document.addEventListener("touchend", handleEnd, false);


  // [모바일 : 터치 시작 내부 함수 - (주의) 클릭 이벤트와 겹칠 수 있음]
  function handleStart(evt) {
    // body 스크롤 막음 [바디영역에서 스크롤있으면 터치 이벤트 안먹힙니다]
    BodyScrollDisAble();

    let startX = evt.changedTouches[0].clientX;
    let startY = evt.changedTouches[0].clientY;
    xStart = startX;
    yStart = startY;
  };

  // [모바일 : 터치 이동 내부 함수]
  function handleMove(evt) {
    // body 스크롤 막음 [바디영역에서 스크롤있으면 터치 이벤트 안먹힙니다]
    BodyScrollDisAble();

    // var moveX = evt.changedTouches[0].clientX;
    // var moveY = evt.changedTouches[0].clientY;

  };

  // [모바일 : 터치 종료 내부 함수] 
  function handleEnd(evt) {
    
    // 바디 스크롤 허용 
    BodyScrollAble();

    // 좌표값 확인 
    let endX = evt.changedTouches[0].clientX;
    let endY = evt.changedTouches[0].clientY;
    xEnd = endX;
    yEnd = endY;

    clearTimeout(timeout);  // 이전 무브 이벤트 제거

    timeout = setTimeout(function(){  // 다시 휠 이벤트 발생
      let currentX = xStart - xEnd;
      let currentY = yStart - yEnd;

      if( currentX > 1 || currentY > 1){
        wheelNumber++;
        beforeWheelNumber = wheelNumber-1;  
        wheelFlag = 'down';
      } else {
        if (wheelNumber > 0) {
          wheelNumber--;
          wheelFlag = 'up';
        } else {
          return false;
        }
        beforeWheelNumber = wheelNumber+1;
      }

      sectionEvent();  // 각 섹션들이 이벤트 작동되도록.
      
      console.log("beforeWheelNumber:" + beforeWheelNumber);
      console.log("wheelNumber:" + wheelNumber);
  
    },100);  // 0.1초 후
  };

};


/* [body 영역 스크롤 관리 부분] */
function BodyScrollDisAble(){
  document.body.style.overflow = "hidden"; //스크롤 막음
};		
function BodyScrollAble(){
  document.body.style.overflow = "auto"; //스크롤 허용
};