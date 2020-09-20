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
