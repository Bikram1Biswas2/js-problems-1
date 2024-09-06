// inch to feet
function inchToFeet(inch){
    const inchi = inch/12;
    const convertFt = parseInt(inchi);
    const inchies = inch%12;
    const mainHeight = convertFt + ' ft ' + inchies + ' inch '
    return mainHeight;
}

const myHeight = inchToFeet(66);
console.log(myHeight);

const myHeight2 = inchToFeet(71);
console.log(myHeight2);


// miles to km;

function milesToKm(miles){
  const kilometers = miles * 1.60934;
  const exactKm = kilometers.toFixed(0)
  return exactKm
}

const road = milesToKm(20);
console.log(road);