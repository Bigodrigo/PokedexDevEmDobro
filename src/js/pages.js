const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");

botaoAlterarTema.addEventListener("click", () => {
  const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

  body.classList.toggle("modo-escuro");

  if (modoEscuroEstaAtivo) {
    imagemBotaoTrocaDeTema.setAttribute("src", "../img/imagens/sun.png");
  } else {
    imagemBotaoTrocaDeTema.setAttribute("src", "../img/imagens/moon.png");
  }
});

function removeBarra(value) {
  // Convert the value to a string
  const stringValue = value.toString();
  
  // Replace all occurrences of '\n' and '\f' with a space
  const replacedValue = stringValue.replaceAll('\n', ' ').replaceAll('\f', ' ');
  
  return replacedValue;
}

function getTypeClass(type) {
  switch (type) {
    case 'bug':
      return 'bug';
    case 'dark':
      return 'dark';
    case 'dragon':
      return 'dragon';
    case 'electric':
      return 'electric';
    case 'fairy':
      return 'fairy';
    case 'fighting':
      return 'fighting';
    case 'fire':
      return 'fire';
    case 'flying':
      return 'flying';
    case 'ghost':
      return 'ghost';
    case 'grass':
      return 'grass';
    case 'ground':
      return 'ground';
    case 'ice':
      return 'ice';
    case 'normal':
      return 'normal';
    case 'poison':
      return 'poison';
    case 'psychic':
      return 'psychic';
    case 'rock':
      return 'rock';
    case 'steel':
      return 'steel';
    case 'water':
      return 'water';
    default:
      return '';
  }
}
