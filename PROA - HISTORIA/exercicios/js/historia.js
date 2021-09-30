var conteudoA = "<img class='imagem' src='imagens/primeiratela.png' /> <h2>Bom dia dorminhoco!</h2> <p>Você acaba de acordar sozinho e sem bateria.</p> <p>Você quer dormir ou quer ir em busca de uma aventura?</p> <button class='botao1' onclick='carregarConteudo(conteudoB1)'>Ir dormir</button> <button class='botao1'onclick='carregarConteudo(conteudoB2)'>Uma aventura</button>"

var conteudoB1 = "<img class='imagem' src='imagens/wastedprimeiratela.png' /> <h2>Quanta preguiça!</h2>  <p>ZzZzzZZzzzZzZZzzzzZ a mimir</p>";

var conteudoB2 = "<img class='imagem' src='imagens/segundatela.png' />  <h2>Então você quer uma aventura</h2> <p>Você irá em uma aventura em busca da sua bateria.</p> <p>Qual caminho você quer?</p> <button class='botao1' onclick='carregarConteudo(conteudoC3)'>Continuar na rua</button> <button class='botao1' onclick='carregarConteudo(conteudoC4)'>Ir para a floresta</button>";

var elemento = document.getElementById("conteudo");

function carregarConteudo(conteudo) {
  elemento.innerHTML = conteudo;
}

function mudarEstilos() {
  //Dentro dessa função, escreva o codigo para alterar o estilo do elemento com o id "text". 
  //A cor do texto deve ser verde, o tamanho do texto deve ser 15px e a fonte escolhida deve ser Arial;
  //Escreva sua resposta no espaço abaixo.  
  //Um exemplo de alteração de estilos por javascript: text.style.fontFamily = "Comic Sans MS";
  // font-family: banana;

  text.style.fontFamily = "Arial";
  text.style.color = "green";
  text.style.padding = "20";
  text.style.backgroundColor = "#333";
  text.style.fontSize = "15px";

}

function mudarEstilosNot()  {
  text.style.fontFamily = "Arial";
  text.style.color = "white";
  text.style.backgroundColor = "black";
}
function mudarEstilosClaro()  {
  text.style.fontFamily = "Arial";
  text.style.color = "black";
  text.style.backgroundColor = "grey";
}

function mudarEstilosNot() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}
function mudarEstilosClaro() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}


carregarConteudo(conteudoA)