var agora= new Date()
var diaSem = agora.getDay()

/*
os dias da semana em javaScript são da seguinte maneira:
0 = Domingo
1 = Segunda
2 = terça
3 = quarta
4 = quinta
5 = sexta
6 = sabado
*/
switch(diaSem){
    case 0:
        console.log('Domingo')
        break                           //não esqueccer o break
    case 1:
         console.log('Segunda-Feira')
         break
    case 2:
        console.log('Terça-Feira')
        break
    case 3:
        console.log('Quarta-Feira')
        break
    case 4:
        console.log('Quinta-Feira')
        break
    case 5:
        console.log('Sexta-Feira')
        break
    case 6:
        console.log('Sabado')
        break
}//  o switch é muito boa para testar dados pontuais, para intervalos é muito melhor usar if, else if,else...  só funciona com numeros inteiros e com strings os switch...







