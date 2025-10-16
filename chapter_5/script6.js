const para=document.querySelector('p');

//getting inner text of element
console.log(para.innerText);

//updating the innertext
para.innerText="Ninjas are Awsome"

// changing text of several items
const paras=document.querySelectorAll('p');
paras.forEach(para => {
    console.log(para.innerText);
    para.innerText += " " +"new Text";
});

//getting text of several items
const content=document.querySelector('.content');
// console.log(content.innerHTML);
// content.innerHTML = '<h2>This is a new H2</h2>';

const people=['mario','luigi','yoshi'];
people.forEach(person => {
    content.innerHTML += `<p>${person}</p>`;
});


// console.log(para.textContent);
// console.log(para.innerHTML);
// console.log(para.outerHTML);