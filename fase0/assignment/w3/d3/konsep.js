
// Init Object
// var person = {};
// console.log(person);
// console.log(typeof person);

// Set Property
// var person = {
//     firstName: 'Josep' // naming tips : camelCase
// };
// person.firstName = 'Joseph'; // reassign value
// person.lastName = 'Immanuel'; // additional property
// console.log(person);

// FirstName => pascal case
// firstName => camel Case
// first-name => snake case
// first_name ... 

// Get Property
// var person = {
//     firstName: 'Josep', // naming tips : camelCase
//     'last name': 'Immanuel'
// };
// console.log(person.firstName); // Josep
// console.log(person['firstName']); // Josep
// // console.log(person.last name); // X
// console.log(person['last name']); // Immanuel
// console.log(person[0]); // undefined

// Var Data Types
// var person = {
//     firstName: 'Josep',
//     lastName: 'Immanuel',
//     age: 35,
//     books : ['Harry Potter', 'Narnia']
// };
// console.log(typeof person.firstName);
// console.log(typeof person.age);
// console.log(typeof person.books);

// for..in => boleh dipake
// var person = {
//     firstName: 'Josep',
//     lastName: 'Immanuel',
//     age: 35,
//     books: ['Harry Potter', 'Narnia']
// };


// for (var property in person) {
    // console.log(property);
    // console.log(person[property]);
// }

// delete operator
// var person = {
//     firstName: 'Josep',
//     lastName: 'Immanuel',
//     age: 35,
//     books: ['Harry Potter', 'Narnia']
// };
// console.log(person);
// delete person.books;
// console.log(person);

// hasOwnProperty => ga boleh dipake
// var person = {
//     firstName: 'Josep',
//     lastName: 'Immanuel',
//     age: 35,
//     books: ['Harry Potter', 'Narnia']
// };
// console.log(person.hasOwnProperty('firstName')); // true
// console.log(person.hasOwnProperty('cars')); // false

// Object.keys => ga boleh dipake
// var person = {
//     firstName: 'Josep',
//     lastName: 'Immanuel',
//     age: 35,
//     books: ['Harry Potter', 'Narnia']
// };
// console.log(Object.keys(person)); // [ 'firstName', 'lastName', 'age', 'books' ]

// Object.values => ga boleh dipake
// var person = {
//     firstName: 'Josep',
//     lastName: 'Immanuel',
//     age: 35,
//     books: ['Harry Potter', 'Narnia']
// };
// console.log(Object.values(person)); 

// Array to Object
// var arr = [1, 2, 3];
// /*
// {
//     prop1: 1,
//     prop2: 2,
//     prop3: 3
// }
// */
// var obj = {};
// for(var i = 0; i < arr.length; i++) {
//     // hardcode prop key
//     // if(i === 0) {
//     //     obj.prop1 = arr[i];
//     // }
//     // else if(i === 1) {
//     //     obj.prop2 = arr[i];
//     // }
//     // else if(i === 2) {
//     //     obj.prop3 = arr[i];
//     // }

//     // Dynamic Prop Names
//     obj['prop' + (i + 1)] = arr[i];
// }
// console.log(obj);

// Object to Array
// var obj = {
//     prop1 : 1,
//     prop2 : 2,
//     prop3 : 3
// };
// var arr = [];
// for (var property in obj) {
//     arr.push(obj[property]);
// }
// console.log(arr);

// var obj = {
//     prop1 : 1,
//     prop2 : 2,
//     prop3 : 3
// };
// var arr = [];
// for (var property in obj) {
//     if(property === 'prop2') {

//     }
//     else {
//         arr.push(obj[property]);
//     }
// }
// console.log(arr);
