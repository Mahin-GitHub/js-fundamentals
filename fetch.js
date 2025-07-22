// 1. JSON -> Stringify , Parse

const student = {
    name: 'Sakib Khan',
    age: 32,
    movies: ['King khan', 'Dhakar Mastan'],
};

const studentJSON = JSON.stringify(student);
console.log(studentJSON);


const studentObj = JSON.parse(studentJSON);
console.log(studentObj);


// 2. Fetch 

fetch('url')
    .then(res => res.json())
    .then(data => console.log(data)
    );

// Keys, values

const keys = Object.keys(student);
const values = Object.values(student);
console.log("keys", keys);
console.log("values", values);

// for
const numbers = [1, 3, 5, 6, 7, 8];
numbers.forEach(num => console.log(num));
numbers.map(num => num * 2);

// for of ->  on array like object
// for in ->  loop on an object 


// add or remove from an array

const products = [
    { name: 'laptop', price: 3200, brand: 'lenevo', color: 'silver' },
    { name: 'phone', price: 3252, brand: 'samsunng', color: 'red' },
    { name: 'wathc', price: 4000, brand: 'casio', color: 'gray' },
    { name: 'sunglass', price: 322, brand: 'ribon', color: 'black' },
    { name: 'camera', price: 3800, brand: 'canon', color: 'blue' },
];

const newProduct = { name: 'webcap', price: 700, brnd: 'Lal' };

// copy products array and then add newProduct
const newProducts = [...products, newProduct];

// create a new array without one specific item
// remove phone mean create a new array without the phone

const remaining = products.filter(p => p.name !== 'phone');
