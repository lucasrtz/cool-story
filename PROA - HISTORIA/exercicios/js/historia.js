var conteudoA = "<img src='imagens/primeiratela.png' /> <h2>Bom dia dorminhoco!</h2> <p>Você acaba de acordar sozinho e sem bateria.</p> <p>Você quer dormir?</p> <p>Botão da esquerda - Sim</p> <p>Botão da direita - Não, eu quero uma aventura meu colega</p> <button class='botao1' onclick='carregarConteudo(conteudoB1)'>Ir para a Direita</button> <button class='botao2'onclick='carregarConteudo(conteudoB2)'>Ir para a Esquerda</button>"

var conteudoB1 = "<img src='imagens/wastedprimeiratela.png' /> <h2>Robô bahia kk</h2>  <p>ZzZZZZZzzzZzZZzzzzZ</p><button class='botao1' onclick='carregarConteudo(conteudoA)'>Ir para a Direita</button> <button class='botao2' onclick='carregarConteudo(conteudoA)'>Ir para a Esquerda</button>";

var conteudoB2 = "<img src='imagens/segundatela.png' />  <h2>Então você quer ir atrás da bateria</h2> <p>Qual caminho?</p> <button class='botao1' onclick='carregarConteudo(conteudoC3)'>Ir para a Direita</button> <button id='2' onclick='carregarConteudo(conteudoC4)'>Ir para a Esquerda</button>";

var elemento = document.getElementById("conteudo");

function carregarConteudo(conteudo) {
    elemento.innerHTML = conteudo;
}

function mudarEstilos()  {
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
function mudarEstilosNot() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }
  function mudarEstilosClaro() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }

  var i = 1; 
  var timer = setInterval(function() {(i++)}, 1000)

  if (i == 15){
    alert("otacos")
  }

carregarConteudo(conteudoA)