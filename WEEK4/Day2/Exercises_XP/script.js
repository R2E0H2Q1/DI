////// Exercise 1 : Information //////

/*Part I : function with no parameters
Create a function called infoAboutMe() that takes no parameter.
The function should console.log a sentence about you (ie. your name, age, hobbies ect…).
Call the function.*/

function infoAboutMe(){
    console.log('My name is Reuben, Im 37 years old and some of my hobbies are reading, hiking, baking, etc...');
}

infoAboutMe();


/*Part II : function with three parameters

Create a function called infoAboutPerson(personName, personAge, personFavoriteColor) that takes 3 parameters.
The function should console.log a sentence about the person (ie. “You name is …, you are .. years old, your favorite color is …”)
Call the function twice with the following arguments:
infoAboutPerson("David", 45, "blue")
infoAboutPerson("Josh", 12, "yellow")*/

function infoAboutPerson (personName, personAge, personFavoriteColor){
    console.log(`Your name is ${personName}, you are ${personAge} years old, and your favorite color is ${personFavoriteColor}.`);
}
infoAboutPerson("David", 45, "blue");
infoAboutPerson("Josh", 12, "yellow");

////// Exercise 2 : Tips //////

/*John created a simple tip calculator to help calculate how much to tip when he and his family go to restaurants.

Create a function named calculateTip() that takes no parameter.

Inside the function, use prompt to ask John for the amount of the bill.

Here are the rules
If the bill is less than $50, tip 20%.
If the bill is between $50 and $200, tip 15%.
If the bill is more than $200, tip 10%.

Console.log the tip amount and the final bill (bill + tip).

Call the calculateTip() function.*/

function calculateTip(){
    let bill = prompt('How much is the bill?');
    if (bill < 50){
        tip = 0.20 * bill;
    }else if(bill >= 50 && bill <=200){
        tip = 0.15 * bill;
    }else(bill > 200);{
        tip = 0.10 * bill;
    }
    console.log(`The tip for a bill of $${bill} is ${tip} Dollars!`)
    }
    calculateTip();


    //////Exercise 3 : Find The Numbers Divisible By 23 //////

/*Create a function call isDivisible() that takes no parameter.

In the function, loop through numbers 0 to 500.

Console.log all the numbers divisible by 23.

At the end, console.log the sum of all numbers that are divisible by 23.

Outcome : 0 23 46 69 92 115 138 161 184 207 230 253 276 299 322 345 368
391 414 437 460 483
Sum : 5313*/

function isDivisible(){
    let sum = 0;
    for (let i = 0; i <=500; i++){
        if(i % 23 === 0){
            console.log(i);
            sum += i;
        }
    }
    console.log(`The sum of all numbers divisible by 23 is: ${sum}`);
}
isDivisible();

////// Exercise 4 : Shopping List //////

/*Add the stock and prices objects to your js file.

Create an array called shoppingList with the following items: “banana”, “orange”, and “apple”. It means that you have 1 banana, 1 orange and 1 apple in your cart.

Create a function called myBill() that takes no parameters.

The function should return the total price of your shoppingList. In order to do this you must follow these rules:
The item must be in stock. (Hint : check out if .. in)
If the item is in stock find out the price in the prices object.

Call the myBill() function.*/


const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 

let shoppingList = ['banana', 'orange', 'apple'];

function myBill (){
    for(let item of shoppingList){
        let quantityStock = stock[item]
        
        if(quantityStock >0){
            let price = prices[item]
            console.log(`The price of ${item} is ${price}`)
        }else {
            console.log(`There is not ${item} in stock`)
        }
    }
}
myBill();

////// Exercise 5 : What’s In My Wallet ? //////

/*Note: Read the illustration (point 4), while reading the instructions

Create a function named changeEnough(itemPrice, amountOfChange) that receives two arguments :
an item price
and an array representing the amount of change in your pocket.

In the function, determine whether or not you can afford the item.
If the sum of the change is bigger or equal than the item’s price (ie. it means that you can afford the item), the function should return true
If the sum of the change is smaller than the item’s price (ie. it means that you cannot afford the item) the function should return false

Change will always be represented in the following order: quarters, dimes, nickels, pennies.
A quarters is 0.25
A dimes is 0.10
A nickel is 0.05
A penny is 0.01


4. To illustrate:

After you created the function, invoke it like this:

changeEnough(4.25, [25, 20, 5, 0])
The value 4.25 represents the item’s price
The array [25, 20, 5, 0] represents 25 quarters, 20 dimes, 5 nickels and 0 pennies.
The function should return true, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50 which is bigger than 4.25 (the total amount due)

Examples:

changeEnough(14.11, [2,100,0,0]) => returns false
changeEnough(0.75, [0,0,20,5]) => returns true*/

function changeEnough (itemPrice, amountOfChange){
    let check = 0;
    check += amountOfChange[0] * 0.25;
    check += amountOfChange[1] * 0.1;
    check += amountOfChange[2] * 0.05;
    check += amountOfChange[3] * 0.01;
    if (itemPrice > check) {
    console.log("Not enough money");
  } else if (itemPrice === check) {
    console.log("purchase successful");
  } else {
    console.log("purchase successful");
  }
}
changeEnough(4.25, [25, 20, 5, 0]);

////// Exercise 6 : Vacations Costs //////

/*Let’s create functions that calculate your vacation’s costs:

Define a function called hotelCost().
It should ask the user for the number of nights they would like to stay in the hotel.
If the user doesn’t answer or if the answer is not a number, ask again.
The hotel costs $140 per night. The function should return the total price of the hotel.*/

function hotelCost (){
    let numNights = prompt ('How many nights are you plannig to stay?');
    while (isNaN(numNights)){
        alert('Please enter a valid number!');
        numNights = prompt ('How many nights are you plannig to stay?');
    }
    const costPerNight = 140;
    const totalCost = numNights * costPerNight;

    console.log(totalCost);
}
hotelCost(totalCost);

/*Define a function called planeRideCost().
It should ask the user for their destination.
If the user doesn’t answer or if the answer is not a string, ask again.
The function should return a different price depending on the location.
“London”: 183$
“Paris” : 220$
All other destination : 300$*/

function planeRideCost(){
    let destination = prompt('What is your desired destination?');

    while (typeof destination !== "string" || destination.length === 0) {
      alert("Please enter a valid destination.");
      destination = prompt('What is your desired destination?');
    }
     if (destination === 'London'){
        console.log(`The price for your trip is $183`);
      }else if (destination === 'Paris'){
        console.log('The price for your trip is $220')
      }else{
        console.log('The price for your trip is $300')
      }
}
planeRideCost();

/*Define a function called rentalCarCost().
It should ask the user for the number of days they would like to rent the car.
If the user doesn’t answer or if the answer is not a number, ask again.
Calculate the cost to rent the car. The car costs $40 everyday.
If the user rents a car for more than 10 days, they get a 5% discount.
The function should return the total price of the car rental.*/

function rentalCarCost(){
    let numDays = prompt('How many days would you like to rent the car?');
    while (isNaN(numDays)){
        alert('Please enter a valid number!');
        numDays = prompt ('How many days would you like to rent the car?');
    }
    const costPerDay = 40;
    const totalCost = numDays * costPerDay;

    console.log(`The total cost of the car for ${numDays} days is $${totalCost}`);
}
rentalCarCost();

/*Define a function called totalVacationCost() that returns the total cost of the user’s vacation by calling the 3 functions that you created above.
Example : The car cost: $x, the hotel cost: $y, the plane tickets cost: $z.
Hint: You have to call the functions hotelCost(), planeRideCost() and rentalCarCost() inside the function totalVacationCost().

Call the function totalVacationCost()*/

function totalVacationCost(){
  console.log(`The budget for your vacation will be $${hotelCost()} for your hotel, $${planeRideCost()} for the ride, and $${rentalCarCost()} for the rent of the car.`);
}
totalVacationCost();
///// I know this part is not correct but ran out of ideas. Can you please share some toughts on it?
