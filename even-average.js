function evenAverage(numbers){

    let evenArray = []
    for(const number of numbers){
     if(number % 2 === 0){
         evenArray.push(number)
     }
    }
    let sum = 0;
    const length = evenArray.length
    for(const even of evenArray){
            sum+= even
    }
    const average = sum/length;
    // const fixed= average.toFixed(0);
    return average;

}

const numbers = [21, 12, 45, 84, 32, 99, 58]
const avg = evenAverage(numbers);
console.log(avg);