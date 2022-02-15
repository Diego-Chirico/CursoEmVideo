/*var pais ='EUA';
console.log(`Você vive no ${pais}`);
if(pais != 'brasil'){
    console.log('Você é gringo');
} else{
    console.log('você é brasileiro');
}*/


var txtn = window.document.querySelector('input#txtnac');

function verificar(){
    var nacionalidade =(txtn.value);
    var res = window.document.querySelector('div#res');
    res.innerHTML = `<p>Você nasceu no(a) <strong> ${nacionalidade}, é um belo país!  </strong></p>`
    if(nacionalidade!='Brasil'){
        res.innerHTML += `<p> Como estamos no Brasil você que nasceu no(a) <strong>${nacionalidade}</strong> é considerado gringo aqui!</p>`
    }else{
    res.innerHTML +='<p> Então você é Brazuka.. é nóis parça!</p>'
    }
}