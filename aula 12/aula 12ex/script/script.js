function carregar(){
  var msg = window.document.getElementById('msg')
  var img =window.document.getElementById('imagem')
  var data= new Date()
  var hora = data.getHours()
  msg.innerHTML = `Agora são ${hora} horas.`
  msg.style.textAlign='center'
   if (hora >= 0 && hora < 12) {
     console.log('caino de 12')
     document.body.style.backgroundColor='#e4cac0'
    img.src = 'imagens/fotomanha.png'
    }else if (hora > 12 && hora < 18){
      console.log('caino de 13')
    img.src= 'imagens/fototarde.png'
    document.body.style.backgroundColor='#a96c71'
    }else{
      console.log('caino de 14')
    img.src='imagens/fotonoite.png'
    document.body.style.backgroundColor='#042024'
    }
}
