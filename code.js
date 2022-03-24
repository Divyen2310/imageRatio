// const el2 = document.querySelector(".inline-image__picture");
// console.log("el2", el2);
const el = document.getElementById("imageID")
console.log("el", el);

let isResizing = false; // not in use

const resizers = document.getElementById("resizeID")
console.log("resizers", resizers);
let currentResizer;

resizers.addEventListener("mousedown", mousedown);

function mousedown(e) {

  const findHeight = (ratio = '', width = 1) => {
    const [w, h] = ratio.split(':').map(Number);
    const height = (width * h) / w;
    return Math.round(height);
  };

  let prevX = e.clientX;
  let prevY = e.clientY;

  window.addEventListener("mousemove", mousemove);
  window.addEventListener("mouseup", mouseup);

  function mousemove(e) {
    const rect = el.getBoundingClientRect();
    console.log("rect", rect);
    function gcd(a, b) {
      return b == 0 ? a : gcd(b, a % b);
    }
    var w = screen.width;
    var h = screen.height;
    var r = gcd(w, h);
    const ourRatio = `${w / r}:${h / r}`
    console.log("ourRatio", ourRatio);
    const newH = findHeight(ourRatio, rect.width - (prevX - e.clientX))
    console.log("newH", newH);
    el.style.width = rect.width - (prevX - e.clientX) + "px";
    el.style.height = newH + "px";

    prevX = e.clientX;
    prevY = e.clientY;
  }
  function mouseup() {
    console.log("mouseup");
    window.removeEventListener("mousemove", mousemove);
    window.removeEventListener("mouseup", mouseup);
    isResizing = false; // not in use
  }
}
// }
