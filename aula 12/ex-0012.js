var agora = new Date()
var hora =agora.getHours() 
console.log(`AGORA SÃO EXATAMENTE ${hora} horas`)
if(hora > 0 && hora < 12){
    console.log('Bom dia')
}else if(hora > 13 && hora < 18 ){
    confirm.log('Boa Tarde')
}else{
    console.log('Boa noite')
}