let one = document.getElementsByClassName('one')[0]
let two = document.getElementsByClassName('two')[0]
let check = document.getElementById('check')
one.addEventListener('click',function(e){
    if((e.target !== two) && (!two.contains(e.target))){
        if(two.style.display == 'block'){
            two.style.display = 'none'
        } else{
            two.style.display = 'block'
            // 在浮层出现时监听，节约资源
            document.addEventListener('click',function(e){
                if(e.target === document.documentElement){
                    two.style.display = 'none'
                }
            })
        }
    }
})
