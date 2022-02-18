var b1 = window.document.getElementById("b1");
var b2 = window.document.getElementById("b2");
var b3 = window.document.getElementById("b3");
var b4 = window.document.getElementById("b4");



function calcular(){
    var nota1 = Number(b1.value)
    var nota2 = Number(b2.value)
    var nota3 = Number(b3.value)
    var nota4 = Number(b4.value)
    var media =(nota1+nota2+nota3+nota4)/4
    var res = window.document.querySelector('div#res');
    
    if(media>=7){
        res.innerHTML = `<p>A sua média final é de <strong> ${media} </strong> você foi Aprovado</p>`
    }else if(media>=4 && media <7 ){
        res.innerHTML = `<p>A sua média final é de <strong> ${media} </strong> você esta de Recuperação, Estude mais!</p>`
    }else{
        res.innerHTML = `<p>A sua média final é de <strong> ${media} </strong> você foi Reprovado</p>`
    }
}