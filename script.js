let menuVisibility = false;
document.querySelector("nav").style.display = "none";

menuVisibilityToggle = () => {
  menuVisibility = !menuVisibility;
  if (menuVisibility) {
    document.querySelector("nav").style.display = "block";
  } else {
    document.querySelector("nav").style.display = "none";
  }
};

toggleClass = () => {
  let classes = document.querySelector("#icon").classList;
  if (classes.contains("open")) {
    document.querySelector("#icon").classList.remove("open");
  } else {
    document.querySelector("#icon").classList.add("open");
  }
  menuVisibilityToggle();
};

document.querySelector("#icon").addEventListener("click", toggleClass);

document.querySelector("#navmenu").addEventListener("click", toggleClass);
