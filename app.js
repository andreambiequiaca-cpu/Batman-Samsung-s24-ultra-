const wallpapers = [
  {
    name: "GOTHAM",
    bg: "linear-gradient(135deg,#050505,#151515 55%,#f5c400)",
    symbol: "🦇"
  },
  {
    name: "DARK KNIGHT",
    bg: "linear-gradient(145deg,#000 35%,#252525 70%,#f5c400)",
    symbol: "🦇"
  },
  {
    name: "BAT SIGNAL",
    bg: "radial-gradient(circle at 50% 35%,#f5c400 0 12%,#171717 13% 45%,#000 70%)",
    symbol: "🦇"
  },
  {
    name: "GOTHAM NIGHT",
    bg: "linear-gradient(160deg,#000 20%,#111 60%,#f5c400)",
    symbol: "BAT"
  }
];

const buttons = document.querySelectorAll(".grid button");

buttons.forEach(button => {
  const text = button.querySelector("small")?.textContent;

  if (text === "Fondos") {
    button.addEventListener("click", showWallpapers);
  }

  if (text === "Favoritos") {
    button.addEventListener("click", showFavorites);
  }

  if (text === "Galería") {
    button.addEventListener("click", showWallpapers);
  }
});

document.getElementById("mode")?.addEventListener("click", () => {
  document.body.classList.toggle("light");
});

function showWallpapers() {
  const old = document.getElementById("wallpaper-menu");
  if (old) old.remove();

  const menu = document.createElement("div");
  menu.id = "wallpaper-menu";

  menu.style.cssText = `
    position:fixed;
    inset:0;
    background:#050609;
    z-index:9999;
    padding:25px;
    overflow:auto;
    color:white;
    font-family:Arial,sans-serif;
  `;

  menu.innerHTML = `
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px">
      <h2 style="color:#f5c400;margin:0">🦇 FONDOS</h2>
      <button id="close-wallpapers"
        style="background:#1a1a1a;color:#f5c400;border:1px solid #555;border-radius:50%;width:40px;height:40px;font-size:20px">
        ✕
      </button>
    </div>

    <p style="color:#aaa;font-size:13px">
      Elegí tu fondo favorito para
