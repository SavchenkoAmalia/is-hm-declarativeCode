//! 1

const users = [
    {name: 'Amalia', age: 14},
    {name: 'Maksim', age: 17},
    {name: 'Alice', age: 12},
]

const userNames = users.map((user) => user.name)

console.log(userNames);

//! 2


const users1 = [
    {name: 'Amalia', age: 14, eyeColor: 'brown'},
    {name: 'Maksim', age: 17, eyeColor: 'blue'},
    {name: 'Alice', age: 12, eyeColor: 'brown'},
]

const userEyeColor = users1.map((users1) => users1.eyeColor)

console.log(userEyeColor);

//! 3

const users2 = [
    {name: 'Amalia', age: 14, eyeColor: 'brown', gender: 'female'},
    {name: 'Maksim', age: 17, eyeColor: 'blue', gender: 'male'},
    {name: 'Alice', age: 12, eyeColor: 'brown', gender: 'female'},
    {name: 'Alina', age: 18, eyeColor: 'green', gender: 'female'},
    {name: 'Bob', age: 14, eyeColor: 'grey', gender: 'male'}
]

function getNamesByGender(users2, gender){
    return users2.filter((user) => user.gender === gender).map((user) => user.name);
}

console.log(getNamesByGender(users2, 'male'));
console.log(getNamesByGender(users2, 'female'));

//! 4

const users3 = [
    {name: 'Amalia', age: 14, eyeColor: 'brown', isActive: true},
    {name: 'Maksim', age: 17, eyeColor: 'blue', isActive: true},
    {name: 'Alice', age: 12, eyeColor: 'brown', isActive: false},
    {name: 'Alina', age: 18, eyeColor: 'green', isActive: true},
    {name: 'Bob', age: 14, eyeColor: 'grey', isActive: false}
]

    const isNotActiveUsers = users3.filter((user) => !user.isActive )


console.log(isNotActiveUsers);

//! 5

// const users4 = [
//     {name: 'Amalia', age: 14, eyeColor: 'brown', email: 'amalia@gmail.com'},
//     {name: 'Maksim', age: 17, eyeColor: 'blue', email: 'maksim@gmail.com'},
//     {name: 'Alice', age: 12, eyeColor: 'brown', email: 'alice@gmail.com'},
//     {name: 'Alina', age: 18, eyeColor: 'green', email: 'alina@gmail.com'},
//     {name: 'Bob', age: 14, eyeColor: 'grey', email: 'bob@gmail.com'}
// ]

// const emailToFind = prompt('введіть пошту користувача');
// const founderUser = users4.find(user => user.email === emailToFind);

// if( founderUser){
//     console.log(founderUser);
// }
// else{
//     console.log('такого користувача не знайдено');
// }

//! 6

const users5 = [
    {name: 'Amalia', age: 14},
    {name: 'Maksim', age: 17},
    {name: 'Igor', age: 32},
    {name: 'Alice', age: 12},
    {name: 'Alina', age: 21},
    {name: 'Bob', age: 8},
    {name: 'Maria', age: 18}
]

const min = 14;
const max = 30;

const userOld = users5.filter((user) => user.age >= min && user.age <= max)
console.log(userOld);