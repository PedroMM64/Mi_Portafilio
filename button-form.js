document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('form').addEventListener('submit', function (event) {
        event.preventDefault();
        document.getElementById('form').style.display = 'none';

        let apareceExito = document.getElementById('ocultar');
        apareceExito.classList.remove("hide");

        let mensajeExito = document.getElementById('mensaje-exito');
        mensajeExito.classList.add('show');
    });

});