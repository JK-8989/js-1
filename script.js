let btn = document.getElementById('submit');
let container = document.querySelector('.container')
btn.addEventListener('click', ()=>{
   btn.style.color = 'red'
   console.log('clicked')
})
container.addEventListener('mouseenter', ()=>{
   console.log('mouse enter')
})
container.addEventListener('mouseleave', ()=>{
   console.log('mouse left')
})
container.addEventListener('mousedown', ()=>{
   console.log('mouse down')
})
window.addEventListener('keydown', (event)=>{
   console.log(event.key);
})
console.log(window)