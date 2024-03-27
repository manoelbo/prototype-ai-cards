// Obtém todos os elementos com a classe "card-inner"
const cardInners = document.querySelectorAll('.card-inner');

// Função para adicionar o evento de clique a cada card-inner
cardInners.forEach((cardInner) => {
  cardInner.addEventListener('click', function () {
    // Remover a classe 'is-flipped' de todos os card-inner
    cardInners.forEach((inner) => inner.classList.remove('is-flipped'));
    // Adicionar a classe 'is-flipped' apenas ao card-inner clicado
    this.classList.add('is-flipped');
  });
});

// Obtém o botão de shuffle
const shuffleBtn = document.querySelector('#shuffle-btn');

// Adiciona um event listener para o botão de shuffle
shuffleBtn.addEventListener('click', showRandomCard);

// Obtém todos os cards
const cards = document.querySelectorAll('.card');

// Função para ocultar todos os cards
function hideAllCards() {
  cards.forEach((card) => {
    card.style.display = 'none';
  });
}

// Função para exibir um card aleatório
function showRandomCard() {
  // Oculta todos os cards primeiro
  hideAllCards();
  // Gera um índice aleatório
  const randomIndex = Math.floor(Math.random() * cards.length);
  // Exibe o card correspondente ao índice aleatório gerado
  cards[randomIndex].style.display = 'block';
}
