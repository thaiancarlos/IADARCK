// Exemplo de script para adicionar uma mensagem de boas-vindas
document.addEventListener('DOMContentLoaded', () => {
    console.log('O site de jogos online foi carregado com sucesso!');
});

// Você pode adicionar funcionalidades mais complexas aqui no futuro
// Ex: um botão para mostrar/esconder detalhes do jogo
const gameCards = document.querySelectorAll('.game-card');
gameCards.forEach(card => {
    card.addEventListener('click', () => {
        // Lógica para expandir a informação do card
        alert('Você clicou em um card de jogo!');
    });
});