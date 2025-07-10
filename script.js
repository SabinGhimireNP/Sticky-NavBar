const nav = document.querySelector("nav");
const navTop = nav.offsetTop;
function fixNav() {
  //   console.log(navTop);
  if (window.scrollY >= navTop) {
    document.body.style.paddingTop = `${nav.offsetHeight}px`;
    console.log("padding added");
    document.body.classList.add("fixed-nav");
  } else {
    document.body.style.paddingTop = 0;
    console.log("padding removed");

    document.body.classList.remove("fixed-nav");
  }
}

window.addEventListener("scroll", fixNav);
