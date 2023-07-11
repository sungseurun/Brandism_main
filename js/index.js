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
    },100);  // 0.1초 후
  };
})


// 섹션에 이벤트 주기 ( 휠 횟수, 휠 업·다운)
function sectionEvent(){

  // 휠횟수에 따른 event 속성 
  if(wheelNumber >= 0 && wheelNumber < 2 ){    // 휠횟수가 0~1 일 때 작동
     if(wheelNumber==1 && wheelFlag=='up'){}   // 휠넘버가 1인데 up일 때 업일 때 이벤트 발생안함
     else {                                   // 아니면 안된다.
      section1Event();  
     }
  }
  if (wheelNumber >= 1 && wheelNumber < 2 ) {                               
    // if(wheelNumber==1 && wheelFlag=='up'){}   // 휠횟수가 1일 때 업이 되면 하고
    // else {                                   // 아니면 안된다.
      section2Event();  
    // }
  } 
  if (wheelNumber >= 2 && wheelNumber < 3) {
    section3Event();
  } 
  if (wheelNumber >= 3 && wheelNumber < 4) {
    section4Event();
  } 
  if (wheelNumber >= 4 && wheelNumber < 5) {
    section5Event();
  } 
  if (wheelNumber >= 5 && wheelNumber < 6) {
    section6Event();
  } 
  if (wheelNumber >= 6 && wheelNumber < 7) {
    section7Event();
  } 
  if (wheelNumber >= 7 && wheelNumber < 8) {
    section8Event();
  } 
  if (wheelNumber >= 8 && wheelNumber < 9) {
    section9Event();
  } 
  if (wheelNumber >= 9 && wheelNumber < 10) {
    section10Event();
  } 
  if (wheelNumber >= 10 && wheelNumber < 11) {
    section11Event();
  } 
  if (wheelNumber >= 11 && wheelNumber < 12) {  // 휠횟수 15에서 18일 때 발생하는데
    if (wheelNumber==11 && wheelFlag =='up'){}
    else {
      section12Event();
      section13Event();
      section14Event();
    }
  } 

  // wheelNumber값에 따라 섹션의 visibility 속성 결정
  if (wheelNumber >= 0 && wheelNumber < 1){   // wheelNumber 0일 때 1번 섹션만 노출 (메인슬라이드)
    allSectionNone();
    document.getElementById( 'section1' ).style.visibility = 'visible';
  } else if (wheelNumber >= 1 && wheelNumber < 2){   // wheelNumber 1일 때 1,2번 섹션 동시노출
    allSectionNone();
    document.getElementById( 'section1' ).style.visibility = 'visible';
    document.getElementById( 'section2' ).style.visibility = 'visible';
  } 
  else if (wheelNumber >= 2 && wheelNumber < 3){   
    allSectionNone();
    document.getElementById( 'section3' ).style.visibility = 'visible';
  } 
  else if (wheelNumber >= 3 && wheelNumber < 4){   
    allSectionNone()
    document.getElementById( 'section4' ).style.visibility = 'visible';
  }
  else if (wheelNumber >= 4 && wheelNumber < 5){  
    allSectionNone();
    document.getElementById( 'section5' ).style.visibility = 'visible';
  }
  else if (wheelNumber >= 5 && wheelNumber < 6){  
    allSectionNone();
    document.getElementById( 'section6' ).style.visibility = 'visible';
  }
  else if (wheelNumber >= 6 && wheelNumber < 7){ 
    allSectionNone();
    document.getElementById( 'section7' ).style.visibility = 'visible';
  }
  else if (wheelNumber >= 7 && wheelNumber < 8){  
    allSectionNone();
    document.getElementById( 'section8' ).style.visibility = 'visible';
    // document.getElementById( 'header' ).style.visibility = 'visible'; // 헤더 다시 보이게 
  }
  else if (wheelNumber >= 8 && wheelNumber < 9){
    allSectionNone();
    document.getElementById( 'section9' ).style.visibility = 'visible';
  }
  else if (wheelNumber >= 9 && wheelNumber < 10){ 
    allSectionNone();
    document.getElementById( 'section10' ).style.visibility = 'visible';
  }
  else if (wheelNumber >= 10 && wheelNumber < 11){ 
    allSectionNone();
    document.getElementById( 'section11' ).style.visibility = 'visible';
    document.getElementById( 'header' ).style.visibility = 'visible'; // 헤더 다시 보이게 
  }
  else if (wheelNumber >= 11 && wheelNumber < 12){ 
    allSectionNone();
    document.getElementById( 'section12' ).style.visibility = 'visible';
    document.getElementById( 'header' ).style.visibility = 'hidden'; // 섹션13 헤더 안보이게
    // document.getElementById('number').style.visibility = 'visible';
    // document.getElementById( 'sec13_content').style.visibility = 'visible';
  }

  // else if (wheelNumber >= 13 && wheelNumber < 14) {  // sec13-number 휠 17에 나오게 하기
  //   document.getElementById('number').style.visibility = 'visible';
  //   document.getElementById( 'sec13_content' ).style.visibility = 'hidden';
  // }
  // else if (wheelNumber >= 18 && wheelNumber < 19) {  // sec13_content 휠 18에 나오게 하기
  //   document.getElementById( 'sec13_content').style.visibility = 'visible';
  // }

}

// 전체 디스플레이(전체 섹션) none 하기
function allSectionNone(){
  for( let i=1; i<13; i++ ){
    document.querySelector( '.section' + i ).style.visibility = 'hidden';  
  }
} 

// 한개의 섹션 display inline 속성 불러서 보이게하기
function singleSectionDisplay( num ){  // 변수 선언함  ----> ErrorErrorError
  document.querySelector( '.section'+ num ).style.visibility = 'visible';
}

// 섹션 1에 이벤트 넣기
function section1Event(){

  let beforeScale = "";
  let afterScale = "";
  let onceScale  = "";
  let twiceScale = "";
  let threeScale = "";


  if(wheelFlag=='down'){  
    beforeScale = 'scale(1)' + 'translate(0)',
    onceScale  = 'scale(0.7)' + 'translate(-30px, -400px)',
    twiceScale = 'scale(0.5)' + 'translate(-100px, -830px)',
    threeScale = 'scale(0.35)' + 'translate(-170px, -1200px)',
    afterScale = 'scale(0.2)' + 'translate(-300px, -1550px)'
  } else {  
    beforeScale = 'scale(0.2)' + 'translate(-300px, -1550px)',
    onceScale = 'scale(0.35)' + 'translate(-170px, -1200px)',
    twiceScale = 'scale(0.5)' + 'translate(-100px, -830px)',
    threeScale  = 'scale(0.7)' + 'translate(-30px, -400px)',
    afterScale = 'scale(1)' + 'translate(0)'
  }

  // if(wheelFlag=='down'){  
  //   beforeScale = 'scale(1)' + 'translateY(0)',
  //   onceScale  = 'scale(0.7)' + 'translate(0, -430px)',
  //   twiceScale = 'scale(0.5)' + 'translate(0, -790px)',
  //   threeScale = 'scale(0.35)' + 'translate(0, -1170px)',
  //   afterScale = 'scale(0.2)' + 'translate(0, -1550px)'
  // } 
  // else {  
  //   beforeScale = 'scale(0.2)' + 'translate(0, -1550px)',
  //   onceScale  = 'scale(0.35)' + 'translateY(0, -1170px)',
  //   twiceScale = 'scale(0.5)' + 'translateY(0, -790px)',
  //   threeScale = 'scale(0.7)' + 'translateY(0, -430px)',
  //   afterScale = 'scale(1)' + 'translateY(0)'
  // }

 // document.getElementById('sec1_scale');
  const element = document.getElementById('sec1_scale');
  
  element.animate (
    {
      transform: [
        beforeScale,
        onceScale,
        twiceScale,
        threeScale,
        afterScale
      ]
  },
  {
    duration: 2000,         // 밀리초지정
    easing: 'ease-in-out',  // 가속도timing-function (서서히 종료)
    fill: 'forwards'        // 종료후 (유지)
  }
);

  console.log(wheelFlag);
}

// 섹션 2에 이벤트 넣기
function section2Event(){

  // document.getElementById('sec2_fade').style.animationDelay = "1.5s";

  const element = document.getElementById('sec2_fade');

  element.animate (
    [
      {opacity: 0, transform: 'translateY(300px)'},
      {opacity: 0 },
      {opacity: 0 },
      {opacity: 0.3 },
      {opacity: 0.7 },
      {opacity: 1, transform: 'none'}
    ],
    {
      // delay: 1,
      duration: 2000,       // 밀리초지정
      easing: 'ease-out',  // 가속도timing-function (서서히 종료)
      fill: 'forwards'    // 종료후 (유지)
    }
  );

}

function section3Event(){

  const element1 = document.querySelector('#section3');
  element1.animate (
    [
      {opacity: 0},
      {opacity: 1}
    ],
    {
      duration: 1500,          // 밀리초지정
      easing: 'ease-in-out',  // 가속도timing-function (서서히 종료)
      fill: 'forwards'       // 종료후 (유지)
    }
  );

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

  const element1 = document.querySelector('.sec4_text1');
  element1.animate (
    [
      {opacity: 0, transform: 'translateX(32rem)'},
      {opacity: 0 },
      {opacity: 0.1 },
      {opacity: 0.3 },
      {opacity: 1, transform:'none'}
    ],
    {
      duration: 1500,       // 밀리초지정
      easing: 'ease-out',  // 가속도timing-function (서서히 종료)
      fill: 'forwards'    // 종료후 (유지)
    }
  );

  const element2 = document.querySelector('.sec4_text2');
  element2.animate (
    [
      {opacity: 0, transform: 'translateX(-32rem)'},
      {opacity: 0 },
      {opacity: 0.1 },
      {opacity: 0.3 },
      {opacity: 1, transform:'none'}
    ],
    {
      duration: 1500,       // 밀리초지정
      easing: 'ease-out',  // 가속도timing-function (서서히 종료)
      fill: 'forwards'    // 종료후 (유지)
    }
  );
  //console.log(sectionNum, '섹션4');
}

function section5Event(){ 

  const element1 = document.getElementById('sec5_img1');
  element1.animate (
    {
      transform: [
        'translateY(0)',
        'translateY(-30px)',
        'translateY(-15px)',
        'translateY(0)',
      ]
    },
    {
      duration: 3000,              // 밀리초 지정
      iterations: Infinity,       // 반복 횟수 (계속)
      easing: 'ease-in-out',     // 가속도timing-function (서서히시작 서서히종료)
    }
  );

  const element2 = document.getElementById('sec5_img2');
  element2.animate (
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

  const elementO = document.getElementById('sec5_text1');
  elementO.animate (
    [
      {opacity: 0 },
      {opacity: 0.1 },
      {opacity: 0.3 },
      {opacity: 1, transform: 'none'}
    ],
    {
      duration: 1500,       // 밀리초지정
      easing: 'ease-out',  // 가속도timing-function (서서히 종료)
      fill: 'forwards'    // 종료후 (유지)
    }
  );

  const elementP = document.getElementById('sec5_text2');
  elementP.animate (
    [
      {opacity: 0 },
      {opacity: 0 },
      {opacity: 0.2 },
      {opacity: 0.4 },
      {opacity: 1, transform: 'none'}
    ],
    {
      duration: 2500,       // 밀리초지정
      easing: 'ease-out',  // 가속도timing-function (서서히 종료)
      fill: 'forwards'    // 종료후 (유지)
    }
  );

  console.log(sectionNum, '섹션5');
}

function section6Event(){

  const element = document.querySelector('#section6');
  element.animate (
    [
      {opacity: 0.},
      {opacity: 0.1},
      {opacity: 1}
    ],
    {
      duration: 2000,       // 밀리초지정
      easing: 'ease-out',  // 가속도timing-function (서서히 종료)
      fill: 'forwards'    // 종료후 (유지)
    }
  );

  const elementY = document.getElementById('sec6_img');
  elementY.animate (
    {
      transform: [
        'translateY(0)',
        'translateY(-15px)',
        'translateY(0)',
        'translateY(15px)',
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

  // 섹션6에서 섹션7로 바뀔 때 섹션7의 proposal이 아래서 위로 올라가는 이벤트 구현
  const elementA = document.getElementById('sec7_proposal');
  elementA.animate (
    {
      transform : [
        'scale(0.6)' + 'translateY(800px)',
        'scale(1)' + 'translateY(0)'
      ]
    },
    {
      duration: 1000,       // 밀리초지정
      easing: 'ease-out',  // 가속도timing-function (서서히 종료)
      fill: 'forwards'    // 종료후 (유지)
    }
  );

  // 섹션6에서 섹션7로 바뀔 때 섹션7의  contact가 위에서 아래로 내려오는 이벤트 구현
  const elementB = document.getElementById('sec7_contact');
  elementB.animate (
    {
      transform : [
        'scale(1.2)' + 'translateY(-400px)',
        'scale(1)' + 'translateY(0)'
      ]
    },
    {
      duration: 1000,       // 밀리초지정
      easing: 'ease-out',  // 가속도timing-function (서서히 종료)
      fill: 'forwards'    // 종료후 (유지)
    }
  );

  // 섹션6에서 섹션7로 바뀔 때 섹션7의 { 가 벌어지면서 fadeIn 이벤트 구현
  const elementC = document.getElementById('sec7_brace1');
  elementC.animate (
    [
      {opacity: 0, transform: 'translateX(640px)', },
      {opacity: 0 },
      {opacity: 0.1 },
      {opacity: 0.3 },
      {opacity: 1, transform:'none', color:'#DBB27A'}
    ],
    {
      duration: 1500,       // 밀리초지정
      easing: 'ease-out',  // 가속도timing-function (서서히 종료)
      fill: 'forwards'    // 종료후 (유지)
    }
  );
  setTimeout (function (){
    elementC.animate (
      [
        // {color:'#DBB27A'},
        {color: '#fff'}
      ],
      {
        duration: 1500,
        easing: 'ease-in-out',
        fill: 'both'
      }
    )
  }, 2000);

  // 섹션6에서 섹션7로 바뀔 때 섹션7의 } 가 벌어지면서 fadeIn 이벤트 구현
  const elementD = document.getElementById('sec7_brace2');
  elementD.animate (
    [
      {opacity: 0, transform: 'translateX(-640px)'},
      {opacity: 0 },
      {opacity: 0.1 },
      {opacity: 0.3 },
      {opacity: 1, transform:'none', color:'#DBB27A'}
    ],
    {
      duration: 1500,       // 밀리초지정
      easing: 'ease-out',  // 가속도timing-function (서서히 종료)
      fill: 'forwards'    // 종료후 (유지)
    }
  );
  setTimeout (function (){
    elementD.animate (
      [
        {color: '#fff'}
      ],
      {
        duration: 1500,
        easing: 'ease-in-out',
        fill: 'both'
      }
    )
  }, 2000);

  // 섹션6에서 섹션7로 바뀔 때 섹션7의 sec7_text가 서서히 보이는 fadeIn 이벤트 구현

  // setTimeout(function() {
    const elementE = document.getElementById('sec7_text');
    elementE.animate (
      [
        {opacity: 0,},
        {opacity: 0 },
        {opacity: 0 },
        {opacity: 0.1 },
        {opacity: 0.3 },
        {opacity: 1}
      ],
      {
        duration: 3500,       // 밀리초지정
        easing: 'ease-out',  // 가속도timing-function (서서히 종료)
        fill: 'forwards'    // 종료후 (유지)
      }
    );
  // }, 2000);

    // setTime으로 배경색변경이 리셋이 안되는 버그?가 생겨서 만들어줌  
    const element1 = document.getElementById('section7');
    element1.animate (
      [
        {backgroundColor:'#fff'}
      ],
      {
        duration: 0,
        easing: 'ease-in-out',
        fill: 'forwards'
      }
    );
    setTimeout (function (){   // 딜레이 주기
      element1.animate (
        [
          {backgroundColor:'#FFDA55'}
        ],
        {
          duration: 2000,
          easing: 'ease-in-out',
          fill: 'forwards'
        }
      );
    }, 2000);
  
    setTimeout(function(){
      const element2 = document.getElementById('sec7_contact');
      element2.animate (
        {
          transform: [
            'translateX(0)',
            'translateX(-115px)'
          ]
        },
        {
          duration: 1500,
          easing: 'ease-in-out',
          fill: 'forwards'
        }
      );
      console.log("contact 위치변경")
    }, 2200);

    const element3 = document.getElementById('sec7_object');
    element3.animate (
      [
        {opacity: 0 },
        {opacity: 0 },
        {opacity: 0 },
        {opacity: 0.1 },
        {opacity: 1}
      ],
      {
        duration: 4500,       // 밀리초지정
        easing: 'ease-out',  // 가속도timing-function (서서히 종료)
        fill: 'forwards'    // 종료후 (유지)
      }
    );

  console.log(sectionNum, '섹션7');
}

// 섹션7 배경이 흰색에서 노랑색으로 바뀌는 애니메이션 구현
function section7_2Event(){

  // // setTime으로 배경색변경이 리셋이 안되는 버그?가 생겨서 만들어줌  
  // const elementA = document.getElementById('section7');
  // elementA.animate (
  //   [
  //     {backgroundColor:'#fff'}
  //   ],
  //   {
  //     duration: 0,
  //     easing: 'ease-in-out',
  //     fill: 'forwards'
  //   }
  // );
  // setTimeout (function (){   // 딜레이 주기
  //   elementA.animate (
  //     [
  //       {backgroundColor:'#FFDA55'}
  //     ],
  //     {
  //       duration: 2000,
  //       easing: 'ease-in-out',
  //       fill: 'forwards'
  //     }
  //   );
  // }, 2000);

  // setTimeout(function(){
  //   const elementD = document.getElementById('sec7_contact');
  //   elementD.animate (
  //     {
  //       transform: [
  //         'translateX(0)',
  //         'translateX(-115px)'
  //       ]
  //     },
  //     {
  //       duration: 1500,
  //       easing: 'ease-in-out',
  //       fill: 'forwards'
  //     }
  //   );
  //   console.log("contact 위치변경")
 

  //   const elementE = document.getElementById('sec7_object');
  //   elementE.animate (
  //     [
  //       {opacity: 0 },
  //       {opacity: 0.1 },
  //       {opacity: 1}
  //     ],
  //     {
  //       duration: 2500,       // 밀리초지정
  //       easing: 'ease-out',  // 가속도timing-function (서서히 종료)
  //       fill: 'forwards'    // 종료후 (유지)
  //     }
  //   );
  // }, 2200);
};

function section8Event(){

  const elementb = document.getElementById('section8');
  elementb.animate (
    {
      transform: [
        'translateY(1080px,)', 
        'translateY(100px,)',
        'translateY(0)'
      ]
    },
    {
      duration: 3000,            // 밀리초 지정
      direction: 'alternate',   // 반복 작업 방식
      easing: 'ease-in',     // 가속도timing-function (서서히시작 서서히종료)
    }
  );

const elementT = document.getElementById('sec9_img');
elementT.animate (
  {
    transform: [
      'translate(-150px, -90px)', 
      'translate(-100px, -70px)',
      'translate(-40px, -30px)',
      'translate(0)'
    ]
  },
  {
    duration: 1000,    // 밀리초 지정
    easing: 'ease'    // 가속도 종료
  }
);
}

function section9Event(){

  const element = document.getElementById('sec10_img');
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
  //console.log(sectionNum);
}

function section10Event(){

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

function section11Event(){

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
  )

  
  // 브랜디즘 밑줄 부분 이벤트 (아이디만 토글로 불러와서 css 적용 - setTimeout으로 딜레이 줌)
  // let brush = document.getElementById('sec12_brush').classList.contains("brush");
  
  // if(!brush){
  //   document.getElementById('sec12_brush').classList.toggle("brush");
  // } else {
  //   document.getElementById('sec12_brush').classList.toggle("brush");
  //   setTimeout(function() {
  //     document.getElementById('sec12_brush').classList.toggle("brush");  
  //   }, 100);
  // }
  
  // 오브젝트 이미지 서서히 나타나기 이벤트
    document.getElementById('sec12_img1').animate(
    [  // keyframes
      {opacity: 0},
      {opacity: 1}
    ],
    {  // options
      duration: 2000,       // 밀리초지정
      easing: 'ease-out',  // 가속도timing-function (서서히 종료)
      fill: 'forwards'    // 종료후 (유지)
    }
  );

  document.getElementById('sec12_img2').animate(
    [ 
      {opacity: 0},
      {opacity: 1}
    ],{ 
      duration: 2000,       // 밀리초지정
      easing: 'ease-out',  // 가속도timing-function (서서히 종료)
      fill: 'forwards'    // 종료후 (유지)
    }
  );
}

// 푸터 로고이미지
function section12Event(){

  // 로고이미지 3배 비율로 커지기
  const scaleResize = document.getElementById('logo');

  scaleResize.animate(
    {
      transform: [    // 크기 이벤트 + 세로 높이값 이벤트
      'scale(1)' + 'translate(0)',
      'scale(2.8)' + 'translate(90px, 17px)'
     ] 
    },
    {
      duration: 1500,         // 밀리초 지정 1초
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
function section13Event(){

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
function section14Event(){

  let keyframes2 = [
    {opacity: 0},
    {opacity: 0},
    {opacity: 0.3},
    {opacity: 1}
  ];
  let options2 = {
    // delay: 3000, // delay는 오류가 좀 있음,,
      duration: 3000,     // 밀리초지정
      easing: 'ease-out', // 가속도timing-function (서서히 종료)
      fill: 'forwards'    // 종료후 (유지)
  };  
  document.getElementById('sec13_content').animate(keyframes2, options2);
}




