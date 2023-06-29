'use strict'; // 순수 자바스크립트 사용 - 좀 더 빠른 자바스크립트 성능개선

document.addEventListener("DOMContentLoaded", function(){
  allSectionNone(); 
  singleSectionDisplay( '1' );  // 1개만 보이게 한다
  // setTimeout();
});

/////// 한 페이지에서 섹션 12개가 생성되는 자바스크립트 ///////

let sectionNum = 1;        // 섹션 번호
let wheelNumber = 0;       // 섹션에서의 휠 횟수
let wheelFlag="";          // 휠 업·다운
let beforeWheelNumber = 0; // 이전 휠 번호

let timeout;  // 휠 이벤트 시간제한 두기

window.addEventListener('wheel', function (e) {

  clearTimeout(timeout);  // 이전 휠 이벤트 제거

  window.onwheel = function(){
    timeout = setTimeout(function(){  // 다시 휠 이벤트 발생
      if( e.deltaY > 1 ){
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
    
      // Test. 브라우저에서 휠 횟수 볼 수 있게함 ( 추후 삭제 )
      // document.getElementById( 'wheelNumberPrint' ).value = wheelNumber;
      // document.getElementById( 'wheelNumberPrint2' ).value = wheelNumber;
      // document.getElementById( 'wheelNumberPrint3' ).value = wheelNumber;
    },100);  // 0.28초 후
  };
})


// 섹션에 이벤트 주기 ( 휠 횟수, 휠 업·다운)
function sectionEvent(){

  // 휠횟수에 따른 event 속성 
  if(wheelNumber >= 0 && wheelNumber < 5 ){    // 휠횟수가 0~4 일 때 작동
    if(wheelNumber==4 && wheelFlag=='up'){}   // 휠횟수가 4일 때 업이 되면 하고
    else {                                   // 아니면 안된다.
      section1Event();  
    }
  }
  if (wheelNumber >= 4 && wheelNumber < 5 ) {                               
    section2Event();
  } 
  if (wheelNumber >= 5 && wheelNumber < 6) {
    section3Event();
  } 
  if (wheelNumber >= 6 && wheelNumber < 7) {
    section4Event();
  } 
  if (wheelNumber >= 7 && wheelNumber < 8) {
    section5Event();
  } 
  if (wheelNumber >= 8 && wheelNumber < 9) {
    section6Event();
  } 
  if (wheelNumber >= 9 && wheelNumber < 10) {
    section7Event();
  } 
  if (wheelNumber >= 10 && wheelNumber < 11) {
    section8Event();
  }
  if (wheelNumber >= 11 && wheelNumber < 12) {
    section9Event();
  } 
  if (wheelNumber >= 12 && wheelNumber < 13) {
    section10Event();
  } 
  if (wheelNumber >= 13 && wheelNumber < 14) {
    section11Event();
  } 
  if (wheelNumber >= 14 && wheelNumber < 15) {
    section12Event();
  } 
  if (wheelNumber >= 15 && wheelNumber < 17) {  // 휠횟수 15에서 18일 때 발생하는데
    section13Event();
  } 
  if (wheelNumber >= 17 && wheelNumber < 18) {  // 휠횟수 15에서 18일 때 발생하는데
    console.log("beforeWheelNumber:"+beforeWheelNumber);
    section13Event();
    if(beforeWheelNumber==16){
      section14Event();
    }
  } 
  if (wheelNumber >= 18 && wheelNumber < 19) {  // 휠횟수 15에서 18일 때 발생하는데
    section13Event();
    section15Event();
  } 

  // wheelNumber값에 따라 섹션의 visibility 속성 결정
  if (wheelNumber >= 0 && wheelNumber < 4){   // wheelNumber 0~3일 때 1번 섹션만 노출(글자 줄어들기)
    allSectionNone();
    document.getElementById( 'section1' ).style.visibility = 'visible';
  } else if (wheelNumber >= 4 && wheelNumber < 5){   // wheelNumber 4일 때 1,2번 섹션 동시노출
    allSectionNone();
    document.getElementById( 'section1' ).style.visibility = 'visible';
    document.getElementById( 'section2' ).style.visibility = 'visible';
  } 
  else if (wheelNumber >= 5 && wheelNumber < 6){   
    allSectionNone();
    document.getElementById( 'section3' ).style.visibility = 'visible';
  } 
  else if (wheelNumber >= 6 && wheelNumber < 7){   
    allSectionNone()
    document.getElementById( 'section4' ).style.visibility = 'visible';
  }
  else if (wheelNumber >= 7 && wheelNumber < 8){  
    allSectionNone();
    document.getElementById( 'section5' ).style.visibility = 'visible';
  }
  else if (wheelNumber >= 8 && wheelNumber < 9){  
    allSectionNone();
    document.getElementById( 'section6' ).style.visibility = 'visible';
  }
  else if (wheelNumber >= 9 && wheelNumber < 10){ 
    allSectionNone();
    document.getElementById( 'section7' ).style.visibility = 'visible';
    document.getElementById( 'header' ).style.visibility = 'visible'; // 10 미만일때 헤더 보이게
  }
  else if (wheelNumber >= 10 && wheelNumber < 11){ 
    allSectionNone();
    document.getElementById( 'section8' ).style.visibility = 'visible';
    document.getElementById( 'header' ).style.visibility = 'hidden'; // 섹션8 헤더 안보이게
  }
  else if (wheelNumber >= 11 && wheelNumber < 12){  
    allSectionNone();
    document.getElementById( 'section9' ).style.visibility = 'visible';
    document.getElementById( 'header' ).style.visibility = 'visible'; // 헤더 다시 보이게 
  }
  else if (wheelNumber >= 12 && wheelNumber < 13){
    allSectionNone();
    document.getElementById( 'section10' ).style.visibility = 'visible';
  }
  else if (wheelNumber >= 13 && wheelNumber < 14){ 
    allSectionNone();
    document.getElementById( 'section11' ).style.visibility = 'visible';
  }
  else if (wheelNumber >= 14 && wheelNumber < 15){ 
    allSectionNone();
    document.getElementById( 'section12' ).style.visibility = 'visible';
    document.getElementById( 'header' ).style.visibility = 'visible'; // 헤더 다시 보이게 
  }
  else if (wheelNumber >= 15 && wheelNumber < 17){ 
    allSectionNone();
    document.getElementById( 'section13' ).style.visibility = 'visible';
    document.getElementById( 'header' ).style.visibility = 'hidden'; // 섹션13 헤더 안보이게
    document.getElementById( 'number' ).style.visibility = 'hidden';
    document.getElementById( 'sec13_content' ).style.visibility = 'hidden';
  }
  else if (wheelNumber >= 17 && wheelNumber < 18) {  // sec13-number 휠 17에 나오게 하기
    document.getElementById('number').style.visibility = 'visible';
    document.getElementById( 'sec13_content' ).style.visibility = 'hidden';
  }
  else if (wheelNumber >= 18 && wheelNumber < 19) {  // sec13_content 휠 18에 나오게 하기
    document.getElementById( 'sec13_content').style.visibility = 'visible';
  }

}

// 전체 디스플레이(전체 섹션) none 하기
function allSectionNone(){
  for( let i=1; i<14; i++ ){
    document.querySelector( '.section' + i ).style.visibility = 'hidden';  
  }
} 

// 한개의 섹션 display inline 속성 불러서 보이게하기
function singleSectionDisplay( num ){  // 변수 선언함  ----> ErrorErrorError
  document.querySelector( '.section'+ num ).style.visibility = 'visible';
}

// 헤더가 섹션 8에 닿을 때 로고이미지와 메뉴텍스트 색상 변경
function headerEvent(){

}
// 섹션 1에 이벤트 넣기
function section1Event(){
  
  let array = [1, 0.8, 0.6, 0.4, 0.22];  // 비율 값
  let arrayPixel = [0, -150, -350, -701, -1450];  // 픽셀값 높이(height

  
  let beforeScale=0;
  let afterScale=0;
  let beforeTranslate=0;
  let afterTranslate=0;

  if(wheelFlag=='down'){  
    beforeScale = array[wheelNumber-1];
    afterScale = array[wheelNumber];
    beforeTranslate = arrayPixel[wheelNumber-1];
    afterTranslate = arrayPixel[wheelNumber];
  } 
  else {  
    beforeScale = array[wheelNumber+1];
    afterScale = array[wheelNumber];
    beforeTranslate = arrayPixel[wheelNumber+1];
    afterTranslate = arrayPixel[wheelNumber];
  }

  const element = document.getElementById('sec1_scale');
  element.animate(
    {
      transform: [    // 크기 이벤트 + 세로 높이값 이벤트
      'scale('+beforeScale+')'+' translateY('+beforeTranslate+'px)',  // 시작 값
      'scale('+afterScale+')' +' translateY('+afterTranslate+'px)'   // 종료 값
     ] 
    },
    {
      duration: 1000,         // 밀리초 지정 1초
      easing: 'ease-out',    // 가속도 종류
      fill: 'forwards',     // 종료 시 속성 값 (계속 유지)
    }
  );

  // const element2 = document.getElementById('sec1_img2');
  // element2.animate (
  //   {
  //     transform: [
  //       'rotate(0deg)', 
  //       'rotate(5deg)', 
  //       'rotate(0deg)', 
  //       'rotate(-6deg)', 
  //       'rotate(0deg)'
  //     ]
  //   },
  //   {
  //     duration: 4000,
  //     iterations: Infinity,
  //     easing: 'ease-in-out'
  //   }
  // );

  console.log(wheelFlag);
  console.log('scale' + beforeScale);
  console.log('scale' + afterScale);
  console.log(beforeTranslate);
  console.log(afterTranslate);
  
}

// 섹션 2에 이벤트 넣기
function section2Event(){

  const element = document.getElementById('sec2_fade');

  element.animate (
    [
      {opacity: 0, transform: 'translateY(300px)'},
      {opacity: 0.3 },
      {opacity: 0.7 },
      {opacity: 1, transform: 'none'}
    ],
    {
      duration: 2000,       // 밀리초지정
      easing: 'ease-out',  // 가속도timing-function (서서히 종료)
      fill: 'forwards'    // 종료후 (유지)
    }
  );

}

function section3Event(){

  const element = document.getElementById('sec3_img');
  element.animate (
    {
      transform: [
        'translateY(0)',
        'translateY(-20px)',
        'translateY(-10px)',
        'translateY(0)'
      ]
    },
    {
      duration: 2500,            // 밀리초 지정
      iterations: Infinity,     // 반복 횟수 (계속)
      easing: 'ease-in',       // 가속도timing-function (서서히시작 서서히종료)
    }
  );
  // console.log(sectionNum, '섹션3');

}
function section4Event(){
  //console.log(sectionNum, '섹션4');
}

function section5Event(){ 

  const element = document.querySelector('#sec5_img1');
  element.animate (
    {
      transform: [
        'translateY(0)',
        'translateY(-30px)',
        'translateY(-15px)',
        'translateY(0)',
      ]
    },
    {
      duration: 3000,            // 밀리초 지정
      iterations: Infinity,      // 반복 횟수 (계속)
      // direction: 'alternate',   // 반복 작업 방식
      easing: 'ease-in-out',     // 가속도timing-function (서서히시작 서서히종료)
    }
  );

  const elementE = document.querySelector('#sec5_img2');
  elementE.animate (
    {
      transform: [
        'translateY(-30px)',
        'translateY(0)',
        'translateY(15px)',
        'translateY(0)',
        'translateY(-30px)',
      ]
    },
    {
      duration: 3500,            // 밀리초 지정
      iterations: Infinity,      // 반복 횟수 (계속)
      easing: 'ease-in-out',     // 가속도timing-function (서서히시작 서서히종료)
    }
  );
  console.log(sectionNum, '섹션5');
}

function section6Event(){

  const element = document.getElementById('sec6_img');
  element.animate (
    {
      transform: [
        'translateY(0)',
        'translateY(-15px)',
        'translateY(0)',
        'translateY(15px)',
        // 'translateY(0)'
      ]
    },
    {
      duration: 2500,             // 밀리초 지정
      iterations: Infinity,      // 반복 횟수 (계속)
      direction: 'alternate',   // 반복 작업 방식
      easing: 'ease-in',       // 가속도timing-function (서서히시작 서서히종료)
    }
  );

  //console.log(sectionNum, '섹션6');
}

function section7Event(){
  //console.log(sectionNum, '섹션7');
}

function section8Event(){  

  const element = document.getElementById('twinkle');

  element.animate (
    {
      transform: [
        'rotate(0deg)', 'rotate(3deg)', 'rotate(0deg)', 'rotate(-4deg)', 'rotate(0deg)'
      ]
    },
    {
      duration: 3000,
      iterations: Infinity,
      easing: 'ease-in-out'
    }
  );

  console.log(sectionNum, "섹션8");
}

function section9Event(){

  const element = document.getElementById('sec9_img');

  /////////////////////////////////////////
  // const elementb = document.getElementById('section9');

  // elementb.animate (
  //   {
  //     transform: [
  //       'rotate(0deg)', 
  //       'rotate(360deg)', 
  //       // 'rotate(360deg)',
  //     ]
  //   },
  //   {
  //     duration: 1000,            // 밀리초 지정
  //     direction: 'alternate',   // 반복 작업 방식
  //     easing: 'ease-in',     // 가속도timing-function (서서히시작 서서히종료)
  //   }
  // );

///////////////////////////////////////////
  element.animate (
    {
      transform: [
        'rotate(0deg)', 
        'rotate(360deg)', 
        // 'rotate(360deg)',
      ]
    },
    {
      duration: 1000,            // 밀리초 지정
      direction: 'alternate',   // 반복 작업 방식
      easing: 'ease-in',     // 가속도timing-function (서서히시작 서서히종료)
    }
  );
}

function section10Event(){

  const element = document.getElementById('sec10_img');

  element.animate (
    {
      transform: [
        'rotate(0deg)', 
        'rotate(360deg)', 
        'rotate(360deg)',
      ]
    },
    {
      duration: 1000,    // 밀리초 지정
      easing: 'ease'    // 가속도 종료
    }
  );
  //console.log(sectionNum);
}

function section11Event(){

  const element = document.getElementById('sec11_img1');
  element.animate (
    {
      transform: [
        'translate(150px, 90px)', 
        'translate(100px, 70px)',
        'translate(40px, 30px)',
        'translate(0)' 
      ]
    },
    {
      duration: 1000,    // 밀리초 지정
      easing: 'ease'    // 가속도 종료
    }
  );

  const elementE = document.getElementById('sec11_img2');
  elementE.animate (
    {
      transform: [
        'translate(-150px, -90px)', 
        'translate(-100px, -70px)',
        'translate(-40px, -30px)',
        'translate(0)'
      ]
    },
    {
      duration: 1000,      // 밀리초 지정
      easing: 'ease'      // 가속도 종료
    }
  );
}

function section12Event(){

  // 브랜디즘 밑줄 부분 이벤트 (아이디만 토글로 불러와서 css 적용)
  document.getElementById('sec12_decoLine').classList.toggle("after");

  // 오브젝트 이미지 서서히 나타나기 이벤트
    document.getElementById('sec12_img1').animate(
    [  // keyframes
      {opacity: 0},
      // {opacity: 0.1},
      {opacity: 1}
    ],
    {  // options
      duration: 3000,       // 밀리초지정
      easing: 'ease-out',  // 가속도timing-function (서서히 종료)
      fill: 'forwards'    // 종료후 (유지)
    }
  );

  document.getElementById('sec12_img2').animate(
    [ 
      {opacity: 0},
      // {opacity: 0.1},
      {opacity: 1}
    ],{ 
      duration: 3000,       // 밀리초지정
      easing: 'ease-out',  // 가속도timing-function (서서히 종료)
      fill: 'forwards'    // 종료후 (유지)
    }
  );
}

// 푸터 로고이미지
function section13Event(){

  // 로고이미지 3배 비율로 커지기
  const scaleResize = document.getElementById('logo');
  
  let array = [1, 1.5, 2.2, 3];           // 비율 값
  let arrayPixelX = [0, 30, 60, 90];   // 비율 값
  let arrayPixelY = [0, 25, 27, 30];  // 비율 값
  
  let beforeScale=0;
  let afterScale=0;
  let beforeTranslateX=0;
  let afterTranslateX=0;
  let beforeTranslateY=0;
  let afterTranslateY=0;

  if(wheelFlag=='down'){  // 휠넘버 16부터 
    beforeScale = array[wheelNumber-16];  // 0 ==> 1
    afterScale = array[wheelNumber-15];   // 1 ==> 1.5
    beforeTranslateX = arrayPixelX[wheelNumber-16];  // 0 ==> 0
    afterTranslateX = arrayPixelX[wheelNumber-15];   // 1 ==> 30
    beforeTranslateY = arrayPixelY[wheelNumber-16]; // 0 ==> 0
    afterTranslateY = arrayPixelY[wheelNumber-15];  // 1 ==> 25
  } 
  else {  
    beforeScale = array[wheelNumber-14];  // 2 ==> 2
    afterScale = array[wheelNumber-15];   // 1 ==> 1.5
    beforeTranslateX = arrayPixelX[wheelNumber-14]; // 2 ==> 60
    afterTranslateX = arrayPixelX[wheelNumber-15];  // 1 ==> 30
    beforeTranslateY = arrayPixelY[wheelNumber-14]; // 2 ==> 27
    afterTranslateY = arrayPixelY[wheelNumber-15];  // 1 ==> 25
  }

  scaleResize.animate(
    {
      transform: [    // 크기 이벤트 + 세로 높이값 이벤트
      'scale('+beforeScale+')'+' translateX('+beforeTranslateX+'px)'+' translateY('+beforeTranslateY+'px)',  // 시작 값
      'scale('+afterScale+')'+' translateX('+afterTranslateX+'px)'+' translateY('+afterTranslateY+'px)'   // 종료 값
     ] 
    },
    {
      duration: 1000,         // 밀리초 지정 1초
      easing: 'ease',        // 가속도 종류
      fill: 'forwards',     // 종료 시 속성 값 (계속 유지)
    }
  );

  // console.log(wheelFlag);
  // console.log('scale' + beforeScale);
  // console.log('scale' + afterScale);
  // console.log('translateX' + beforeTranslateX);
  // console.log('translateX' + afterTranslateX);
  // console.log('translateY' + beforeTranslateY);
  // console.log('translateY' + afterTranslateY);
}


// 푸터 number 이미지
function section14Event(){

  let keyframes1 = [
    {opacity: 0},
    {opacity: 0.3},
    {opacity: 1}
  ];
  let options1 = {
      duration: 2000,     // 밀리초지정
      easing: 'ease-out', // 가속도timing-function (서서히 종료)
      fill: 'forwards'    // 종료후 (유지)
  };  
  document.getElementById('number').animate(keyframes1, options1);

}

// 푸터 content 텍스트
function section15Event(){

  let keyframes2 = [
    {opacity: 0},
    {opacity: 0.1},
    {opacity: 0.3},
    {opacity: 1}
  ];
  let options2 = {
    // delay: 3000, // delay는 오류가 좀 있음,,
      duration: 3500,     // 밀리초지정
      easing: 'ease-out', // 가속도timing-function (서서히 종료)
      fill: 'forwards'    // 종료후 (유지)
  };  
  document.getElementById('sec13_content').animate(keyframes2, options2);
}




