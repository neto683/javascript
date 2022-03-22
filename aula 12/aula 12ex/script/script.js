function carregar(){
var agora = new Date()
var hora = agora.getHours()
var p = window.document.getElementById('hora')
p.innerHTML = 'Agora são ' + hora + ' horas.'
p.style.textAlign ='center'
}
