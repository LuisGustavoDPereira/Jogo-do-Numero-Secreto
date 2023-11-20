var listaDeNumerosSorteados = [];
var numroLimite = 10;
var numeroSecreto = gerarNumeroAleatorio(); 
var tentativas = 1;



// var titulo = document.querySelector("h1");
// titulo.innerHTML = "Jogo do Número Secreto";

// var paragrafo = document.querySelector("p");
// paragrafo.innerHTML = "Escolha um Número de 1 a 10";

function exibirTextoTela (tag,texto){
    var campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate:1.0});
}

function exibirTextoInicial() {
    
    exibirTextoTela ("h1", "Jogo do Número Secreto");
    exibirTextoTela ("p", "Escolha um Número de 1 a 10");
}

exibirTextoInicial();

function verificarChute(){
    var chute = document.querySelector("input").value;
    
    if (chute == numeroSecreto) {
        
        exibirTextoTela ("h1" , "Acertou!");
        var palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        var mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoTela ("p" ,mensagemTentativas);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if (chute  > numeroSecreto) {

            exibirTextoTela ("p" , "O número secreto é menor");
            
        } else {
            exibirTextoTela ("p" , "O número secreto é maior");
        }
        // tentativas = tentativas + 1;
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio () {
   
    var numeroEscolhido = parseInt(Math.random() * numroLimite + 1  );
    var quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numroLimite) {

        listaDeNumerosSorteados = [];
    }


   if (listaDeNumerosSorteados.includes(numeroEscolhido)){
 
    return gerarNumeroAleatorio();
   } else{
    console.log(listaDeNumerosSorteados);
    listaDeNumerosSorteados.push(numeroEscolhido);
    return numeroEscolhido;

   }
}

function limparCampo() {

    chute = document.querySelector("input");
    chute.value = "";
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirTextoInicial();
    document.getElementById ("reiniciar").setAttribute("disabled" , true);
}