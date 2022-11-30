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

const myCountry = describeCountry('Brazil', 214.0, 'Brasilia');
console.log(myCountry)

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