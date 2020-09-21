const hambug = document.querySelector(".hambug");
const xbtn = document.querySelector(".xbtn");
const mobile__wrap = document.querySelector(".mobile__wrap");

hambug.addEventListener("click", () => {
  mobile__wrap.classList.add("on");
  hambug.classList.add("off");
  xbtn.classList.add("on");
});

xbtn.addEventListener("click", () => {
  mobile__wrap.classList.remove("on");
  hambug.classList.remove("off");
  xbtn.classList.remove("on");
});

const img4 = "./img/line4.jpeg";
const mimg4 = "./img/mline4.jpeg";

const imgb = document.querySelector(".img4");

window.onresize = () => {
  if (window.innerWidth <= 1023) {
    imgb.style.backgroundImage =
      "url(https://d.line-scdn.net/stf/line-lp/SP_LINE_Store_ko_1231231.png)";
  } else {
    imgb.style.backgroundImage =
      "url(https://d.line-scdn.net/stf/line-lp/PC_LINE_Store_ko_1231231.png)";
  }
};
