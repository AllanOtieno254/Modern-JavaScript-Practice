const link = document.querySelector('a');
//getting the attribute
console.log(link.getAttribute('href'));

//changing the attribute
link.setAttribute('href', 'https://www.thenetninja.co.uk');

//changing the text
link.innerText = 'The Net Ninja Website';

const mssg= document.querySelector('p');
console.log(mssg.getAttribute('class'));
mssg.setAttribute('class', 'success');
mssg.setAttribute('style', 'color: green;'); 

const title = document.querySelector('h1');
console.log(title.getAttribute('class'));
title.setAttribute('style', 'margin: 50px;');
title.style.color = 'blue';
title.style.fontSize = '60px';