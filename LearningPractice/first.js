// let number = prompt("Enter a number to check for Multiple of 5")
// console.log("You have entered ", number);

// let calc = number % 5;

// if (calc === 0){
//     console.log(number,"is a multiple of 5");
// }else {
//     console.log(number,"is not a multiple of 5");
// }

// Practice program 2

// let score = prompt("Enter number 0 - 100");

// let grade;

// if (score > 100){
//     score = prompt("Enter a valid score");
// }

// if (score >= 90 && score <= 100){
//     grade = "A";
// }else if (score >= 70 && score <= 89){
//     grade = "B";
// }else if (score >= 60 && score <= 79){
//     grade = "C";
// }else if (score >= 50 && score <= 59){
//     grade = "D";
// }else {
//     grade = "F"
// }

// console.log("As per score your grade is ", grade);



// print 1 to 100

// for (let i = 1; i <= 100; i++){
    
//     if ( i % 2 === 0){
//         console.log("Number =", i);
//     }
// }


// game .....................................
// let correctNumber = 22;

// let userGuess = prompt("Guess the Game number");



// while (correctNumber != userGuess){
//     console.log("Your guess",userGuess);
//     userGuess = prompt('Not the game number, Guess Again');
// }
// console.log(userGuess," Is the right guess.")

// let object = {
//     item : "pen",
//     price : 10,
// }

// let output = `the cost of ${object.item} is ${object.price}`;
// console.log(output);


// let fullName = prompt("Enter your full name to generate username");

// let trimmedFullName = fullName.replace(/\s+/g, '');

// let length = trimmedFullName.length;

// let username = "@" + trimmedFullName + length;

// console.log("username = ", username);


// let array = [85,97,44,37,76,60];
// let sum = 0

// for (let i of array){
//      sum += i;
// }

// let avarage = sum / array.length;

// console.log(avarage);


// let items = [250, 645, 300, 900, 50]

// for (let i = 0; i < items.length; i++){
//      let a = items[i];
//      let offer = a / 10;
//      items[i] = a - offer;
// }
// console.log(items);


// let comapanies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

// //console.log(comapanies);

// let deleteFirst = comapanies.shift();

// //console.log("deleted from frist = ", deleteFirst);

// //console.log(comapanies);

// comapanies.splice(2,1,"Ola")



// comapanies.push("Amazon");

// console.log(comapanies);


// function multi(a,b){
//      return a * b;
// }

// const multiple = (a,b) => {
//      return a * b;
// }


// function vowelCount(str){
//      let count = 0;

//      for (let char of str){
//           if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
//                count++;
//           }
//      }
//      console.log(count);

// }

// const vowCount = (str) => {
//      let count = 0;

//      for (let char of str){
//           if (char === "a" 
//                || char === "e" 
//                || char === "i" 
//                || char === "o" 
//                || char === "u"){
//                count++;
//           }
//      }
//      return count;
// }



// let array = [1, 2, 3, 4, 5, 6, 7];

// let array2 = array.map((val) =>{
//      return val * val
// });

// let arr = [1, 2, 3, 4, 5, 6, 7];
// let evenArr = arr.filter((val) => {
// return val % 2 === 0;
// })

// let marks = [10, 50, 70, 90, 100, 95, 91, 97, 98];

// let newMarks = marks.filter((val) => {
//      return val > 90 ;
// }) 

// console.log(newMarks);


// let n = prompt("Enter Number");

// let array = [];

// for (let i = 0; i < n; i++){
//      array[i] = i + 1;
// }

// console.log(array);

// let sumOfArray = array.reduce((prev, curr) => {
//      return prev + curr;
// })

// console.log(sumOfArray);



// let productOfArray = array.reduce((prev, curr) => {
//      return prev * curr;
// })

// console.log(productOfArray);


// let h2 = document.querySelector("h2");
// console.dir(h2);
// console.log(h2);

// h2.innerText = h2.innerText + "! I am learning IT";

// let divs = document.querySelectorAll(".box");

// id = 1;

// for (div of divs){
//       div.innerText = `Unique value ${id}`;
//       id++;
// }


// let elementDiv = document.querySelector("div");
// console.log(elementDiv);

// let id = elementDiv.getAttribute("id");
// console.log(id);

// let name = elementDiv.getAttribute("name");
// console.log(name); 

// let el = document.createElement("button");

// el.innerText = "click me";

// el.style.backgroundColor = "red";
// el.style.color = "white";

// let div = document.querySelector("body");
// div.append(el);

// let paraTag = document.querySelector("p");
// //paraTag.setAttribute("class","p2");
// paraTag.classList.add("p2");


// let button = document.querySelector("button");
// let mode = "light";
// let body = document.querySelector("body");

// button.addEventListener("click", () => {
//       if (mode === "light"){
//             mode = "dark"; 
//             body.setAttribute("class","dark")
//       }else{
//             mode = "light";
//             body.setAttribute("class","light")
//       }
// });


// class User {
//       constructor(name,email){
//             this.name = name;
//             this.email = email;
//       }
//       viewData(){
//             console.log("veiwing data");
//       }
// }

// let stu1 = new User("rifat", "email@email.com");
// let stu2 = new User("Tanvir", "email.com");

// let tech = new User("dean","email@com");

// class Admin extends User{
//       constructor(name,email){
//             super();
//       }
//       editData(){
//             console.log("edit");
//       }
// }

function asyncFunc1() {
      return new Promise((resolve, reject) =>{
            setTimeout(() => {
                  console.log("I am inside time out on ASYNC 01. waited for 5000 ms");
                  resolve("Resolving Promise");
            }, 4000);
      });
}

function asyncFunc2() {
      return new Promise((resolve, reject) =>{
            setTimeout(() => {
                  console.log("I am inside time out on ASYNC 02. waited for 3000 ms");
                  reject("Rejecting Promise");
            }, 4000);
      });
}


asyncFunc1().then((res) => {
      asyncFunc2().catch(res);
})

