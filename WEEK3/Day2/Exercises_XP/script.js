///////////Exercise 1: Your Favorite Food ///////////

let food =  ['bread' , 'cake' , 'chocolate' , 'eggs' , 'chesse tortillas' , 'tuna'];
let meal = ['breakfast', 'lunch' , 'dinner'];
let favfood = ['I eat ' + (food[3]) +  ' at every ' +  (meal[0])];
console.log(favfood);


/////////// Exercise 2 : Series ///////////
//Part I

const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
let myWatchedSeriesLength = 3;
let myWatchedSeriesSentence = [(myWatchedSeries)];
console.log("I watched " + (myWatchedSeriesLength) + "series: " + (myWatchedSeriesSentence) + ".");

//Part II
myWatchedSeries[2] = 'Friends';
console.log(myWatchedSeries);

myWatchedSeries.push('Hannibal');
console.log(myWatchedSeries);

myWatchedSeries.unshift('The Walking Dead');
console.log(myWatchedSeries);

myWatchedSeries.splice(1,1);
console.log(myWatchedSeries);

const moneyheist = myWatchedSeries[1];
console.log(moneyheist[2]);

/////////// Exercise 3 : The Temperature Converter ///////////

/*- Store a celsius temperature into a variable.
- Convert it to fahrenheit and console.log <temperature>°C is <temperature>°F.
- Hint : Should you create another variable to hold the temperature in fahrenheit? (ie. point 2)
- Hint: To convert a temperature from celsius to fahrenheit : Divide it by 5, then multiply it by 9, then add 32*/

let celsius = 17;
let fahrenheit = (celsius /5 *9 + 32);
console.log(fahrenheit);

/////////// Exercise 4 : Guess The Answers #1 ///////////

/*For each expression, predict what you think the output will be in a comment (//) without first running the command.
Of course, explain each prediction.
Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.*/

let c;
let a = 34;
let b = 21;

//What will be the outcome of a + b in the first expression?
console.log(a+b);
// Prediction: It will output 55, because 34 + 21 = 55.
//Actual: 55

//What will be the outcome of a + b in the second expression?
a = 2;

console.log(a+b);
// Prediction: It will output 23, because 2 + 21 = 23.
//Actual: 23

//What is the value of c?
console.log(c);
// Prediction: 0, because no value was assigned to it.
//Actual: Undefined

//Analyse the code below, what will be the outcome?
console.log(3 + 4 + '5');
// Prediction: 7, because '5' is not a number.
//Actual: 75

/////////// Exercise 5 : Guess The Answers #2 ///////////
/*- For each expression, predict what you think the output will be in a comment (//) without first running the command.
- Of course, explain each prediction.
- Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.*/

//What is the output of each of the expressions below?

typeof(15)
console.log(typeof(15));
// Prediction: number
// Actual: number

typeof(5.5)
console.log(typeof(5.5));
// Prediction:number
// Actual: number

typeof(NaN)
console.log(typeof(NaN));
// Prediction:undefinend
// Actual: number

typeof("hello")
console.log(typeof('hello'));
// Prediction: string
// Actual: string

typeof(true)
console.log(typeof(true));
// Prediction: undefiend
// Actual: boolean

typeof(1 != 2)
console.log(typeof(1 != 2));
// Prediction: Not equal
// Actual: Boolean

"hamburger" + "s"
console.log("hamburger" + "s");
// Prediction: Hamburgers
// Actual: Hamburgers

"hamburgers" - "s"
console.log("hamburger" - "s");
// Prediction: Hamburger
// Actual: NaN

"1" + "3"
console.log("1" + "3");
// Prediction: 13
// Actual: 13

"1" - "3"
console.log("1" - "3");
// Prediction:13
// Actual:-2

"johnny" + 5
console.log("johnny" + 5);
// Prediction: johnny5
// Actual: johnny5

"johnny" - 5
console.log("johnny" - 5);
// Prediction: Johnny5
// Actual: NaN

99 * "hello"
console.log("hello");
// Prediction: hello
// Actual: hello

1 != 1
console.log(1 != 1); 
// Prediction: false
// Actual: False

1 == "1"
console.log(1 == "1");
// Prediction: true
// Actual: true

1 === "1"
console.log(1 === "1");
// Prediction: false
// Actual: false

/////////Exercise 6 : Guess The Answers #3///////////

5 + "34"
console.log(5 + "34");
// Prediction: 534
// Actual: 534

5 - "4"
console.log(5 - "4");
// Prediction: 54
// Actual: 1

10 % 5
console.log(10 % 5);
// Prediction: 0
// Actual: 0

5 % 10
console.log(5 % 10);
// Prediction: 0
// Actual: 5

"Java" + "Script"
console.log("Java" + "Script");
// Prediction: JavaScript
// Actual: JavaScript

" " + " ";
console.log(" " + " ");
// Prediction: empty space
// Actual: empty space

" " + 0
console.log(" " + 0);
// Prediction: 0
// Actual: 0

true + true
console.log(true + true);
// Prediction: true
// Actual: 2

true + false
console.log(true + false);
// Prediction: 1
// Actual: 1

false + true
console.log(false + true);
// Prediction: -1
// Actual: 1

false - true
console.log(false - true);
// Prediction: 0
// Actual: -1

!true
console.log(!true);
// Prediction: 1
// Actual: false

3 - 4
console.log(3 - 4);
// Prediction: -1
// Actual: -1 

"Bob" - "bill"
console.log("Bob" - "bill");
// Prediction: Bob bill
// Actual: NaN