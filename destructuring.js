// 1. array destructuring 

const numbers = [42, 36];
//const x = numbers[0];
//const y = numbers[1];

// const [x,y] = [42,36];

const [x, y] = numbers;

function boxify(num1, num2) {
    const nums = [num1, num2];
    return nums;
}

const [first, second] = boxify(90, 60);
console.log(boxify(90, 60));



const students = {
    name: 'Sakib khan',
    age: 32,
    movies: ['King Khan', 'Don Badsha']
}

const [firstMovie, secondMovie] = students.movies;


// Object Destructuring

const { name, age } = { name: 'alu', age: 14 };
const { name, age } = { id: 2, name: 'alu', age: 14 };

const employee = {
    ide: 'VS Code',
    designtion: "Developer",
    machine: 'mac',
    languages: ['html', 'css', 'js'],
    specification: {
        height: 66,
        weight: 67,
        address: 'kumarkhali',
        drink: 'water',
        watch: {
            color: 'Black',
            price: 500,
            brand: 'garmin',
        }
    }
};

const { machine, ide } = employee;
const { weight, address } = employee.specification;
const { color, price } = employee?.specification.watch;