const btn = document.querySelector('button');
const ul = document.querySelector('ul');


btn.addEventListener('click', function(evt) {
    console.log(evt);
    const li = document.createElement('li');
    const inp = document.querySelector('input');
    li.textContent = inp.value;
    inp.value = ''; // clears out the input box adter submitting
    console.log(li); 
    ul.appendChild(li);
    console.log(li);
});

ul.addEventListener('click', handleClick);

function handleClick(evt) {
  evt.target.style.fontSize = '40px';
  evt.target.style.color = 'pink';
}