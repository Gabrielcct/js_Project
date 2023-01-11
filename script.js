//secure code to avoid errors
'use strict';

let hasDriverLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;
if (hasDriverLicense) console.log('Drive');

//functions
function logger() {
    console.log('My name is Gabriel.');
}

logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);



/*1. Write a function called 'describeCountry' which takes three parameters: 
'country', 'population' and 'capitalCity'. Based on this input, the 
function returns a string with this format: 'Finland has 6 million people and its 
capital city is Helsinki'

2. Call this function 3 times, with input data for 3 different countries. Store the 
returned values in 3 different variables, and log them to the console

let country = "Brazil";
var population = 214.0;
const capitalCity = "Brasilia";
*/



function describeCountry(country, population, capitalCity) {
    const descriptionCountry = `${country} has ${population} million people and its capital is ${capitalCity}`;
    return descriptionCountry;
}

//const myCountry = describeCountry('Brazil', 214.0, 'Brasilia');
//console.log(myCountry)

const england = describeCountry('England', 300.0, 'London');
console.log(england)

const usa = describeCountry('USA', 500.0, 'Washington');
console.log(usa)

//function declaration
function calcAge(birthYear) {
    return 2022 - birthYear
}
const age1 = calcAge(2000);
console.log(age1);

//function expression
const calcAge2 = function(birthYear) {
    return 2022 - birthYear;
}
const age2 = calcAge2(2000);
console.log(age2, age1);


//Arrow function
const calAge3 = birthYear => 2023 - birthYear;
const age3 = calAge3(2000);
console.log(age3);

const yearUntilRetirement = (birthYear, firstName) => {
    const age = 2022 - birthYear;
    const retirement = 65 - age;
    //return retirement
    return `${firstName} retires in ${retirement} years`;
}
console.log(yearUntilRetirement(2000, 'Gabriel'));
console.log(yearUntilRetirement(2003, 'Heloisa'));


/*LECTURE: Function Declarations vs. Expressions
1. The world population is 7900 million people. Create a function declaration
called 'percentageOfWorld1' which receives a 'population' value, and
returns the percentage of the world population that the given population 
represents. For example, China has 1441 million people, so it's about 18.2% of 
the world population

2. To calculate the percentage, divide the given 'population' value by 7900 
and then multiply by 100

3. Call 'percentageOfWorld1' for 3 populations of countries of your choice, 
store the results into variables, and log them to the console

4. Create a function expression which does the exact same thing, called 
'percentageOfWorld2', and also call it with 3 country populations (can be 
the same populations*/

function percentageOfWorld1(population) {
    return Math.round((population / 7900) * 100);
}
const china = percentageOfWorld1(1441);
console.log(china);

const percentageOfWorld2 = function(population) {
    return Math.round((population / 7900) * 100);
}

const brazil = percentageOfWorld2(20000)
console.log(`${brazil} %`);

const percentageOfWorld3 = population => (population / 7900) * 100;
const usa2 = percentageOfWorld3(1441);
console.log(usa2);
///////////////////////////////////////////////////////////

//function calling other function

function cutFruitPieces(fruit) {
    return fruit * 4;
}


function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
    return juice;
}

console.log(fruitProcessor(2, 3));

/*
1. Create a function called 'describePopulation'. Use the function type you 
like the most. This function takes in two arguments: 'country' and 
'population', and returns a string like this: 'China has 1441 million people, 
which is about 18.2% of the world.'

2. To calculate the percentage, 'describePopulation' call the 
'percentageOfWorld1' you created earlier

3. Call 'describePopulation' with data for 3 countries of your choice
*/
//CREAT FUNCTION AND ADD PARAM
function describePopulation(country, population) {
    //ASSIGN RETURN VALUE TO descriptionPop
    const descriptionPop = `${country} has ${population} million people which is about ${percentageOfWorld1(population)} % of the world.`;
    // RETURN descriptionPop
    return descriptionPop;
}


const myCountry3 = describePopulation('China', 2000);
console.log(myCountry3);

const br = describePopulation('Brazil', 1000);
console.log(br);

const ir = describePopulation('Ireland', 2045);
console.log(ir);

// USING ARROW FUNCTION
const describePopulationNew = (country, population) => {
    return `${country} has ${population} million people which is about ${percentageOfWorld1(population)} % of the world.`;
}
console.log(describePopulationNew('br', 2000));


// Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀
*/

//const koala_av = (65, 54, 49);
//const dolphin_av = (44, 23, 71);

const calcAvg = (score1, score2, score3) => {
    return ((score1 + score2 + score3) / 3);
}
const koala_av = calcAvg(65, 54, 49);
const dolphin_av = calcAvg(44, 23, 71);



function checkWinner(koala_av, dolphin_av) {
    if (koala_av >= (2 * dolphin_av)) {
        console.log(`Koalas win (${koala_av} vs. ${dolphin_av})`);
    } else if (dolphin_av >= (2 * koala_av)) {
        console.log(`Dolphin win (${dolphin_av} vs. ${koala_av})`);
    } else {
        console.log('No one win');
    }
}



console.log(koala_av);
console.log(dolphin_av);
checkWinner(koala_av, dolphin_av);


function checkWinner2(koala_av, dolphin_av) {
    if (koala_av >= (dolphin_av)) {
        return (`Koalas win (${koala_av} vs. ${dolphin_av})`);
    } else if (dolphin_av >= (koala_av)) {
        return (`Dolphin win (${dolphin_av} vs. ${koala_av})`);
    } else {
        return ('No one win');
    }
}
const win = checkWinner2(koala_av, dolphin_av);
console.log(win)

/////////ARRAY////////

const family = ['Gabriel', 'Heloisa', 'Vanusa', 'Edilson'];
//FIRST ITEM FROM ARRAY
console.log(family[0]);
//ARRAY SIZE
console.log(family.length);
//SELECT LAST ITEM FROM ARRAY
console.log(family[family.length - 1]);
//CHANGE OBJ INSIDE ARRAY
family[1] = 'Jay';
console.log(family);

const gabriel = ['Gabriel', 'Eugenio', 22, 'Student', family];
console.log(gabriel);

function calcAge(birthYear) {
    return 2022 - birthYear
}
const years = [1990, 2000, 1966, 1985]

const age = calcAge(years[0]);
const age6 = calcAge(years[2]);
const age7 = calcAge(years[years.length - 1]);
console.log(age, age6, age7);

//const ages = [calcAge(years[0]), calcAge(years[2]), calcAge(years[years.length - 1])];
//console.log(ages);

/*1. Create an array containing 4 population values of 4 countries of your choice. 
You may use the values you have been using previously. Store this array into a 
variable called 'populations'

2. Log to the console whether the array has 4 elements or not (true or false)

3. Create an array called 'percentages' containing the percentages of the 
world population for these 4 population values. Use the function 
'percentageOfWorld1' that you created earlier to compute the 4 
percentage values.*/
const populations2 = [2, 332, 5, 68];
console.log(populations2);

//const percentages2 = [percentageOfWorld1(populations2[0]), percentageOfWorld1(populations2[1]), percentageOfWorld1(populations2[populations2.length - 1])];
//console.log(percentages2);

// array size is different from array elements (size starts from 0, element not)
//const populations = [10, 1441, 332, 83];

console.log(populations.length === 4);
const percentages = [
    percentageOfWorld1(populations[0]),
    percentageOfWorld1(populations[1]),
    percentageOfWorld1(populations[2]),
    percentageOfWorld1(populations[3])
];
console.log(percentages);
///////////////array method//////////

const friends = ['Michael', 'Steven', 'Peter'];
//Push element to Array
friends.push('Jay');

console.log(friends);
//add john to array
friends.unshift('John');
console.log(friends);

//remove elements//
friends.pop(); //LAST
console.log(friends);
const popped = friends.pop();
console.log(popped);

friends.shift(); // FIRST
console.log(friends);

console.log(friends.indexOf('Steven'));

console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));

friends.push('Bob');
console.log(friends.includes('Bob'));

if (friends.includes('Steven')) {
    console.log('U have a friend called Steven');
}

///////////////TASK//////////////////
const neighbours = ['Argentina', 'Paraguai', 'Colombia', 'Venezuela', 'Peru'];
neighbours.push('Utopia');

console.log(neighbours);
neighbours.pop();
console.log(neighbours);

if (neighbours.includes('Germany')) {
    console.log('It is an EU country!')
} else {
    console.log('Probably not a central European country :D')
}

var index = neighbours.indexOf('Colombia');
if (index !== -1) {
    neighbours[index] = 'France';
}

console.log(neighbours);

//////////////////Challenge/////////////////////

const bill = 100;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill+tip}`);

function calcTip(bill) {
    const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
    return tip;
}
const myTip = calcTip(bill);
console.log(myTip);

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(44)]

const totals = [(tips[0] + bills[0]), (tips[1] + bills[1]), (tips[2] + bills[2])]

console.log(bills, tips, totals);
//////////////////////////////////////////////////////////////

//Objects//

/*const gabrielArray = [
    'Gabriel',
    'Eugenio',
    2022 - 2000,
    'student', 
    ['Ivan', 'Heloisa', 'Marko']
];*/

// const Gabriel = {
//     firstName: 'Gabriel',
//     lastName: 'Eugenio',
//     age: 2022 - 2000,
//     job: 'student',
//     friends: ['Ivan', 'Heloisa', 'Marko'],
//     bestFriend: 'Ivan'
// };


/*Create an object called 'myCountry' for a country of your choice, containing 
properties 'country', 'capital', 'language', 'population' and 
'neighbours' (an array like we used in previous assignments*/

// LECTURE: Object Methods
// 1. Add a method called 'describe' to the 'myCountry' object. This method 
// will log a string to the console, similar to the string logged in the previous 
// assignment, but this time using the 'this' keyword.

// 2. Call the 'describe' method

// 3. Add a method called 'checkIsland' to the 'myCountry' object. This 
// method will set a new property on the object, called 'isIsland'. 
// 'isIsland' will be true if there are no friends, and false if 
// there are. Use the ternary operator to set the property.

const myCountry = {
    country: 'Finland',
    capital: 'Helsinki',
    languange: 'finnish',
    population: 6,
    friends: ['Venezuela', 'Argentina', 'Colombia'],
    isIsland: false,

    checkIsland: function() {
        this.isIsland = this.friends.length ? false : true;
    },

    describe: function() {
        return `${this.country} has ${this.population} million ${this.languange} speaking people, ${this.friends.length} neighbouring countries and a capital called ${this.capital}.`;

    }




};

console.log(myCountry.describe());
console.log(myCountry.capital);
console.log(myCountry['capital']);

myCountry.location = 'South America';

//const interestedIn = prompt('What do you want to know about this Brazil?')

// if (myCountry[interestedIn]) {
//     console.log(myCountry[interestedIn]);
// } else {
//     console.log('Wrong request');
// }

//console.log(`${Gabriel.firstName} has ${Gabriel.friends.length} friends, and his best friend is ${Gabriel.bestFriend} `);

/*
LECTURE: Dot vs. Bracket Notation

1. Using the object from the previous assignment, log a string like this to the 
console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries 
and a capital called Helsinki.'

2. Increase the country's population by two million using dot notation*/
myCountry['country'] += 2
console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.languange} speaking people, ${myCountry.friends.length} neighbouring countries and a capital called ${myCountry.capital}.`)

//////////obj methods//////////////



const Gabriel = {
    firstName: 'Gabriel',
    lastName: 'Eugenio',
    birthYear: 2000,
    job: 'student',
    friends: ['Ivan', 'Heloisa', 'Marko'],
    bestFriend: 'Ivan',
    hasDriverLicense: false,


    giveAge: function() {
        this.age = 2022 - this.birthYear;
        return this.age
    },

    giveDriverLicense: function() {
        if (this.hasDriverLicense == true) {
            return 'has a drivers license';
        } else {
            return 'has no drivers license';
        }
    },

    getSummary: function() {
        return `${this.firstName} is a ${this.giveAge()} -years old ${this.job} and he has ${this.hasDriverLicense ? 'a' : 'no'} drivers license.`
    }
};

console.log(Gabriel.giveAge());

console.log(Gabriel.age);

console.log(`${Gabriel.firstName} is ${Gabriel.giveAge()} years old and ${Gabriel.giveDriverLicense()}.`)

console.log(Gabriel.getSummary());

//////////////////////////////////for loop///////////////////////////

// for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}`);
}

/*There are elections in your country! In a small town, there are only 50 voters.
Use a for loop to simulate the 50 people voting, by logging a string like this to
the console (for numbers 1 to 50): 'Voter number 1 is currently voting'*/

/*for (let voter = 1; voter <= 50; voter++) {
    console.log(`Voter number ${voter} is currently voting`);
}*/

/////////////looping arrays//////////////
const gabrielArray = [
    'Gabriel',
    'Eugenio',
    2022 - 2000,
    'student', ['Ivan', 'Heloisa', 'Marko'],
];
const types = [];

for (let i = 0; i < gabrielArray.length; i++) {
    //Reading from Gabriel array
    console.log(gabrielArray[i], typeof gabrielArray[i]);

    // Filling types array
    //types[i] = typeof gabrielArray[i];

}

console.log(types);

const year = [1992, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}
console.log(ages);

//continue and break
console.log('---ONLY STRING---')
for (let i = 0; i < gabrielArray.length; i++) {
    if (typeof gabrielArray[i] !== 'string') continue;

    console.log(gabrielArray[i], typeof gabrielArray[i]);
}

console.log('---BREAK WITH NUMBER---')
for (let i = 0; i < gabrielArray.length; i++) {
    if (typeof gabrielArray[i] === 'number') continue;

    console.log(gabrielArray[i], typeof gabrielArray[i]);
}

/*
1. Let's bring back the 'populations' array from a previous assignment

2. Use a for loop to compute an array called 'percentages2' containing the 
percentages of the world population for the 4 population values. Use the 
function 'percentageOfWorld1' that you created earlier

3. Confirm that 'percentages2' contains exactly the same values as the 
'percentages' array that we created manually in the previous assignment, 
and reflect on how much better this solution is
*/

const populations = [10, 1441, 332, 83];
const percentages2 = [];

for (let i = 0; i < new_populations.length; i++) {
    const perc = percentageOfWorld1(new_populations.length[i]);
    percentages2.push(perc);
}

console.log(percentages2);