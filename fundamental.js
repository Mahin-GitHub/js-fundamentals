// 1. How to declare a variable using let and const

const fatherName = 'Father';
let season = 'rainy';
season = 'winter';

// 6 basic cinditions >,<,===,!==,<=,>=
// Multiple conditions : && , ||

if (fatherName === 'FAther' || season === 'rainy') {

}
elseif(fatherName === 'rainy'){

}
else {

}

// 3. Array declare
// index
// length, push,
const numbers = [1, 2, 3, 4, 5, 6];
numbers[0] = 56;
// 4. for loop 

for (let i = 0; i < numbers.length; i++) {
    const element = array[i];
    console.log(element);
}

// 5. Function 


function multiply(num1, num2) {

    const result = num1 * num2;
    return result
}

const output = multiply(35, 58);

// 6. Object
// 3 ways to access property by name

const students = {
    name: 'Sakib',
    age: 26,
    movies: ['king khan', 'Dhakar mastan']
}

const myName = 'name';
console.log(students.age);
console.log(students['name']);
console.log(students[myName]);

