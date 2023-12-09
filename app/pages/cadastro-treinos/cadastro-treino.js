document.addEventListener('DOMContentLoaded', function () {
    var form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        var treino = {
            nome: form.elements['treino'].value,
            data: form.elements['data'].value,
            hora: form.elements['hora'].value,
            repeticoes: form.elements['repeticoes'].value,
            series: form.elements['series'].value,
            peso: form.elements['peso'].value
        };

        // Adicione o novo treino à lista de treinos
        var treinos = JSON.parse(localStorage.getItem('treinos')) || [];
        treinos.push(treino);

        // Atualize a lista de treinos no localStorage
        localStorage.setItem('treinos', JSON.stringify(treinos));

        // Redirecione para a página tela inicial
        window.location.href = '/app/pages/tela-inicial/tela-inicial.html';
    });
});