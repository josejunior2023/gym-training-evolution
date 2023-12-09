document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('novoUsuarioForm');

    // Certifique-se de que o jQuery está sendo carregado antes deste script
    if (window.jQuery) {
        
        // Adiciona a máscara para o campo de celular
        $('#celular').mask('(00) 00000-0000');
        // Adiciona a máscara para o campo de CEP
        $('#cep').mask('00000-000');

        form.addEventListener('submit', async function (event) {
            event.preventDefault(); // Impede o comportamento padrão do botão de envio do formulário

            if (!form.checkValidity()) {
                form.classList.add('was-validated');
            } else {
                // Salva o usuário no localStorage (simulação)
                var usuario = document.getElementById('usuario').value;
                var senha = document.getElementById('senha').value;
                localStorage.setItem('usuario', usuario);
                localStorage.setItem('senha', senha);

                // Depois, redirecione para index.html
                window.location.href = 'index.html';
            }
        });
    } else {
        console.error('O jQuery não foi carregado corretamente. Certifique-se de incluir o jQuery antes deste script.');
    }
});