// const el2 = document.querySelector(".inline-image__picture");
// console.log("el2", el2);
const el = document.getElementById("imageID")
console.log("el", el);

let isResizing = false;

// const resizers = document.querySelectorAll(".resize_button");
const resizers = document.getElementById("resizeID")
console.log("resizers", resizers);
let currentResizer;

// for (let resizer of resizers) {
resizers.addEventListener("mousedown", mousedown);

function mousedown(e) {

  const findHeight = (ratio = '', width = 1) => {
    const [w, h] = ratio.split(':').map(Number);
    const height = (width * h) / w;
    return Math.round(height);
  };

  // currentResizer = e.target;
  // console.log("currentResizer", currentResizer);
  isResizing = true;

  let prevX = e.clientX;
  let prevY = e.clientY;

  window.addEventListener("mousemove", mousemove);
  window.addEventListener("mouseup", mouseup);

  function mousemove(e) {
    const rect = el.getBoundingClientRect();
    console.log("rect", rect);

    // if (currentResizer.classList.contains("resize_button")) {
    // const oW = rect.width - (prevX - e.clientX);
    // const oH = rect.height - (prevY - e.clientY)
    // const NN = calculateAspectRatioFit(oW, oH, screen.width, screen.height)
    // console.log("NN", NN);
    function gcd(a, b) {
      return b == 0 ? a : gcd(b, a % b);
    }
    var w = screen.width;
    var h = screen.height;
    var r = gcd(w, h);
    // console.log("r", r);
    const ourRatio = `${w / r}:${h / r}`
    console.log("ourRatio", ourRatio);
    const newH = findHeight(ourRatio, rect.width - (prevX - e.clientX))
    console.log("newH", newH);
    el.style.width = rect.width - (prevX - e.clientX) + "px";
    el.style.height = newH + "px";
    // }
    prevX = e.clientX;
    prevY = e.clientY;
  }

  function getNewW(nH, nW) {
    //     adjusted width = <user-chosen height> * (original width / original height)
    // adjusted height = <user-chosen width> * (original height / original width)
    // const newH nH * ()
  }
  function calculateAspectRatioFit(srcWidth, srcHeight, maxWidth, maxHeight) {

    var ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);

    return { width: srcWidth * ratio, height: srcHeight * ratio, ratio };
  }

  function mouseup() {
    window.removeEventListener("mousemove", mousemove);
    window.removeEventListener("mouseup", mouseup);
    isResizing = false;
  }
}
// }
