//SYNTAX BASICS & TYPES

//1.printing outputs

// alert('Hello, world!');
// console.log("Hello, console!");


//2.variable declarations

//we use let so that we can change value of the variable
let age=12;
let year=2024;
console.log(age,year);

age=13;
console.log(age);

//we use const so that we cant change value of the variable
const points=100;
console.log(points)

// points=50; //this will give error
// console.log(points)

//we can also use var to declare variable but its not recommended
var score=80;
console.log(score)

score=90;
console.log(score)

//3.data types
// Number : integers/decimals
let radius=10
const pi=3.142
let area=pi*radius*radius//or pi*radius**2
console.log(area)

//num with operators
console.log(10/2)
let remainder=10%3
console.log(remainder)

//order of operations BODMAS
let result4=5*(10-2)**2
console.log(result4)

let likes=2
likes++
console.log(likes)

likes+=10
console.log(likes)

likes-=5
console.log(likes)

likes*=2
console.log(likes)

// NaN-Not a Number
console.log(5*"hello")

//concatenating Number and strings
let result5="The blog has "+likes+" likes"
console.log(result5)

// i.String : Characters
console.log("Hello world");
let email = "allanotieno2001@gmail.com";
console.log(email);

//string concatenation
let firstName = "Allan";
let lastName = "Otieno";
let fullName = firstName + " " + lastName;
console.log(fullName);

//getting characters
console.log(fullName[0]);
console.log(fullName[6]);
console.log(fullName.length);
//or
console.log(fullName.charAt(0));

//string length
console.log(firstName.length-1);
console.log(fullName[fullName.length-1]);
console.log(fullName.charAt(fullName.length - 2));

//string methods
console.log(fullName.toUpperCase());
let result = fullName.toLowerCase();
console.log(result);
console.log(result,fullName);
console.log(fullName.indexOf("O"));
console.log(fullName.toLowerCase());

let emails="allanotieno2001@gmail.com"

let results=emails.lastIndexOf("n");
let results1=emails.slice(0,15);
let results2=emails.substr(0,5);
let results3=emails.replace("allan","allie");
console.log(results,results1,results2,results3);

//Template strings
const title="Best reads of 2024";
const author="Allan Otieno";
const likes1=30;

console.log(`The blog "${title}" by ${author} has ${likes1} likes.`);

//Creating html templates
let html=`
    <h2>${title}</h2>
    <p>By ${author}</p>
    <span>This blog has ${likes1} likes</span>
`;
console.log(html);


// Boolean : True / False

console.log(true,false, "true", "false");

let email3="allanotieno@yahoo.com"
result=email3.includes("@");//if i use ! it means theres no that sign hence ill get false as answer
console.log(result)

let names=["allan","ryan","charlene"];
result=names.includes("kim");
console.log(result)

//comparison operator
let age3=25;
console.log(age3==25);
console.log(age3==30);
console.log(age3!=30);
console.log(age3>20);
console.log(age3<20);
console.log(age3<=25);
console.log(age3>=25);

let name="shaun"

console.log(name=="shaun");
console.log(name>"crystal");
console.log(name>"Shaun");
console.log(name>"Crystal");


let age9=25;
// loose comparison
console.log(age9==25);
console.log(age9=="25");
console.log(age9!=25);
console.log(age9!= "25");

// strict comparison
console.log(age9===25);
console.log(age9==="25");
console.log(age9!==25);
console.log(age9!== "25");

// null : explicitly set a variable with no value
// undefined : for variable that have not yet been defined

let age1;
console.log(age1,age1+3,`the age is ${age1}`); //undefined

let score1=null;
console.log(score1,score1+3,`the score is ${score1}`); //null


// Object : complex data structures which can have diff properties and functions -arrays,dates,literals etc

let ninja=["Allan","ryan","charlene"];
console.log(ninja)
console.log(ninja[1])
ninja[1]="ken"
console.log(ninja)
console.log(ninja.length)

let user={
    name:"Allan",
    age:22,
    email:"allanotieno2001@gmail.com"
};
console.log(user)

//array methods
let students=["allan","ryan","charlene"];
let students1 = students.join(",");//you can use - or space instead of ,
let students2 = students.indexOf("charlene");
students.push("mary","jane","peter","paul");
students.pop();
let concatenated=students.concat("ken","crystall");
console.log(students1,students2,students,concatenated);

//type conversion
let scores="100";

scores=Number(scores)
console.log(scores+1);
console.log(typeof score);


let result12=String(50);
console.log(result12,typeof result12);


let result13=Boolean(100);
console.log(result13,typeof result13);







