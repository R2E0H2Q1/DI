/*Javascript functions

let x = 2;
let y = 4;
console.log(x + y);

x = 8

log(x + y)*/

// How to declare a functions 

//function the_name_of_the_function (){}

/*let x = 9;
let y = 1;

sum();

function sum(){
    console.log(x + y);
}*/

/*Return///
let x = 9;
let y = 1;

sum();

function sum(){
   return x + y 
}
let ret = sum();

console.log('ret=>',ret);*/

// Write a function that returns the sqare of a number 
// Function 'findSquare()' returns the sqare of the input number which 
// is passed as an argument 

/*function findSquare(num){
    return num;
}
console.log(4);*/

/*Write a function to convert Celsius to Farenheit.
Function 'calFarenheit()' returns the converted Celsius value to Fahrenheit
value based on the formula '(celsius x 9/5) + 32 = Fahrenheit'

function calFarenheit(celsius){
    return (celsius * 9/5) + 32
}
let far = calFarenheit(0)
console.log(far);*/

///////////////////////////////////////////////////////////////////////
/*Count number of vowels in a string
Function 'countVoweL()' returns the number of vowels in input string.*/

/*function countVoweL(str){
    str = str.tolowercase();
    let count = 0;
    for (var i = 0); i < str.length; i++){
        if(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u')
    }
        count++;
}


console.log('A function is a recipe.');*/


/*function parentsAge(me){
    let mum = 2 * me;
    let dad = 1.2 * mum;
    //console.log('My dad age is' + dad + 'My mum age is' + mum);
    return [mum, dad]
}
let ages = parentsAge(25);
console.log(`My dad ${ages[1]} My mum ${ages[0]}`);*/



//////////////////////////
//Objects Methods

/*let obj = {
    first_name: 'John',
    last_name: 'The King',
    full_name: function(){
        return this.first_name + '  ' + this.last_name
    }
}
let fn = obj.full_name()
console.log(fn);*/


//Write a function to check if an input string is a palindrome
//Function `checkPalindrome()` return a boolean value based on 
//whether the input string is palindrome or not.

function checkPalindrome(string) {

    // find the length of a string
    const len = string.length;

    // loop through half of the string
    for (let i = 0; i < len / 2; i++) {

        // check if first and last string are same
        if (string[i] !== string[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}

// take input
const string = prompt('Enter a string: ');

// call the function
const value = checkPalindrome(string);

console.log(value);




















