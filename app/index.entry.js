import 'reset-css';
import './exterrnal-libs/layout/index.css'
import './index.entry.pcss';
import "./exterrnal-libs/breakpoints/index.css";

document.addEventListener('DOMContentLoaded', () => {

});
document.body.addEventListener('click', (e) => {
  let t = e.target;
  if (getComputedStyle(document.querySelectorAll(`.hero-sm-shown`)[0], null).display !== 'none') return; // если мобильная версия, то не переключаемся
  while (!t.classList.contains("hero-card")) {
    t = t.parentNode;
    if (t.tagName === "BODY") return;
  }
  [].forEach.call(document.querySelectorAll(".hero-card.active"), el => {
    el.classList.remove("active");
  });
  t.classList.add("active");
  const hero = t.getAttribute('data-hero');
  [].forEach.call(document.querySelectorAll(".hero-desc.active"), el => {
    el.classList.remove("active");
  });
  document.querySelectorAll(`.hero-desc[data-hero-target="${hero}"]`)[0].classList.add("active");
});