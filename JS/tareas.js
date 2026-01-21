let tareas = JSON.parse(localStorage.getItem('misTareas')) || [];

window.onload = function() {
    mostrarTareas();
};

/*agregar*/
function agregarTarea() {
    const input = document.getElementById('nuevaTarea');
    const prioridad = document.getElementById('prioridadTarea');

    if (input.value.trim() === "") {
        alert("Por favor, escribe una tarea.");
        return;
    }

    const nueva = {
        id: Date.now(),
        texto: input.value,
        prioridad: parseInt(prioridad.value)
    };

    tareas.push(nueva);
    guardarYMostrar();
    input.value = ""; 
}

function mostrarTareas() {
    const tabla = document.getElementById('listaTareas');
    if (!tabla) return;
    
    tabla.innerHTML = "";

    /*prioridad*/
    tareas.sort((a, b) => a.prioridad - b.prioridad);

    tareas.forEach(t => {
        /*color segun prioridad*/
        const claseColor = `prio-${t.prioridad}`;

        tabla.innerHTML += `
            <tr class="${claseColor}">
                <td><strong>${t.prioridad}</strong></td>
                <td>${t.texto}</td>
                <td>
                    <button onclick="editarTarea(${t.id})" class="btn-edit" style="cursor:pointer; border:none; background:none; font-size:18px;">✏️</button>
                    <button onclick="eliminarTarea(${t.id})" class="btn-delete" style="cursor:pointer; border:none; background:none; font-size:18px;">🗑️</button>
                </td>
            </tr>
        `;
    });
}

/*eliminar*/
function eliminarTarea(id) {
    if (confirm("¿Eliminar esta tarea?")) {
        tareas = tareas.filter(t => t.id !== id);
        guardarYMostrar();
    }
}

/*editar*/
function editarTarea(id) {
    const tareaAEditar = tareas.find(t => t.id === id);
    const nuevoTexto = prompt("Edita tu pendiente:", tareaAEditar.texto);
    
    if (nuevoTexto !== null && nuevoTexto.trim() !== "") {
        tareaAEditar.texto = nuevoTexto;
        guardarYMostrar();
    }
}

function guardarYMostrar() {
    localStorage.setItem('misTareas', JSON.stringify(tareas));
    mostrarTareas();
}


