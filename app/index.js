document.addEventListener('DOMContentLoaded', function () {
    var form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        var usuario = document.getElementById('usuario').value.trim();
        var senha = document.getElementById('senha').value.trim();

        var storedUsuario = localStorage.getItem('usuario');
        var storedSenha = localStorage.getItem('senha');

        // Limpar mensagens de erro e ocultar com uma transição visual
        $('#usuarioError, #senhaError').fadeOut();

        if (usuario === storedUsuario && senha === storedSenha) {
            // Redirecionar para a página inicial (pagina-inicial.html)
            window.location.href = 'tela-inicial.html';
        } else {
            // Exibir mensagens de erro com uma transição visual
            $('#usuarioError, #senhaError')
                .text('Usuário ou senha incorretos.')
                .fadeIn();
        }
    });
});