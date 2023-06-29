// return 
// condicionales
const btn = document.createElement('button')

btn.innerText = 'Autorizado?'

let Autorizado = false;

btn.addEventListener('click',()=>{
    if(Autorizado){
        return alert('Está autorizado')
    }
    alert('No está autorizado')
})


document.body.append(btn)                                                                                                                                                                                                                                                             