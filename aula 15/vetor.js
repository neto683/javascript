var valores=[8,1,7,4,2,9]
valores.sort()
console.log(valores.indexOf(99))
//console.log(valores) para mostra os valores

/*console.log(valores[0])  aki mostra os valores idividuais com muito trabalho
console.log(valores[1])    e deixndo o codigo feio então sempre vamos usar o
console.log(valores[2])    for(  ;   ;  )
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])*/

/*for(var pos=0;pos<valores.length;pos++){
    console.log(`na posição ${pos} tem o valor ${valores[pos]}`)
}// criamos uma variavel qualquer aki no exemplo é a variavel pos que tem q começar no 0 e enquato pos for menor q o vetor, o pos vai receber pos +1 ou seja pos++
*/
for(var pos in valores){
    console.log(`na posição ${pos} tem o valor ${valores [ pos ]}`)
}// a difrença do primeiro for pra esse é que ele é mais simplifiado... ele é otimizado para variaveis compostas e objetos...  o for a gente ler para o in se ler dentro então para cada posição em num eu vou mostra o valores[pos]
