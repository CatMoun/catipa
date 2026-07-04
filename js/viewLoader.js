function loadView(path) {
  const frame = document.getElementById("viewFrame");
  frame.src = path;
}

window.addEventListener("message", function (e) {
  if (e.data && e.data.source === "catipa-view" && typeof e.data.height === "number") {
    const frame = document.getElementById("viewFrame");
    if (frame) frame.style.height = e.data.height + "px";
  }
});
