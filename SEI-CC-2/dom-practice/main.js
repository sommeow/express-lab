let titleEl = document.querySelector('#title');
  console.log(titleEl);
let pEl = document.querySelector('p.cool');
  console.log(pEl);
let aEl = document.querySelector('a');

aEl.setAttribute('href', 'https://www.google.com')


  pEl.innerHTML = 'Comments for <strong>Today</strong>'
  titleEl.style.textAlign = 'center';

  let commentEls = document.querySelectorAll('.comment');
    console.log(commentEls);

  for(let commentEl of commentEls) {
      console.log(commentEl);
  }