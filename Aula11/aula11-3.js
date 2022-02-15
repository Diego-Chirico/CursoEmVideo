var txtv = window.document.querySelector('input#txtvel');

function calcular(){
    var vel =Number(txtv.value);
    var res = window.document.querySelector('div#res');
    res.innerHTML = `<p>A sua velocidade é de <strong> ${vel} km/h </strong></p>`
    if(vel>60){
        res.innerHTML += `<p> Você esta <strong>Multado</strong> por excesso de velocidade</p>`
    }
    res.innerHTML+='<p>Dirija com cinto de segurança</p>'
}