// for(let i=0; i<5; i++) {
    // console.log(`Loop iteration: ${i}`);
//     console.log("loop iteration: " + i);
// }


// const fruits=['apple', 'banana', 'cherry', 'date'];
// for(let i=0; i<fruits.length; i++) {
    // console.log(fruits[i]);
//     let html=`<div>${fruits[i]}</div>`;
//     console.log(html);
// }

// let names = ['Alice', 'Bob', 'Charlie'];
// names.push("allan");

// for (let i = 0; i < names.length; i++) {
//     console.log(names[i]);
//     console.log(`${i} - Hello ${names[i]}`);
// }


// // while loop
// let i = 0;
// while (i < names.length) {
//     console.log(names[i]);
//     console.log(`${i} - Hello ${names[i]}`);
//     i++;
// }


// let names = ['Alice', 'Bob', 'Charlie'];

// remove last element
// names.pop(); // ['Alice', 'Bob']

// replace 'Bob' with 'Allan'
// names[names.indexOf("Bob")] = "Allan";

// convert all names to uppercase
// names = names.map(name => name.toUpperCase());

// print with while loop
// let i = 0;
// while (i < names.length) {
//     console.log(names[i]);
//     console.log(`${i} - Hello ${names[i]}`);
//     i++;
// }

//do while loop
// let i=5;
// do {
//     console.log(i);
//     i++;
// } while(i<5);


//if condition
// const age = 20;
// if (age>20) {
//     console.log("you are over 20yrs old")
// } 
// else {
//     console.log("you are under 20yrs old")
// }


// const ninjas=['shaun', 'ryu', 'chun-li', 'yoshi'];
// if (ninjas.length>3) {
//     console.log("that's a lot of ninjas")
// }
// else {
//     console.log("that's not a lot of ninjas")
// }

// const password='password1234';

// if(password.length>=12) {
//     console.log("that password is mighty strong")
// }
// else if(password.length>=8) {
//     console.log("password is long enough")
// }
// else {
//     console.log("password is not long enough")
// }

//logical operators-AND(&&), OR(||), NOT(!)
// const password='password@1234';

// if(password.length>=12 && password.includes("@")) {
//     console.log("that password is mighty strong")
// }
// else if(password.length>=8 || (password.includes("@") && password.length>=5)) {
//     console.log("password is strong enough")
// }
// else {
//     console.log("password is not strong enough")
// }

//break and continue
// const student_names=['mario', 'luigi', 'toad', 'peach', 'bowser', 'yoshi', 'wario'];
// const scores = [50, 25, 0, 30, 100, 20, 10];

// for (let i = 0; i < scores.length; i++) {
//     console.log(`Your score is: ${scores[i]}`);

//     if (scores[i] === 0) {
//         console.log("You got 0, better luck next time.");
//         continue; // skips the rest and goes to next iteration
//     }

//     if (scores[i] === 100) {
//         console.log("You passed. Congratulations!");
//         break; // stops loop when perfect score found
//     } 
//     else if (scores[i] > 50 && scores[i] < 100) {
//         console.log("You've done well.");
//     } 
//     else if (scores[i] > 30 && scores[i] <= 50) {
//         console.log("Try harder next time.");
//     } 
//     else {
//         console.log("You failed. Better luck next time.");
//     }

//     console.log("-------------------");
// }

//switch statement
// grade='';
// switch (grade) {
//     case 'A':
//     case 'a':
//         console.log("You got an A!");
//         break;
//     case 'B':
//     case 'b':
//         console.log("You got a B!");
//         break;
//     case 'C':
//     case 'c':
//         console.log("You got a C!");
//     case 'D':
//     case 'd':
//         console.log("You got a D!");
//         break;
//     case 'E':
//     case 'e':
//         console.log("You got an E!");
//         break;
//     default:
//         console.log("Not a valid grade");
// }


//variable & block scope
let age=30;
if(true) {
    let age=40; //this age is only available in this block
    let name="allan";
    console.log("inside 1st block: ",age,name);
    if(true) {
        let age=50;
        let name="bob";
        console.log("inside 2nd block: ",age,name);
    }
}

console.log("outside blocks: ",age,name);//name is not defined since its only available in the block    


