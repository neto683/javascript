function clicar(){
  var data = new Date()
  var ano =data.getFullYear()
  var fano = document.getElementById('cNum')
  var res = document.getElementById('res')
  var foto =document.getElementById('mulher')
  if(fano.value.length == 0|| Number(fano.value)> ano){
    window.alert('ERRO')
  }else{
    var fsex = document.getElementsByName('cSex')
    var idade = ano -Number(fano.value)
    var gernero= ''
    var img= document.createElement('img')
    img.setAttribute('id', 'foto')
    if(fsex[0].checked){
      gernero= 'Homem'
      if(idade>= 0 && idade< 10)
      img.setAttribute('src','imagens/homem-bebe.png')
      else if (idade< 21){
        img.setAttribute('src','imagens/homem-jovem.png')
      }else if(idade<50){
        img.setAttribute('src', 'imagens/homem-adulto.png')
      }else{
        img.setAttribute('src','imagens/homem-idoso.png')
      }
    }else if(fsex[1].checked){
      gernero='Mulher'
      if(idade>= 0 && idade< 10)
      img.src='imagens/mulher-bebe.png'
      else if (idade< 21){
        img.src='imagens/mulher-jovem.png'
      }else if(idade<50){
        img.src='imagens/mulher-adulta.png'
      }else{
        img.src='imagens/mulher-idosa.png'
      }
    }
    res.style.textAlign='center'
    res.innerHTML=`Detectamos ${gernero} com ${idade} anos`
    res.appendChild(img)
  }
}