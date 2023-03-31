let addressNumber = '24 ';
let addressStreet = 'Bengurion ';
let country = ' Israel';
let globalAddress = 'I live in ' + addressStreet + addressNumber + 'street,' + country;
console.log(globalAddress);
//String Methods
//replace
//let string = 'Please visit Microsoft!';
//let string1 = string.replace ('Microsoft', 'Developers Institute');
//console.log(string1);

//let str = '    Hello      ';
//remove spaces from right
//let str1 = str.trim();
//trim will remove all spaces

//number methods

//let a = 5;
//a.toString();

//let x = 9.656
//x.toFixed(0) //10
//x.toFixed(2) //9.66
//x.toFixed(6) //9.656000

//let b = '1.5';
//let c = Number(b)
//parseInt();
//parseFloat();

//isNaN('1') //will return is not an number because the ''.


//arrays

//let arr = ['apple',['one','two', 'three'], 'banana','kiwi'];
//let arr1 = new Array();
//console.log(arr);
//arr[0] = 'orange';
//console.log(typeof(arr));
//console.log(arr[1][1]);

//array methods

//let fruits = ['banana','orange' , 'apple' , 'mango'];
//console.log(fruits);
//console.log(fruits.toString()); //make an arry into a string

//let str = fruits.join('#$#%'); // to add content 
//console.log(str)


// pop to remove the last element 
//console.log(fruits.pop());
//push to move the element to the end of the array 
//console.log('kiwi');

//shift to remove the first element
//fruits.shift();

//unshift will add on the first element (0 index)
//fruits.unshift('lemon');
//console.log(fruits);

//index is the position an element occupies on the array 
//-1 the last element
//0 the first element 


//excercise3 - arrays
let pets = ['cat','dog','fish','rabbit','cow'];
console.log(pets[1]);
pets.push('horse');
console.log(pets);

pets.splice(3,1);
console.log(pets);


//prompt (to create pop ups that require answers)

let name = prompt('What is your name?');
console.log(name);


let yesno = confirm('Yes or No?');
console.log(yesno);

let number = prompt('Your Number?');
console.log(number);

let a = 1;
let b = 1;
console.log(a != b);

// === same type 
// == will try to convertem to compare them 
// > / < / >= / <= 

var statement1 = 'He said "JavaScript is awesome!"';
var statement2 = "He said \"JavaScript is awesome!\"";
var welcome = "Hello World";
console.log(welcome);












