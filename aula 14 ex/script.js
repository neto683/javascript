function contar() {
  let ini = document.getElementById('cNum')
  let fim = document.getElementById('cFim')
  let passo = document.getElementById('cPass')
  let res = document.getElementById('res')
  if (
    ini.value.length == 0 ||
    fim.value.length == 0 ||
    passo.value.length == 0
  ) {
    window.alert('ERRO Faltao dados')
  } else {
    res.innerHTML = '<p>contando...</p>'
    let i = Number(ini.value)
    let f = Number(fim.value)
    let p = Number(passo.value) 
    console.log(passo.valeu)
    console.log(p)
    console.log(ini.valeu)
    for (let c = i; c <= f; c += p) {
      res.innerHTML += `${c}`
    }
  }
}
