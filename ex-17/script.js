var num = window.document.getElementById('cNum')
var lista = window.document.getElementById('cSelec')
var res = document.createElement('res')
var valores = []

function isNumero(n){
  if(Number(n) >= 1 && Number(n)<=100){
    return true
  }else{
    return false
  }
}
function inLista(n, l){
  if(l.indexOf(Number(n)) != -1){
    return true
  }else{
    return false
  }
}

function addicionar(){

 if(isNumero(num.value) && !inLista(num.value, valores)){
   valores.push(Number(num.value))
   var item =document.createElement('option')
   item.text=`Valor ${num.value} adicionado`
  lista.appendChild(item)
  res.innerHTML=''
 }else{
   window.alert('Valor invalido ou já encontrado na lista')
 }
 num.value=''
 num.focus()
}
function finalizar(){
  if(valores.length == 0){
    window.alert('Adicione valores antes de finalizar')
  }else{
    var total = valores.length

    res.innerHTML= 'ola'
    res.innerHTML += `<p> ao todo, temos ${total} números cadastrados</p>`
  }
}
