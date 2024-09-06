const places = ['London', 'Paris', 'New York', 'London', 'Paris', 'America', 'Los Angels', 'Paris' ]

const nums = [2,4,6,8,4,2,5,8]

function noDuplicate(array){
       const unique = [];  
    for(const item of array){
            if(unique.includes(item) === false){
                unique.push(item)
            }
    }
    return unique
}

const uniqueArray = noDuplicate(places);
console.log(uniqueArray);

const uniqueArray2 = noDuplicate(nums);
console.log(uniqueArray2);

