
var nome = window.prompt('qual é seu nome? ');
document.write(`É um prazer te conhecer ${nome.toUpperCase()}.<br>`); 
    var n1 = Number.parseFloat(window.prompt('digite um número? '));
    var n2 = Number.parseFloat(window.prompt('Digite outro número? '));
    var soma =  n1 + n2;
    document.write(`${nome.toUpperCase()}, a soma entre ${n1.toFixed(2).replace('.',',')} e ${n2.toFixed(2).replace('.',',')} que você digitou é ${soma.toFixed(2).replace('.',',')} <br>`);
    document.write(`Se fosse em dinheiro essa soma vc teria agora ${soma.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})}`);
