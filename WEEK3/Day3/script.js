//let b = 3, d = b, u = b;

//const tree = ++d * d*b * b++ +
 //+ --d+ + +b-- +
//+ +d*b+ +
 //u
 //console.log(tree);  

 //Javascript logical operators 
 // && - and
 // || - or
 // ! - not

 //Excercise -----

 //let num = 5;
 //Number is even
 //Number is odd
 //if(num % 2 == 0){
 //   console.log('The number is even');
 //}else{
   //  console.log('The number is odd');
 //}

// check if a variable is a number or not 
// use the isNaN
//variable is not a number
//variable is a valid number


//let a = 11;
//let b = '19';
//let c = 'abc';
//let d = '21d'
//let e = 21.5;

//let a = 11;
//if(isNaN(a)){
//    console.log ('Variable ' + a + ' is a valid number!');
//}else{
 //   console.log('Variable ' + a + ' is not a number');
//};

//Find the largest of three number/////////////

//if num1 print 'num1 is the largest'
//else if num2 print 'num2 is the largest'
//else print 'num3 is the largest'

//let num1 = 21, num2 = 45, num3 = 13
//let num1 = 34, num2 = 18, num3 = 52
//let num1 = 64, num2 = 11, num3 = 11

//let num1 = 21, num2 = 45, num3 = 13;
//    if(num1 >= num2 && num1 >= num3) {
  //  largest = num1;
//}
//else if (num2 >= num1 && num2 >= num3) {
  //  largest = num2;
//}
//else {
  //  largest = num3;
//}
//console.log("The largest number is " + largest);


//switch
//let x = 'home'
//switch (x){
 //   case 'about':
 //       console.log('about');
///case 'contact':
   //     console.log('contact');
  //  break;
// default
   //     console.log('page not found 404')    

//}


//objects 

//let obj = {
 //   key: value
 //   a:1
   // name: 'Jhon'
//arr: ['banana', 'orange', 'lemon']
//}

//console.log(obj.name);
//console.log(obj['name']);

//changing data inside an object
//let obj = 'banana';

//to delete something/ delete obj.a

//excercise objects

/*
Create a stuctured html file linked to a JS file

1. Create an object that has properties "username" and "password". Fill those values in with strings.

2. Create an array which contains the object you have made above and name the array "database".

3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".
*/

let user = {
    username : 'steve24',
    password: '23456'
}
let database = [];
//database.push(user);
database.push({username: 'carlos1', password:124562});
/*
[database.length] = user;
database[database.length] = user;
database[database.length] = user;*/
console.log(database);
