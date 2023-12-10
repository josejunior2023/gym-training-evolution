document.addEventListener('DOMContentLoaded', function () {
    var form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        var usuario = document.getElementById('usuario').value.trim();
        var senha = document.getElementById('senha').value.trim();

        var storedUsuario = localStorage.getItem('usuario');
        var storedSenha = localStorage.getItem('senha');

        //Limpa as mensagens de erro e oculta com uma transição visual.
        $('#usuarioError, #senhaError').fadeOut();

        if (usuario === storedUsuario && senha === storedSenha) {
            window.location.href = '/app/pages/tela-inicial/tela-inicial.html';
        } else {
            //Mostra mensagens de erro com transição visual.
            $('#usuarioError, #senhaError')
                .text('Usuário ou senha incorretos.')
                .fadeIn();
        }
    });
});