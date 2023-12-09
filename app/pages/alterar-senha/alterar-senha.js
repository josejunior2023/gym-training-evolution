document.addEventListener('DOMContentLoaded', function () {
    var form = document.querySelector('form');
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        var usuario = document.getElementById('usuario').value.trim();
        var novaSenha = document.getElementById('senha').value.trim();

        if (usuario === '' || novaSenha === '') {
            alert('Por favor, preencha todos os campos.');
        } else {
            // Simulação: Atualizar a senha do usuário localmente
            localStorage.setItem('senha', novaSenha);

            // Redirecionar para a página de login (index.html)
            window.location.href = '/app/index.html';
        }
    });
});