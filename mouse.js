//mouse up and down
const heading=document.querySelector('h1');
const btn=document.querySelector('.btn');

btn.addEventListener('click', function(){
    consolee.log('you clicked me');
});
btn.addEventListener('mousedown', function(){
    console.log('down');
});
btn.addEventListener('mouseup', function(){
    console.log('up');
});
