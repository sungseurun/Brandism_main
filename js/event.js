
// 마우스 휠 중복 과다 제어 막기 ==> 휠 이벤트 타임 딜레이 주기

let timeout;
 
// 휠이벤트가 발생하면
window.onwheel = function(){
  clearTimeout(timeout);   // 이전 휠 이벤트 제거
  timeout = setTimeout(function(){  // 다시 휠 이벤트 발생  0.1초 후
      // to do
  }, 100);
};



// 구글에서 찾은거 활용--->>

window.addEventListener('wheel', function (e) {

  window.onwheel = function(){

    clearTimeout(timeout);  // 이전 휠 이벤트 제거

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
  
    },100);  // 0.1초 후
  };
});

      // Test. 브라우저에서 휠 횟수 볼 수 있게함 ( 추후 삭제 )
      // document.getElementById( 'wheelNumberPrint' ).value = wheelNumber;
      // document.getElementById( 'wheelNumberPrint2' ).value = wheelNumber;
      // document.getElementById( 'wheelNumberPrint3' ).value = wheelNumber;


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


// 섹션1에 이벤트 넣기
function section1Event(){
  
  // 휠넘버와 휠플래그에 맞춰서 텍스트가 크기가 작아지고 위로 올라가기 이벤트 
  let array = [1, 0.8, 0.6, 0.4, 0.22];           // 비율 값
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

  let startScale = "";
  let endScale = "";
  let onceScale = "";
  let twiceScale = "";
  let threeScale = "";


  if(wheelFlag=='down'){  
    startScale = 'scale(1)' + 'translateY(0)';
    onceScale  = 'scale(0.7)' + 'translateY(-400px)';
    twiceScale = 'scale(0.5)' + 'translateY(-750px)';
    threeScale = 'scale(0.35)' + 'translateY(-1000px)';
    endScale = 'scale(0.25)' + 'translateY(-1200px)';
  } else {  
    startScale = 'scale(0.25)' + 'translateY(-1200px)';
    onceScale  = 'scale(0.35)' + 'translateY(-1000px)',
    twiceScale = 'scale(0.5)' + 'translateY(-750px)',
    threeScale = 'scale(0.7)' + 'translateY(-400px)',
    endScale = 'scale(1)' + 'translateY(0)';
  }

 // document.getElementById('sec1_scale');
  const elementB = document.getElementById('sec1_scale');
  
  elementB.animate (
    {
      transform: [
        startScale,
        onceScale,
        twiceScale,
        threeScale,
        endScale
      ]
  },
  {
    duration: 2000,         // 밀리초지정
    easing: 'ease-in-out',  // 가속도timing-function (서서히 종료)
    fill: 'forwards'        // 종료후 (유지)
  }
);

  console.log(wheelFlag);
  console.log('scale' + beforeScale);
  console.log('scale' + afterScale);
  console.log(beforeTranslate);
  console.log(afterTranslate); 
}

function section11Event() {

  // 브랜디즘 밑줄 부분 이벤트 ( 아이디만 토글로 불러와서 css 적용 - setTimeout으로 딜레이 줌 )
  let brush = document.getElementById('sec12_brush').classList.contains("brush");
  
  if(!brush){
    document.getElementById('sec12_brush').classList.toggle("brush");
  } else {
    document.getElementById('sec12_brush').classList.toggle("brush");
    setTimeout(function() {
      document.getElementById('sec12_brush').classList.toggle("brush");  
    }, 100);
  }

  // 브러쉬 이미지를 슬라이드 느낌으로
  const element = document.getElementById('brush');
  element.animate (
    [
      {opacity: 0, transform: 'translateX(-150px)'},
      {opacity: 1, transform: 'translateX(-10px)'}
    ],
    {
      duration: 1500,
      easing: 'ease',
      fill: 'forwards'
    }
  );
};

// 푸터 로고이미지
function section12Event(){

  // 휠넘버와 휠프래그에 맞춰 로고이미지 3배 비율로 커지기
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
    beforeTranslateX = arrayPixelX[wheelNumber-16];   // 0 ==> 0
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
