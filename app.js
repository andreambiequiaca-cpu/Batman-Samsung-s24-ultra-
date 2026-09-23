const wallpapers = [
  {
    nombre: "GOTHAM NIGHT",
    color: "linear-gradient(135deg,#050505,#151515,#f5c400)"
  },
  {
    nombre: "DARK KNIGHT",
    color: "linear-gradient(135deg,#000000,#242424,#f5c400)"
  },
  {
    nombre: "BAT SIGNAL",
    color: "radial-gradient(circle,#f5c400 0%,#111 35%,#000 75%)"
  },
  {
    nombre: "GOTHAM CITY",
    color: "linear-gradient(160deg,#000,#111827,#f5c400)"
  }
];

document.addEventListener("DOMContentLoaded", function() {

  const modo = document.getElementById("mode");

  if (modo) {
    modo.addEventListener("click", function() {
      document.body.classList.toggle("light");
    });
  }

  const fondos = document.getElementById("fondos");
  const galeria = document.getElementById("galeria");
  const favoritos = document.getElementById("favoritos");
  const ajustes = document.getElementById("ajustes");

  if (fondos) fondos.addEventListener("click", abrirFondos);
  if (galeria) galeria.addEventListener("click", abrirFondos);

  if (favoritos) {
    favoritos.addEventListener("click", function() {
      alert("⭐ Tus favoritos aparecerán aquí.");
    });
  }

  if (ajustes) {
    ajustes.addEventListener("click", function() {
      alert("⚙️ Ajustes de Gotham.");
    });
  }

});

function abrirFondos() {

  const pantalla = document.createElement("div");

  pantalla.style.cssText = `
    position:fixed;
    inset:0;
    z-index:99999;
    background:#050505;
    color:white;
    padding:25px;
    overflow:auto;
    font-family:Arial,sans-serif;
  `;

  pantalla.innerHTML = `
    <div style="max-width:500px;margin:auto">

      <button id="cerrar"
        style="
          background:#f5c400;
          color:#000;
          border:0;
          border-radius:10px;
          padding:12px 20px;
          font-weight:bold;
        ">
        ← VOLVER
      </button>

      <h1 style="color:#f5c400;margin-top:25px">
        🦇 FONDOS GOTHAM
      </h1>

      <p style="color:#aaa">
        Elegí tu fondo favorito
      </p>

      <div id="lista"
        style="
          display:grid;
          gap:15px;
          margin-top:20px;
        ">
      </div>

    </div>
  `;

  document.body.appendChild(pantalla);

  document.getElementById("cerrar").onclick = function() {
    pantalla.remove();
  };

  const lista = document.getElementById("lista");

  wallpapers.forEach(function(fondo) {

    const tarjeta = document.createElement("div");

    tarjeta.style.cssText = `
      background:${fondo.color};
      border:2px solid #f5c400;
      border-radius:18px;
      padding:20px;
      min-height:200px;
      display:flex;
      flex-direction:column;
      justify-content:flex-end;
    `;

    tarjeta.innerHTML = `
      <div style="
        font-size:65px;
        text-align:center;
        margin-bottom:15px;
      ">🦇</div>

      <strong style="
        color:#f5c400;
        font-size:18px;
      ">
        ${fondo.nombre}
      </strong>

      <button class="elegir"
        style="
          margin-top:12px;
          padding:13px;
          border:0;
          border-radius:10px;
          background:#f5c400;
          color:#000;
          font-weight:bold;
        ">
        ELEGIR FONDO
      </button>
    `;

    tarjeta.querySelector(".elegir").onclick = function() {
      alert("🦇 ¡Fondo seleccionado!");
    };

    lista.appendChild(tarjeta);

  });

}
