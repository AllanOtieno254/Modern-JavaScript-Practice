const para=document.querySelector('p');
console.log(para);

const par1=document.querySelector('.error');
console.log(par1);

const paras=document.querySelectorAll('p');
console.log(paras);
console.log(paras[0]);

const par2=document.querySelector('div.error');
console.log(par2); 

const par3=document.querySelectorAll('p');
par3.forEach(paragraph=>{
 console.log(paragraph)
})

const errors= document.querySelectorAll('.error');
console.log(errors);


//get an element by id
const title= document.getElementById('page-title');
console.log(title);

const class_error=document.getElementsByClassName('error');
console.log(class_error);

const tagname=document.getElementsByTagName('p');
console.log(tagname);