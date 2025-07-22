const products = [
    { name: 'laptop', price: 3200, brand: 'lenevo', color: 'silver' },
    { name: 'phone', price: 3252, brand: 'samsunng', color: 'red' },
    { name: 'wathc', price: 4000, brand: 'casio', color: 'gray' },
    { name: 'sunglass', price: 322, brand: 'ribon', color: 'black' },
    { name: 'camera', price: 3800, brand: 'canon', color: 'blue' },
];

//1. MAP -> return array

const brands = products.map(product => product);
console.log(brands);


// 2. ForEach -> no return
products.forEach(product => console.log(product));
products.forEach(product => console.log(product.color));

// 3. Filter -> condition wise return array 
const cheap = products.filter(product => product.price <= 500);
console.log(cheap);

const specificName = products.filter(p => p.name.includes('n'));
console.log(specificName);

// 4. Find -> Condition wise 1st object return

const special = products.find(p => p.name.includes('n'));
console.log("Find -> ",special);


