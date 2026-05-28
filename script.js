// Função para rolar a tela suavemente até a seção de inscrição
function scrollParaInscricao() {
    document.getElementById('inscricao').scrollIntoView({ behavior: 'smooth' });
}

// Função que pré-seleciona o curso no formulário ao clicar no card
function selecionarCurso(nomeDoCurso) {
    const select = document.getElementById('cursoInteresse');
    select.value = nomeDoCurso;
    scrollParaInscricao();
    
    // Pequeno feedback visual piscando a borda do campo selecionado
    select.style.borderColor = '#66fcf1';
    setTimeout(() => {
        select.style.borderColor = '#444';
    }, 1500);
}

// Evento de envio do formulário (simulação de sucesso)
document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede a página de recarregar a tela
    
    const nome = document.getElementById('nome').value;
    const curso = document.getElementById('cursoInteresse').value || "nosso ecoss