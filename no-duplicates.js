const places = ['London', 'Paris', 'New York', 'London', 'Paris', 'America', 'Los Angels', 'Paris' ]

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