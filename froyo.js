const userInputString = prompt(
    "Please enter froyo flavors below! :)",
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
)

const stringArray = userInputString.split(",");

const numbers = [];
for (let i = 0; i < stringArray.length; i++) {
    const str = stringArray[i];
    const number = parseInt(str);
    numbers.push(number);
//   return numbers;
}

console.log(numbers);
console.log(`You have placed an order for ${getLength(numbers)} total froyos!!!`);
console.log(`You have placed an order for ${getVani(numbers)} vanilla.`);
console.log(`You have placed an order for ${getCoff(numbers)} coffee.`);
console.log(`You have placed an order for ${getStra(numbers)} strawberry.`);
console.log(`Enjoy your froyo, come back again!`);

function getLength(numbers){
    let count = 0;
    for ( let i = 0; i < numbers.length; i++){
        count++;
    }
    return count;
}

function getVani(numbers){
    let count =0;
    for (let i = 0; i < numbers.length; i++){
        if ( stringArray[i] === "vanilla"){
            count++;
        }
    }
    // return getVani;
    return count;
}

function getCoff(numbers){
    let count =0;
    for (let i = 0; i < numbers.length; i++){
        if ( stringArray[i] === "coffee"){
            count++;
        }
    }
    return count;
}

function getStra(numbers){
    let count =0;
    for (let i = 0; i < numbers.length; i++){
        if ( stringArray[i] === "strawberry"){
            count++;
        }
    }
    return count;
}