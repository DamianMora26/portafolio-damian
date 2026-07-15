const header = document.querySelector(".topbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 24) {
    header.style.borderBottom = "1px solid rgba(255,255,255,0.1)";
    header.style.background = "rgba(11,15,20,0.72)";
  } else {
    header.style.borderBottom = "0";
    header.style.background = "transparent";
  }
});
