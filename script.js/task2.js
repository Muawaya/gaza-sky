function calculateSumAndAverage(numbers) {
    let sum = 0; 
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i]; 
    }

    let average = sum / numbers.length; 
    return { sum: sum, average: average }; 
}


