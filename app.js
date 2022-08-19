const open_btn = document.querySelector(".open"); //hamburger
const close_btn = document.querySelector(".close"); //close

open_btn.addEventListener("click", () => {
  document.querySelector(".open").style.display = "none";
  document.querySelector(".close").style.display = "flex";
  document.querySelector(".mobile_navigation").style.display = "flex";
});

close_btn.addEventListener("click", () => {
  document.querySelector(".open").style.display = "flex";
  document.querySelector(".close").style.display = "none";
  document.querySelector(".mobile_navigation").style.display = "none";
});
