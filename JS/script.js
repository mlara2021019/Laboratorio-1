
window.onload = function () {
    /*logica login*/
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function () {
            localStorage.setItem('usuarioActivo', document.getElementById('userInput').value);
            localStorage.setItem('passActiva', document.getElementById('passInput').value);
        });
    }

    /*logica de contactos*/
    const btnUsuario = document.getElementById('btnUsuario');
    const panel = document.getElementById('panelUsuario');
    const userStored = localStorage.getItem('usuarioActivo');
    const passStored = localStorage.getItem('passActiva');

    if (btnUsuario && userStored) {
        btnUsuario.style.display = 'block';

        /*mostrar o ocultar las credenciales */
        btnUsuario.onclick = function () {
            if (panel.style.display === 'none') {
                document.getElementById('infoUser').innerText = userStored;
                document.getElementById('infoPass').innerText = passStored;
                panel.style.display = 'block';
            } else {
                panel.style.display = 'none';
            }
        };
    }
};

// Función para limpiar datos y salir
function cerrarSesion() {
    localStorage.clear();
    window.location.href = "index.html";
}

