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

const botones = document.querySelectorAll(".grid button");

botones.forEach(boton => {
  const nombre = boton.querySelector("small")?.textContent.trim();

  if (nombre === "Fondos" || nombre === "Galería") {
    boton.onclick = abrirFondos;
  }

  if (nombre === "Favoritos") {
    boton.onclick = () => {
      alert("⭐ Próximamente podrás guardar tus fondos favoritos.");
    };
  }

  if (nombre === "Ajustes") {
    boton.onclick = () => {
      alert("⚙️ Ajustes de Gotham");
    };
  }
});

document.getElementById("mode").onclick = () => {
  document.body.classList.toggle("light");
};

function abrirFondos() {
  const pantalla = document.createElement("div");

  pantalla.style.cssText = `
    position:fixed;
    inset:0;
    z-index:9999;
    background:#050505;
    color:white;
    padding:25px;
    overflow:auto;
    font-family:Arial,sans-serif;
  `;

  pantalla.innerHTML = `
    <div style="max-width:500px;margin:auto">

      <button id="cerrarFondos"
        style="
          background:#f5c400;
          color:#000;
          border:0;
          border-radius:10px;
          padding:12px 18px;
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

      <div id="listaFondos"
        style="
          display:grid;
          gap:15px;
          margin-top:20px;
        ">
      </div>

    </div>
  `;

  document.body.appendChild(pantalla);

  document.getElementById("cerrarFondos").onclick = () => {
    pantalla.remove();
  };

  const lista = document.getElementById("listaFondos");

  wallpapers.forEach(fondo => {

    const tarjeta = document.createElement("div");

    tarjeta.style.cssText = `
      background:${fondo.color};
      border:1px solid #f5c400;
      border-radius:18px;
      padding:20px;
      min-height:180px;
      display:flex;
      flex-direction:column;
      justify-content:flex-end;
      box-shadow:0 0 20px #000;
    `;

    tarjeta.innerHTML = `
      <div style="
        font-size:60px;
        text-align:center;
        margin-bottom:15px;
      ">
        🦇
      </div>

      <strong style="
        color:#f5c400;
        font-size:16px;
      ">
        ${fondo.nombre}
      </strong>

      <button
        style="
          margin-top:12px;
          padding:12px;
          border:0;
          border-radius:10px;
          background:#f5c400;
          color:#000;
          font-weight:bold;
        ">
        ELEGIR FONDO
      </button>
    `;

    const boton = tarjeta.querySelector("button");

    boton.onclick = () => {
      alert("🦇 Fondo seleccionado.");
    };

    lista.appendChild(tarjeta);
  });
}
