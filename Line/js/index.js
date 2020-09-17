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

const imgarr = [
  "./img/mline1.jpeg",
  "./img/mline2.jpeg",
  "./img/mline3.jpeg",
  "./img/mline4.jpeg",
];

const mline1 = document.querySelector(".mline1");
const mline2 = document.querySelector(".mline2");
const mline3 = document.querySelector(".mline3");
const mline4 = document.querySelector(".mline4");
if (window.innerWidth <= 480) {
  mline1.src = imgarr[0];
  mline2.src = imgarr[1];
  mline3.src = imgarr[2];
  mline4.src = imgarr[3];
}
