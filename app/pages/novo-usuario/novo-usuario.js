document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('novoUsuarioForm');

    //Verfica se o jQuery está sendo carregado.
    if (window.jQuery) {
        
        $('#celular').mask('(00) 00000-0000');
        $('#cep').mask('00000-000');

        form.addEventListener('submit', async function (event) {
            event.preventDefault();

            if (!form.checkValidity()) {
                form.classList.add('was-validated');
            } else {
                //Salva os dados de usuário e senha no localStorage.
                var usuario = document.getElementById('usuario').value;
                var senha = document.getElementById('senha').value;
                localStorage.setItem('usuario', usuario);
                localStorage.setItem('senha', senha);
                window.location.href = '/app/index.html';
            }
        });
    }
});