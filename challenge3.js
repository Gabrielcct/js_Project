const mark = {
    fullName: 'Mark Miller',
    mass: '78',
    height: '1.69',

    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);

        return this.bmi;
    }
};

const john = {
    fullName: 'John Smith',
    mass: '92',
    height: '1.95',

    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);

        return this.bmi;
    }
};

console.log(john.calcBMI());
console.log(mark.calcBMI());

if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName} BMI ${mark.bmi}is higher than ${john.fullName} BMI ${john.bmi}`);
} else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}    ${john.bmi}is higher than ${mark.fullName} BMI ${mark.bmi}`);
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

const population = [10, 1441, 332, 83];
const percentages2 = [];

for (let i = 0; i < population.length; i++) {
    const perc = percentageOfWorld1(population.length[i]);
    percentages2.push(perc);

    function percentageOfWorld1(population) {
        return Math.round((population / 7900) * 100);
    }
}

console.log(percentages2);