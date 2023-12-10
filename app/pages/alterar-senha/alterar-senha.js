document.addEventListener('DOMContentLoaded', function () {
    var form = document.querySelector('form');
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        var usuario = document.getElementById('usuario').value.trim();
        var novaSenha = document.getElementById('senha').value.trim();

        if (usuario === '' || novaSenha === '') {
            alert('Por favor, preencha todos os campos.');
        } else {
            localStorage.setItem('senha', novaSenha);
            window.location.href = '/app/index.html';
        }
    });
});