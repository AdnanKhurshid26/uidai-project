// save old window size to adjust only if width changed
let oldWidth = window.innerWidth,
  oldHeight = window.innerHeight;
// element to adjust
const target = document.querySelector(".vh100");
// adjust the size if window was resized
window.addEventListener("resize", handleResize);

function handleResize(initial = false) {
  // the parameter is used for calling the function on page load
  /*
   * if the width changed then resize
   * without this Chrome mobile resizes every time navbar is hidden
   */
  if (window.innerWidth !== oldWidth || initial) {
    // stretch the target
    target.classList.add("setting-100vh");
    // save height and apply as min height
    const h = target.clientHeight;
    target.classList.remove("setting-100vh");
    target.style.minHeight = h + "px";
  }
}
// call when page is loaded
handleResize(true);
