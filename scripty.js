// Função para verificar as respostas
function verificarRespostas() {
    const respostasCorretas = {
        q1: 'Elefante',
        q2: 'Morcego',
        q3: 'Camaleão'
    };

    let pontos = 0;
    const form = document.getElementById('quiz-form');
    const respostas = new FormData(form);

    // Verificando as respostas
    for (let [pergunta, resposta] of respostas) {
        if (resposta === respostasCorretas[pergunta]) {
            pontos++;
        }
    }

    // Exibindo a pontuação
    alert(`Você acertou ${pontos} de 3 questões!`);
}
