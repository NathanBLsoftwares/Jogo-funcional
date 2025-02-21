// let numeroAleatorio = numeroSecreto();

// function exibirTextoNaTela(tag, texto){
//     let campo =document.querySelector (tag);
//     campo.innerHTML = texto;
// }

// exibirTextoNaTela ("h1", "Jogo do número secreto");
// exibirTextoNaTela ("p", "Escolha um número entre 1 e 10");

// function verificarChute(){
//     console.log(numeroAleatorio);
// }

// function numeroSecreto() {
//     return parseInt(Math.random() *10 + 1)
// }

function calcularDobro(numero){
    return numero *2
}
let resultadoDobro = calcularDobro(4);
console.log(resultadoDobro);