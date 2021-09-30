var conteudoA = "<img class='imagem' src='imagens/primeiratela.png' /> <h2>Bom dia dorminhoco!</h2> <p>Você acorda e se depara em um lugar desconhecido e consta que esta com pouca bateria.</p> <p>Você sai em busca de recarregar suas forças, ou prefere dormir mais para poupar energia?</p> <button class='botao1' onclick='carregarConteudo(conteudoB1)'>Ir dormir</button> <button class='botao1'onclick='carregarConteudo(conteudoB2)'>Uma aventura</button>";

var conteudoB1 = "<img class='imagem' src='imagens/wastedprimeiratela.png' /> <h2>Final ruim: Parece que você não é muito inteligente.</h2>  <p>O que você esperava que acontecesse? Recarregasse sua energia dormindo?</p> <p>Caso não tenha notado você é um robô, não vai ganhar uma bateria de graça.</p>";

var conteudoB2 = "<img class='imagem' src='imagens/segundatela222.png' />  <h2>Então você quer uma aventura?</h2> <p>Okay bonitão, gostei da atitude de ir em busca do que precisa.</p> <p>Agora tem duas opções, você vai se manter na cidade ou seguir para a floresta?</p> <button class='botao1' onclick='carregarConteudo(conteudoC1)'>Continuar na cidade</button> <button class='botao1' onclick='carregarConteudo(conteudoC2)'>Ir para a floresta</button>";

var conteudoC1 = "<img class='imagem' src='imagens/segundatela.png' />  <h2>Two strange Noia in a moto appears!</h2> <p>Durante uma jornada intempéries podem surgir, ou neste caso, dois caras em uma moto.</p> <p>Você decide reagir ao assalto?</p> <button class='botao1' onclick='carregarConteudo(conteudoD1)'>Irei reagir</button> <button class='botao1' onclick='carregarConteudo(conteudoD2)'>Não irei reagir</button>";

var conteudoD1 = "<img class='imagem' src='imagens/terceiratela.png' />  <h2>Parabéns pela coragem, porque senso...</h2> <p>Você decide enfrentar os noias com o seu ULTRA CANÃO DE PLASMA SUPERFREACKINGBLASTERMEGAPOWEROBLITERATORNATOR (pilhas não inclusas).</p> <button class='botao1' onclick='carregarConteudo(conteudoE1)'>Continuar</button>";

var conteudoD2 = "<img class='imagem' src='imagens/wastedsegundatela.png' />  <h2>Final ruim: Foi roubado otaro!</h2> <p>os cara vazaru com tua unica bateria, se fu#@! parcero, agora tu ta é morto, vai virar sucata.</p>";

var conteudoE1 = "<img class='imagem' src='imagens/quartatela.gif' /> <h2>E o obvio acontece.</h2> <p>Eles fogem</p> <button class='botao1' onclick='carregarConteudo(conteudoF1)'>Continuar</button>";

var conteudoF1 = "<img class='imagem' src='imagens/quintatela.gif' /> <h2>IH SERJÃO SUJOU!!!!!!</h2> <p>Os tiras viram a treta toda e chegaram pra te prender, você vai tentar fugir?</p> <button class='botao1' onclick='carregarConteudo(conteudoG1)'>Sim</button> <button class='botao1' onclick='carregarConteudo(conteudoG2)'>Não</button>";

var conteudoG1 = "<img class='imagem' src='imagens/setimatela.png' /> <h2>Final ruim: Memória fraca.</h2> <p>Acho que você esqueceu mas não tinha mais quase nada de bateria sobrando.</p> <p>Na tentativa de fugir você acaba morto sem energia e, ainda pior, preso.</p>";

var conteudoG2 = "<img class='imagem' src='imagens/policia.png' /> <h2>Enquadrado!</h2> <p>Você rouba a bateria da viatura para conseguir mais energia?</p> <button class='botao1' onclick='carregarConteudo(conteudoH1)'>Sim</button> <button class='botao1' onclick='carregarConteudo(conteudoH2)'>Não</button>";

var conteudoH1 = "<img class='imagem' src='imagens/oitavatela.png' /> <h2>Apologia ao crime!</h2> <p>Como um criminoso sem controle você rouba a bateria da viatura, restaurando sua energia.</p> <button class='botao1' onclick='carregarConteudo(conteudoG2)'>Continuar</button>";

var conteudoH2 = "<img class='imagem' src='imagens/sextatela.png' /> <h2>Final ruim: Nem sempre o certo da certo.</h2> <p>Como um cidadão exemplar você decide dialogar com as autoridades.</p> <p>Isso resulta em você apanhar de cassetete por 45 minutos e ainda ser preso.</p>";

var conteudoI1 = "<img class='imagem' src='imagens/robovoacombateria.png' /> <h2>Liberdade (será?)</h2> <p>com isso você sai voando em direção em uma nova jornada, mas os policias não estão satisfeitos. Eles convocam sua mais poderosa arma...</p> <button class='botao1' onclick='carregarConteudo(conteudoJ1)'>Continuar</button>";

var conteudoJ1 = "<img class='imagem' src='imagens/robo x robocop.png' /> <h2>Enquadrado!</h2> <p>Você rouba a bateria da viatura para conseguir mais energia?</p> <button class='botao1' onclick='carregarConteudo(conteudoH1)'>Sim</button> <button class='botao1' onclick='carregarConteudo(conteudoH2)'>Não</button>";

var conteudoK1 = "<img class='imagem' src='imagens/robo ganhou do robobolo.png' /> <h2></h2> <p></p> <button class='botao1' onclick='carregarConteudo(conteudoL1)'>Continuar</button>;

var conteudoK2 = "<img class='imagem' src='imagens/ROBOEXPLODETUDO.gif' /> <h2></h2> <p></p>";

var conteudoL1 = "<img class='imagem' src='imagens/robovoaeganha.gif' /> <h2></h2> <p></p>";
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