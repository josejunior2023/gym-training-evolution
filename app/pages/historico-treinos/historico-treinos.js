document.addEventListener('DOMContentLoaded', function () {
    var form = document.querySelector('form');
    var treinos = JSON.parse(localStorage.getItem('treinos')) || [];

    preencherFormulario();

    function preencherFormulario() {
        if (treinos.length > 0) {
            var ultimoTreino = treinos[treinos.length - 1];
            form.elements['treino'].value = ultimoTreino.nome;
            form.elements['data'].value = ultimoTreino.data;
            form.elements['hora'].value = ultimoTreino.hora;
            form.elements['repeticoes'].value = ultimoTreino.repeticoes;
            form.elements['series'].value = ultimoTreino.series;
            form.elements['peso'].value = ultimoTreino.peso;
        }
    }
});