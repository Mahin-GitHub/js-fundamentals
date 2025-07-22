// 'almas', 5, true,{},[]
// '',0,false,null,undefined


let myVar = 5;

if (myVar) {
    myVar = myVar * 100;
}
else {
    myVar = 0;
}

let myMoney = 50;
// you check negative of falsy anythin
if (!myMoney) {

}

const money = 80;
let food;
if (money > 100) {
    food = 'biriani';
}
else {
    food = 'cha biscuit';
}

// ternary 
let food1 = money > 100 ? 'biriani' : 'cha bisciut';

let drink = (money > 100 && myVar > 100) ? 'coke' : 'filter water';
console.log(drink);


// Number to string conversion

const num1 = 52;
console.log(num1);

const numStr = num1 + '';
console.log(numStr);

// String to number
const input = '560';
const inputNum = +input;
console.log(inputNum);


//
let isActive = true;
const showUser = () => console.log('display user');
const hideUser = () => console.log('Hide user');

isActive ? showUser() : hideUser();

// use && if the left side is true then right side will be executed
isActive && showUser();

// use ||  the left side is false then right side will be executed
isActive || hideUser();

// toggle boolean

isActive = !isActive;