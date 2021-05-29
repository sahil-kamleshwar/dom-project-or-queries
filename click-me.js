//select element
//addEvenetlistener
// what event, ehat to do

const btn=document.querySelector('.btn');
const heading=document.querySelector('h2');
btn.addEventListener('click', function(){
    heading.classList.add('red');
});