const SHOWING_CLASS = "showing";
const firstSlide = document.querySelector(".slider__item:first-child");
const BTN_CLASS = "btn_on";
const firstBtn = document.querySelector(".btn_off:first-child");

function slide() {
  const currentSlide = document.querySelector(`.${SHOWING_CLASS}`);
  const currentBtn = document.querySelector(`.${BTN_CLASS}`);

  if (currentSlide) {
    // 만약 현재 슬라이드라면
    currentSlide.classList.remove(SHOWING_CLASS); // 현재 슬라이드에서 SHOWING_CLASS를 제거한다
    const nextSlide = currentSlide.nextElementSibling; // 다음 슬라이드를 정의한다.
    currentBtn.classList.remove(BTN_CLASS); //현재 버튼에서 BTN_CLASS를 제거한다
    const nextBtn = currentBtn.nextElementSibling; //다음 버튼을 정의한다.

    if (nextSlide) {
      //만약 다음 슬라이드가 있다면
      nextSlide.classList.add(SHOWING_CLASS); //다음 슬라이드에 SHOWING_CLASS를 붙인다.
      nextBtn.classList.add(BTN_CLASS); // 다음 버튼에 버튼온을 준다
    } else {
      // 다음 슬라이드가 없다면 =>  5번째 슬라이드라면(마지막 슬라이드라면)
      firstSlide.classList.add(SHOWING_CLASS); // 첫번째 슬라이드에 SHOWING_CLASS를 붙인다.
      firstBtn.classList.add(BTN_CLASS); //첫번째 버튼에 다시 버튼 온을 해준다.
    }
  } else {
    firstSlide.classList.add(SHOWING_CLASS); // html에서 첫번째 슬라이드를 찾는다.  맨앞선택자 위베 변수 확인하기.
    firstBtn.classList.add(BTN_CLASS); //html에서 첫번쨰 버튼을 찾는다. 맨앞선택자 위에 변수 확인하기.
  }
}

function slideTo(event) {
  //   console.log(event);  << 클릭했을떄 이벤트가 실행되는지 확인하기위해 적음.
  const index = event.target.dataset.source;
  // html에 적어준 이벤트가 발생하는 버튼의 data-source를 찾아서 index라는 변수에 넣어준다.
  const slider = document.querySelector(`[data-target="${index}"]`);
  // 속성 선택자를 이용하여 data-target이라는 이미지의 값을 index를 넣어 일치하는걸 찾아준다. 똑같은 이미지와 버튼을 지정하기 위해서.
  document.querySelector("." + BTN_CLASS).classList.remove(BTN_CLASS);
  document.querySelector("." + SHOWING_CLASS).classList.remove(SHOWING_CLASS);
  // 현재 화면에 있는 버튼과 슬라이드의 버튼클래스와 쇼잉클래스를 지워준다. 이유는 버튼 클릭했을때 해당하는걸 보여주기 위해서는 지워줘야한다.
  event.target.classList.add(BTN_CLASS);
  slider.classList.add(SHOWING_CLASS);
  // 이벤트가 발생한 버튼에게 클래스를 추가해준다.
}

// 버튼 클릭했을때를 찾아서 변수로 선언해준다
const btn_click = document.querySelectorAll(".btn_off");

//반복문으로 버튼 클릭했을때 slideTo가 실행 될수 있게 이벤트 리스너를 대기시켜준다.
for (let ck = 0; ck < btn_click.length; ck++) {
  btn_click[ck].addEventListener("click", slideTo);
}

//slide를 적어놓은이유는 인터벌로 할경우 윈도우 로드시 흰색화면으로 대기하기떄문에 적어둠.
slide();

//5초뒤 함수가 실행되며 계속해서 함수가 반복된다.
setInterval(slide, 5000);

let num = true;
let num1 = true;
function prev() {
  event.preventDefault();
  let abc = document.querySelector(".social_ul_wrap .social_li_01");
  let bcd = document.querySelector(".social_ul_wrap .social_li_02");

  if (num === true) {
    abc.style.display = "block";
    bcd.style.display = "none";

    num = false;
  } else if (num === false) {
    abc.style.display = "block";
    bcd.style.display = "none";
    num = true;
  }
}

function next() {
  event.preventDefault();
  let abc = document.querySelector(".social_ul_wrap .social_li_01");
  let bcd = document.querySelector(".social_ul_wrap .social_li_02");

  if (num !== true) {
    abc.style.display = "none";
    bcd.style.display = "block";

    num = true;
  } else if (num === true) {
    abc.style.display = "none";
    bcd.style.display = "block";
    num = false;
  }
}
