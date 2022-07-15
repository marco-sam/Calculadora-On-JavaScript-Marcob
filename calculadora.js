function calculadora (){
    const operacao = Number(prompt('Escolha uma opção: \n 1 - Soma(+) \n 2 - Subtração(-) \n 3 - Multiplicação(*)  \n 4 - Divisão Real(/) \n 5 - Divisão Inteira(%) \n 6 - Potência (**)'))
    if (!operacao || operacao >= 7) {
        alert("ERRO! Operação Inválida");
        calculadora();
    }else {

let n1 = Number(prompt('Insira o primeiro valor'));
let n2 = Number(prompt('Insira o segundo valor'));
let resultado;

if(!n1 || !n2) {
    alert("ERRO! Parametros inválidos")
    calculadora();
}else {


function soma(){
    resultado = n1 + n2;
    alert (`O resultado da soma entre ${n1} e ${n2} é igual ${resultado}`)
    nova();
}
function subtracao(){
    resultado = n1 - n2;
        if(n1 < n2) {
        alert('Subtração impossivel');
         }else{
        alert(`O resultado da subtração entre ${n1} de ${n2} é igual a: ${resultado}`)
        nova();
                }
}
function multiplicacao(){
    resultado = n1 * n2;
    alert (`O resultado da multiplicação entre ${n1} e ${n2} é igual a: ${resultado}`)
    nova();
}
function divisao(){
    resultado = n1 / n2;
        if(n1 < n2){
            alert('Divisão Impossivel');  
            nova();  
        } else {
            alert(`O resultado da divisão entre ${n1} e ${n2} é igual a: ${resultado}`)
            nova();
        }
}
function divisaoInt(){
    resultado = n1 % n2;
        if(n1 < n2){
        alert('Divisão Impossivel');    
        nova();
        } else {
        alert(`O resto da divisão entre ${n1} e ${n2} é igual a: ${resultado}`)
        nova();
    }

}
function potencia(){
    resultado = n1 ** n2; 
    alert(`{n1} elevado a ${n2} é igual a: ${resultado}`)
    nova();
}

function nova(){
    let opcao = prompt('Deseja realizar uma nova operação? \n1 - sim\n2 - Não');

    if (opcao == 1){
        calculadora();
    }else if(opcao == 2){
        alert(`Até a próxima!`)
    }else{
        alert('Digite uma opção válida!')
        nova();
    }
}

/*
if(operacao == 1){
    soma();
}else if(operacao ==2){
    subtracao();
}else if(operacao == 3){
    multiplicacao();
}else if(operacao == 4){
    divisao();
}else if(operacao == 5){
    divisaoInt();
}else if(operacao == 6){
    potencia();
            }
*/
switch (operacao){
    case 1:
        soma();
        break;
    case 2:
        subtracao();
        break;
    case 3:
        multiplicacao();
        break;
    case 4:
        divisao();
        break;
    case 5:
        divisaoInt();
        break;
    case 6:
        potencia();
        break;        
        }
     }
}
}
calculadora();
