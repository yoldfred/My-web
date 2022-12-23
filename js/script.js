
const boton = document.getElementById('toggle');
const cambio =document.getElementById('nav');

boton.addEventListener('click' , ()=>{
    cambio.classList.toggle('nav--show');
});
window.addEventListener('resize', ()=>{
    if(cambio.classList.contains('nav--show')){
        cambio.classList.remove('nav--show')
    }
})