let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [john, pete, mary];

let names = [];

let names2 = users.map(item => item.name);

console.log(names); // John, Pete, Mary
console.log(names2); // John, Pete, Mary
