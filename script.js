let textarea = document.getElementById('text');
let rc = document.getElementById('rightcount')
let lc = document.getElementById('leftcount')

textarea.addEventListener('keyup' , ()=>{

    count()

})

function count(){
    rc.innerText = textarea.value.length

    lc.innerText = textarea.getAttribute('maxlength')-textarea.value.length

}