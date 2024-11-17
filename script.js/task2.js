function calculateSumAndAverage(numbers) {
    const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    const average = sum / numbers.length;
    return { sum, average };
}
//________________________________________________________________
const numbers = [10, 20, 30, 40];
const result = calculateSumAndAverage(numbers);
console.log(result); 
