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

        //Adiciona o novo treino.
        var treinos = JSON.parse(localStorage.getItem('treinos')) || [];
        treinos.push(treino);

        //Atualiza o histórico de treinos.
        localStorage.setItem('treinos', JSON.stringify(treinos));
        window.location.href = '/app/pages/tela-inicial/tela-inicial.html';
    });
});