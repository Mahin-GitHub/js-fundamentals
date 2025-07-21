const numbers = [89, 35, 45, 98, 58];
const students = {
    name: 'Sakib khan',
    age: 32,
    movies: ['King Khan', 'Don Badsha']
}

// 1. Tamplate String

const about = `My name is ${students.name} age of ${students.age} has number ${numbers[2]} also liked movies ${students.movies[0]}`;

console.log(about);


// 2. Arrow Function
const getFiftyFive = () => 55;
const addSistyFive = num => num + 65;
const isEven = x => x & 2 == 0;
const addThree = (x, y, z) => x + y + z;
const doMath = (num1, num2) => {
    const sum = num1 + num2;
    return sum;
}

// 3. Spread Operator
const newNumbers = [...numbers]; // copy full array;
numbers.push(99);
numbers.push(90);
numbers.push(98);

console.log(numbers);
console.log(newNumbers);

// create a new array from an older array and add an element

const currentNumbers = [...numbers,55];

