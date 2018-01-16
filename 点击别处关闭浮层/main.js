let one = document.getElementsByClassName('one')[0]
let two = document.getElementsByClassName('two')[0]
let check = document.getElementById('check')
one.addEventListener('click',function(e){
    
    if(e.target !== check && e.target !== two){
        if(two.style.display == 'block'){
            two.style.display = 'none'
        } else{
            two.style.display = 'block'
        }
    }
    
    
})
document.addEventListener('click',function(e){
    if(e.target === document.documentElement){
        console.log('document')
        two.style.display = 'none'
    }
})