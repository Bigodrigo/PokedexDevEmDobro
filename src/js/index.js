/*
	O que precisamos fazer? - quando clicarmos no botão de troca de tema temos que alterar a cor do tema da página para as cores do tema claro ou do tema escuro

	- objetivo 1 - quando clicar no botão de troca de tema, adicionar a classe modo-escuro no body pra que os estilos do modo escuro sejam aplicados e mudar a imagem pra lua
        - passo 1 - pegar no JS o elemento HTML correspondente ao botão de troca de tema
        - passo 2 - dar um jeito de pegar no JS o elemento HTML corresponde ao body
        - passo 3 - dar um jeito de identificar o clique do usuário no botão de troca de tema
        - passo 4 - adicionar a classe modo-escuro no body
        - passo 5 - trocar a imagem do botão de alterar tema pra lua
    
	- objetivo 2 - quando clicar no botão de troca de tema, caso o body já tenha a classe modo-escuro, remover a classe pra mudar pro modo claro e mudar a imagem pro sol
        - passo 6 - verificar se o body já tem a classe modo-escuro
        - passo 7 - remover a classe do modo-escuro do body
        - passo 8 - trocar a imagem do botão de alterar tema pra sol
*/

// objetivo 1 - quando clicar no botão de troca de tema, adicionar a classe modo-escuro no body pra que os estilos do modo escuro sejam aplicados e mudar a imagem pra lua

// alert("Welcome to the Pokedex!"); // Display the alert message

  // Get the modal element
  const modal = document.getElementById("myModal");

  // Get the close button element
  const closeBtn = document.getElementsByClassName("close")[0];

  // Check if the modal has been shown before
  const modalShown = sessionStorage.getItem("modalShown");
  if (!modalShown) {
    // Display the modal if it hasn't been shown before
    modal.style.display = "block";

    // Set a flag in sessionStorage to indicate that the modal has been shown
    sessionStorage.setItem("modalShown", true);
  }

  // Close the modal when the close button is clicked
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");

botaoAlterarTema.addEventListener("click", () => {
  const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

  body.classList.toggle("modo-escuro");

  if (modoEscuroEstaAtivo) {
    imagemBotaoTrocaDeTema.setAttribute("src", "./src/img/imagens/sun.png");
  } else {
    imagemBotaoTrocaDeTema.setAttribute("src", "./src/img/imagens/moon.png");
  }
});