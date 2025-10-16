//function declaration
function greet(name) {
    return "Hello, " + name + "!";
}
console.log(greet("Alice")); // Output: Hello, Alice!

function greet1(name1)
{
    console.log("Hello there" + " " + name1);
}
greet1("Bob");

//function expression: we normally add ; at the end
const speak = function(){
    console.log("Good Day")
};

speak();

//arguments And Parameters
const speak1 = function(name = "luigi", time = "night"){
    console.log(`Good ${time} ${name}`);
};

speak1();
speak1("Mario", "morning");
speak1("Yoshi", "afternoon");

const calcarea= function(radius){
    // return 3.14*radius**2;
    let area= 3.14*radius**2;       
    return area;
};
// console.log("Area is: " + calcarea(33));
const area=calcarea(5);
console.log(area);

//arrow function
const calcarea1 = (radius) =>{
    return 3.14*radius**2;
};
const area1=calcarea1(7);
console.log("Area is: " + area1);

const greet3 = (name) => {
  console.log(`Hello, ${name}!`);
};
greet3("Charlie");


//practice arrow function 
// const greet4=function(name){
//     return `Hello, ${name}!`;
// }
// console.log(greet4("Doctor"));

const greet5=(name)=>{
    return `Hello, ${name}!`;
};
console.log(greet5("Doctor"));

//simplified arrow function
const calcarea2 = radius => 3.14*radius**2;
const area2=calcarea2(10);
console.log("Area is: " + area2);

// const bill = function(products, tax){
//     let total = 0;
//     for (let i = 0; i < products.length; i++) {
//         total += products[i] + (products[i] *tax)
//     }
//     return total;
// };

// console.log(bill([10,15,20,30], 0.2));

//arrow function for the above
const bill=(product,tax)=>{
    let total=0;
    for(let i=0;i<product.length;i++){
        total+=product[i]+(product[i]*tax);
    }
    return total;
};
console.log(bill([10,15,50,30],0.2));
// const total=bill([10,15,20],0.2);
// console.log("Total bill is: " + total);


//function
const name="shaun";

const greet7 = ()=> "Hello, " + name;
let resultone=greet7()
console.log(resultone);

//methods

const resultTwo= name.toUpperCase();
console.log(resultTwo); 


//callbacks & foreach
const people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

people.forEach((person, index) => {
    console.log(index, person);
});

//callback function
const logPerson = (person, index) => {
    console.log(`${index} - hello ${person}`);
};
people.forEach(logPerson);
