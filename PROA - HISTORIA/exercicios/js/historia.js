var conteudoA = "<img class='imagem' src='imagens/primeiratela.png' /> <h2>Bom dia dorminhoco!</h2> <p>Você acorda e se depara em um lugar desconhecido e consta que esta com pouca bateria.</p> <p>Você sai em busca de recarregar suas forças, ou prefere dormir mais para poupar energia?</p> <button class='botao1' onclick='carregarConteudo(conteudoB1)'>Ir dormir</button> <button class='botao1'onclick='carregarConteudo(conteudoB2)'>Uma aventura</button>";

var conteudoB1 = "<img class='imagem' src='imagens/wastedprimeiratela.png' /> <h2>Final ruim: Parece que você não é muito inteligente.</h2>  <p>O que você esperava que acontecesse? Recarregasse sua energia dormindo?</p> <p>Caso não tenha notado você é um robô, não vai ganhar uma bateria de graça.</p>";

var conteudoB2 = "<img class='imagem' src='imagens/segundatela222.png' />  <h2>Então você quer uma aventura?</h2> <p>Okay bonitão, gostei da atitude de ir em busca do que precisa.</p> <p>Agora tem duas opções, você vai se manter na cidade ou seguir para a floresta?</p> <button class='botao1' onclick='carregarConteudo(conteudoC1)'>Continuar na cidade</button> <button class='botao1' onclick='carregarConteudo(conteudoC2)'>Ir para a floresta</button>";

var conteudoC1 = "<img class='imagem' src='imagens/segundatela.png' />  <h2>Two strange Noia in a moto appears!</h2> <p>Durante uma jornada intempéries podem surgir, ou neste caso, dois caras em uma moto.</p> <p>Você decide reagir ao assalto?</p> <button class='botao1' onclick='carregarConteudo(conteudoD1)'>Irei reagir</button> <button class='botao1' onclick='carregarConteudo(conteudoD2)'>Não irei reagir</button>";

var conteudoC2 = "<img class='imagem' src='imagens/robofloresta.png' /> <h2>Um jornada pela grande floresta... De Osasco.</h2> <p>O robô se levanta e segue seu caminho em direção em uma grande floresta.</p> <button class='botao1' onclick='carregarConteudo(conteudoD3)'>Continuar</button>"

var conteudoD1 = "<img class='imagem' src='imagens/terceiratela.png' />  <h2>Parabéns pela coragem, porque senso...</h2> <p>Você decide enfrentar os noias com o seu ULTRA CANÃO DE PLASMA SUPERFREACKINGBLASTERMEGAPOWEROBLITERATORNATOR (pilhas não inclusas).</p> <button class='botao1' onclick='carregarConteudo(conteudoE1)'>Continuar</button>";

var conteudoD2 = "<img class='imagem' src='imagens/wastedsegundatela.png' />  <h2>Final ruim: Foi roubado otaro!</h2> <p>os cara vazaru com tua unica bateria, se fu#@! parcero, agora tu ta é morto, vai virar sucata.</p>";

var conteudoD3 = "<img class='imagem' src='imagens/robocomcrianca.png' /> <h2>Se aproxima um garoto.</h2> <p>Ao adentra-la, encontra um garoto.</p> <p>Bater no garoto?</p> <a href='https://www.camara.leg.br/noticias/774074-projeto-cria-lei-henry-para-coibir-violencia-contra-criancas-e-adolescentes/#:~:text=O%20Projeto%20de%20Lei%201360,e%20dano%20moral%20ou%20patrimonial'><button class='botao1'> Sim</button></a> <button class='botao1' onclick='carregarConteudo(conteudoE2)'>Não</button>";

var conteudoE1 = "<img class='imagem' src='imagens/quartatela.gif' /> <h2>E o obvio acontece.</h2> <p>Eles fogem</p> <button class='botao1' onclick='carregarConteudo(conteudoF1)'>Continuar</button>";

var conteudoE2 = "<img class='imagem' src='imagens/robocriancagatinho.png' /> <h2>A busca por Patrício.</h2> <p>- Oi tio, eu me chamo Denilton, você pode me ajudar a encontrar o meu gato? - Pergunta o garoto.</p> <button class='botao1' onclick='carregarConteudo(conteudoF2)'>Sim</button> <button class='botao1' onclick='carregarConteudo(conteudoF3)'>Não</button>";
  
var conteudoF1 = "<img class='imagem' src='imagens/quintatela.gif' /> <h2>IH SERJÃO SUJOU!!!!!!</h2> <p>Os tiras viram a treta toda e chegaram pra te prender, você vai tentar fugir?</p> <button class='botao1' onclick='carregarConteudo(conteudoG1)'>Sim</button> <button class='botao1' onclick='carregarConteudo(conteudoG2)'>Não</button>";

var conteudoF2 = "<img class='imagem' src='imagens/aliendaogato.png' /> <h2>Uma proposta um tanto quanto estranha.</h2> <p>Você e o garoto Denilton adentram a floresta em busca do gato.</p> <p>Após minutos de procura vocês encontram o gato com um ET.</p> <p>O ET após devolver patrício (o gato do Denilton)  lhe oferece a chance de encontrar algo valioso:</p> <p>-Aqui eu te dou a oportunidade de descobrir o maior segredo do universo, se aceitar pegue essa bateria moura e esse mapa, eles te manterão funcionando e te guiarão para seu destino, se não quiser vai a merda</p> <p>Você quer ir em busca do tesouro?</p><button class='botao1' onclick='carregarConteudo(conteudoG3)'>Mané tesouro</button> <button class='botao1' onclick='carregarConteudo(conteudoG4)'>Ir em busca do tesouro</button>";

var conteudoF3 = "<img class='imagem' src='imagens/robocriancagatinho.png' /> <h2>QUE TIPO DE MONSTRO VOCÊ É?</h2> <button class='botao1' onclick='carregarConteudo(conteudoE2)'>Voltar</button>";

var conteudoG1 = "<img class='imagem' src='imagens/setimatela.png' /> <h2>FINAL RUIM: Memória fraca.</h2> <p>Acho que você esqueceu mas não tinha mais quase nada de bateria sobrando.</p> <p>Na tentativa de fugir você acaba morto sem energia e, ainda pior, preso.</p>";

var conteudoG2 = "<img class='imagem' src='imagens/policia.png' /> <h2>Enquadrado!</h2> <p>Você rouba a bateria da viatura para conseguir mais energia?</p> <button class='botao1' onclick='carregarConteudo(conteudoH1)'>Sim</button> <button class='botao1' onclick='carregarConteudo(conteudoH2)'>Não</button>";

var conteudoG3 = "<img class='imagem' src='imagens/roboemeninoalien.png' /> <h2>FINAL SEMI-RUIM: Mais vale um covarde vivo do que um herói morto.</h2> <p>Você como um cidadão descente ajuda a criança (não é mesmo?), mas isso acaba consumido toda sua bateria restante, e como não aceitou a bateria Moura do ET você morre, mas, como um herói</p>";

var conteudoG4 = "<img class='imagem' src='imagens/robonacaverna.png' /> <h2>Em busca da caixa de Pandora</h2> <p>Você aceita a oferta do ET e usa o mapa para adentrar a floresta em busca da caixa de Pandora , pois nela esta o maior tesouro do universo, a coisa que pode acabar com qualquer guerra, pode curar qualquer chaga, pode torar qualquer um feliz novamente, um poder imensurável capaz do inimaginável e incompreensível.</p> <button class='botao1' onclick='carregarConteudo(conteudoH3)'>Continuar</button>";

var conteudoH1 = "<img class='imagem' src='imagens/oitavatela.png' /> <h2>Apologia ao crime!</h2> <p>Como um criminoso sem controle você rouba a bateria da viatura, restaurando sua energia.</p> <button class='botao1' onclick='carregarConteudo(conteudoI1)'>Continuar</button>";

var conteudoH2 = "<img class='imagem' src='imagens/sextatela.png' /> <h2>Final ruim: Nem sempre o certo da certo.</h2> <p>Como um cidadão exemplar você decide dialogar com as autoridades.</p> <p>Isso resulta em você apanhar de cassetete por 45 minutos e ainda ser preso.</p>";

var conteudoH3 = "<img class='imagem' src='imagens/insidecave.png' /> <h2>A GRUTA DO SÁBIO</h2> <p>Você finalmente encontra o local de descanso da caixa de Pandora, A caverna de Dibre, um local sagrado para toda humanidade, perdido no tempo.</p> <p>Lá é a morada do Sábio, o bruxo, o homem mais sagas que já viveu nesse planeta: Ronaldinho Gaúcho, ele olha para você e diz:</p> <p><br>- Estive te observado desde o inicio da sua jornada, logo quando te vi, sabia que era capaz e digno de encontrar este tesouro e abrir a caixa. Portanto meu nobre guerreiro de coração metálico e bateria Moura, você  vai abrir a caixa?</p><button class='botao1' onclick='carregarConteudo(conteudoI2)'>Sim</button> <button class='botao1' onclick='carregarConteudo(conteudoI3)'>Não</button>"

var conteudoI1 = "<img class='imagem' src='imagens/robovoacombateria.png' /> <h2>Liberdade (será?)</h2> <p>com isso você sai voando em direção em uma nova jornada, mas os policias não estão satisfeitos. Eles convocam sua mais poderosa arma...</p> <button class='botao1' onclick='carregarConteudo(conteudoJ1)'>Continuar</button>";

var conteudoI2 = "<embed class='imagem' src='imagens/videofinalyoshi.mp4' autostart='true'/> <h2>E você encontra...</h2>";

var conteudoI3 = "<img class='imagem' src='imagens/yoshi.jpg' /> <h2>FINAL PESSIMO:</h2> <p>TU TA DE BRINCADEIRA NÉ?</p>"

var conteudoJ1 = "<img class='imagem' src='imagens/robo x robocop.png' /> <h2>O BOLOCOP!</h2> <p>Quando esta próximo de fugir daquele lugar estranho você encontra ele, o mais temido de todos os policiais, aquele que nunca foi derrotado, que nunca deixou um vagabundo fugir, que é fã de pokémon nas horas vagas, que tem um total de 1143 casos bem sucedidos, o agente C477OT-C4K3 também conhecido como Bolocop.</p> <p>Sua única opção é enfrenta-lo com sua arma mais poderosa, você usa o ULTRA CANÃO DE PLASMA SUPERFREACKINGBLASTERMEGAPOWEROBLITERATORNATOR (pilhas não inclusas) ou a granada de mão?</p> <button class='botao1' onclick='carregarConteudo(conteudoK1)'>Ultra canão</button> <button class='botao1' onclick='carregarConteudo(conteudoK2)'>Granada de mão</button>";

var conteudoK1 = "<img class='imagem' src='imagens/robo ganhou do robobolo.png' /> <h2>ULTRA CANÃO DE PLASMA SUPERFREACKINGBLASTERMEGAPOWEROBLITERATORNATOR (pilhas não inclusas)</h2> <p>Ao ultilizar o UCPON (sigla facilitadora) você oblitera o Bolocop da existência, Fatality!</p> <button class='botao1' onclick='carregarConteudo(conteudoL1)'>Continuar</button>";

var conteudoK2 = "<img class='imagem' src='imagens/ROBOEXPLODETUDO.gif' /> <h2>Final ruim: Granada</h2> <p>Você decide utilizar a granada, que explode o bolocop, mas infelizmente te leva junto direto para o beleleu.</p>";

var conteudoL1 = "<img class='imagem' src='imagens/robovoaeganha.gif' /> <h2>Típico gancho de filme para um 2 que não vai acontecer por falta de bilheteria.</h2> <p>Com isso você consegue fugir para o espaço em busca de novas aventuras.</p> <p>Parabéns esse é o final bom (mas não o melhor).</p>";
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

function nome() {
  prompt('Para essa jornada é necessario um nome. \nINSIRA-O:')
}
nome()
carregarConteudo(conteudoA)