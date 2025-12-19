// onjeto
var tareas = [
  { titulo: "Estudiar JS", estado: true },
  { titulo: "Hacer deber", estado: false },
  { titulo: "Leer", estado: true },
  { titulo: "Estudiar JS", estado: true },
  { titulo: "Hacer deber", estado: false },
  { titulo: "Leer", estado: true },
];


// Declarcion de varialbes
var tblTareas = document.getElementById("tbl_tareas");
var btnContar = document.getElementById("btn_contar");
var txtResultado = document.getElementById("txt_resultado");
var txtTotalTareas = document.getElementById("txt_total_tareas");

function mostrarTareas() {
  tblTareas.innerHTML = "";

  tareas.forEach(function (tarea, index) {
    tblTareas.innerHTML += `
      <tr>
        <td>${tarea.titulo}</td>
        <td>${tarea.estado ? "Completada" : "Pendiente"}</td>
        <td>
          <button
            class="btn ${tarea.estado ? "btn-outline-secondary" : "btn-primary"} btn-sm"
            onclick="toggleEstado(${index})">
            ${tarea.estado ? "Marcar pendiente" : "Marcar completada"}
          </button>
        </td>
      </tr>
    `;
  });

  txtTotalTareas.innerText = "Total: " + tareas.length;
}

function toggleEstado(index) {
  tareas[index].estado = !tareas[index].estado;
  mostrarTareas();
}

function contarCompletadas() {
  var total = 0;
  tareas.forEach(function (tarea) {
    if (tarea.estado) {
      total++;
    }
  });
  return total;
}

function contarPendientes() {
  var total = 0;
  tareas.forEach(function (tarea) {
    if (!tarea.estado) {
      total++;
    }
  });
  return total;
}

function mostrarConteo() {
  var completadas = contarCompletadas();
  var pendientes = contarPendientes();

  txtResultado.innerText =
    "Tareas completadas: " + completadas +
    " | Tareas pendientes: " + pendientes;
}

// Eventos
btnContar.addEventListener("click", function () {
  mostrarConteo();
});


mostrarTareas();
mostrarConteo();
