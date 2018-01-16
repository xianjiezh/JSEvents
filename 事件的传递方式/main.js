let grand = document.getElementsByClassName('grandFa')[0]
let father = document.getElementsByClassName('father')[0]
let son = document.getElementsByClassName('son')[0]

console.log(grand)
grand.addEventListener('click',function(){
    console.log('爷爷冒泡')
},false)
father.addEventListener('click',function(){
    console.log('父亲冒泡')
},false)
son.addEventListener('click',function(){
    console.log('儿子冒泡')
},false)

grand.addEventListener('click',function(){
    console.log('爷爷捕获')
},true)
father.addEventListener('click',function(){
    console.log('父亲捕获')
},true)
son.addEventListener('click',function(){
    console.log('儿子捕获')
},true)
