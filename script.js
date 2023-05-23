let num = document.querySelector('input#num')
let select = document.querySelector('select#Select')
let res = document.querySelector('div#examinado')
let valores = []

function Énumero(n){
if(Number(n)>=1 && Number(n)<=100){
    return true
}else{
    return false
}}

function Númeronovo(n,l){
if(l.indexOf(Number(n)) != -1){
    return true
}else{
    return false
}}

function adicionar(){
    if(Énumero(num.value) && !Númeronovo(num.value,valores)){
      valores.push(Number(num.value))
      let item = document.createElement('option')
      item.text= `Valor ${num.value} adicionado`
      select.appendChild(item)
      res.innerHTML = ``
    }else{
        window.alert(`Valor invalido ou ja encontrado na lista!!`)
    }
    num.value = ``
    num.focus()
}

function teste(){
if (valores.length==0){
window.alert(`Adicione valores antes de começar`)
}else{
    let total = valores.length
    let maior = valores[0]
    let menor = valores[0]
    let soma = 0
    let media = 0
    for(let pos in valores){
        soma += valores[pos]
        if (valores[pos]>maior){
            maior=valores[pos]
        }if(valores[pos]<menor){
            menor = valores[pos]
        }
    }
media = soma/total
res.innerHTML=``
res.innerHTML+=`<p>Ao todo,${total} elementos foram adicionados.</p>`
res.innerHTML+=`<p>O maior valor informado foi ${maior}.</p>`
res.innerHTML+=`<p>O menor valor informado foi ${menor}.</p>`
res.innerHTML+=`<p>A soma dos valores informados é ${soma}.</p>`
res.innerHTML+=`<p>A média dos valores informados é ${media}.</p>`
    }
}