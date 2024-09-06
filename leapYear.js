
/* Leap Year Conditions

*1-Those Year that is not divisible by 100 and if the year is divisible by 4..then it will be leap year
*2-If the year is divisible by 400, then it is leapYear.
*3-Else it is not a leapYear

*/
function leapYear(year){
    if(year%4===0 && year%100!==0){
        return true;
    }else if( year%100===0 && year%400 === 0){
        return true
    } else{
        return false
    }
}

const result = leapYear(400);
const result1 = leapYear(900);
const result2 = leapYear(2024);
console.log(result,result1,result2);