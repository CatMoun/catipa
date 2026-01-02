async function loadView(path) {
      const view = document.getElementById("view");
      
      view.innerHTML = "Carregando…";
      
      const res = await fetch(path, { cache: "no-store" });
      const html = await res.text();
      
      view.innerHTML = html;
}
