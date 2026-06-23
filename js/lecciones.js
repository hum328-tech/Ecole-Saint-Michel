function mostrarFormulario(){

    const formulario = document.getElementById("formularioLeccion");

    formulario.style.display =
        formulario.style.display === "block"
            ? "none"
            : "block";

}


function agregarLeccion(){

    const titulo = document.getElementById("titulo").value.trim();
    const nivel = document.getElementById("nivel").value.trim();
    const tipo = document.getElementById("tipo").value;
    const url = document.getElementById("url").value.trim();
    const descripcion = document.getElementById("descripcion").value.trim();

    if(
        !titulo ||
        !nivel ||
        tipo === "Tipo de lección" ||
        !url
    ){
        alert("Llena título, nivel, tipo y enlace.");
        return;
    }

    const lista = document.getElementById("listaLecciones");

    const tarjeta = document.createElement("div");

    tarjeta.className = "lesson-card";

    tarjeta.innerHTML = `
        <div class="lesson-icon">📚</div>

        <h3>${titulo}</h3>

        <p>${descripcion}</p>

        <div class="tags">
            <span class="tag">${nivel}</span>
            <span class="tag">${tipo}</span>
        </div>

        <div class="acciones">
            <a class="ver"
               href="${url}"
               target="_blank">
                Abrir lección
            </a>

            <button class="editar">
                Editar
            </button>

            <button class="eliminar"
                    onclick="eliminarLeccion(this)">
                Eliminar
            </button>
        </div>
    `;

    lista.appendChild(tarjeta);

    document.getElementById("titulo").value = "";
    document.getElementById("nivel").value = "";
    document.getElementById("tipo").value = "Tipo de lección";
    document.getElementById("url").value = "";
    document.getElementById("descripcion").value = "";

    document.getElementById("formularioLeccion").style.display = "none";

}


function eliminarLeccion(boton){

    if(confirm("¿Eliminar esta lección?")){

        boton
            .closest(".lesson-card")
            .remove();

    }

}
function mostrarNivel(id){
  document.querySelectorAll(".nivel").forEach(nivel => {
    nivel.classList.remove("activo");
  });

  document.getElementById(id).classList.add("activo");
}
