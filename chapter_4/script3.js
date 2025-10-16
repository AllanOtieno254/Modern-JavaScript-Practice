//objects literal notations
// let user = {
//     name: "John",
//     age: 30,
//     email: "john123@gmail.com",
//     location: "kenya",
//     blogs: ["why mac & cheese rules", "10 things to make with marmite"]
// }
// console.log(user);
// console.log(user.name);

// user.age=35;
// console.log(user.age);

// console.log(user["email"]);
// user["name"]="mario";
// console.log(user.name);

// console.log(typeof user);
// user.login();
// user.logout();

//methods in objects
// const blogs=[
//     {title: "why mac & cheese rules", likes: 30},
//     {title: "10 things to make with marmite", likes: 50}
// ];
// console.log(blogs);


let user = {
    name: "John",
    age: 30,
    email: "john123@gmail.com",
    location: "kenya",
    blogs: [
    {title: "why mac & cheese rules", likes: 30},
    {title: "10 things to make with marmite", likes: 50}
],
    login: function(){
        console.log("the user logged in");
    },
    // logout: function()
    logout(){
        console.log("the user logged out");
    },
    // logBlogs: function()
    logBlogs(){
        // console.log(this.blogs)
        console.log("this user has written the following blogs:");
        this.blogs.forEach(blog =>{
            console.log(blog.title, blog.likes);
        })
    }
}


// user.logBlogs();
// console.log(this)

//Math Object
console.log(Math);
console.log(Math.PI);
console.log(Math.E);

const area = 7.7;
const rounded = Math.round(area);
const floor = Math.floor(area);
const ceil = Math.ceil(area);
console.log(rounded);
console.log(floor);
console.log(ceil);
console.log(Math.min(3,5,1,6,8,-3));
console.log(Math.max(3,5,1,6,8,-3));


console.log(Math.random());
console.log(Math.round(Math.random()*100));


//primitive values
// let scoreOne = 50;
// let scoreTwo = scoreOne;

// console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

// scoreOne = 100;
// console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

//reference values
const userOne = { name: "John", age: 30 };
const userTwo = userOne;

console.log(`userOne: ${userOne.name}`, `userTwo: ${userTwo.name}`);

userOne.name = "Mario";
console.log(`userOne: ${userOne.name}`, `userTwo: ${userTwo.name}`);
