async function loadView(path) {
  const view = document.getElementById("view");

  view.innerHTML = "Carregando…";

  const res = await fetch(path);
  const html = await res.text();

  view.innerHTML = html;
}
