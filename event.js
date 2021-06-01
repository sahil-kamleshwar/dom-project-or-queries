//select element
//addEventListener
//what event, what to do

const btn=document.querySelector('.btn');
const heading=document.querySelector('h2');
btn.addEventListener('click',function(){
    console.log('hey you clicked me');
});
btn.addEventListener('click', function(){
    heading.classList.add('red');
});