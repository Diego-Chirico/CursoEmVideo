var agora = new Date()
var diaSem= agora.getDay()
/*
O getDate traz os dados da seguinte forma:

0 = DOMINGO
1 = SEGUNDA
2 = TERÇA
3 = QUARTA
4 = QUINTA
5 = SEXTA
6 = SABADO
*/

switch(diaSem){
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('terça')
        break
    case 3:
        console.log('quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sábado')
        break
    default:
        console.log('[ERRO] dia inválido')
        break

}