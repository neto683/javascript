function clicar(){
  var num = document.getElementById('cNum')
  var tab = document.getElementById('seltab')
  var res = document.getElementById('res')

  if(num.value.length == 0 ){
    alert('Porvafor digite um numero')
  }else{
    var n =Number(num.value)
    var c =1
    while(c<=10){
      var item = document.createElement('option')
      item.text=`${n} x ${c}= ${n*c}`
      tab.appendChild(item) 
      c++
      console.log(c)
    }
  }
   
  }

