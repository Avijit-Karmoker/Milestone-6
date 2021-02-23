"use strict";
// let myMoney = 50;
// myMoney = 10;
// myMoney = 0;
let age = 50;
let club = 'Barcelona';
const isFamous = false;
let famous;
famous = true;
// number-1 function
function add(num1, num2) {
    return num1 + num2;
}
add(23, 43);
add('Ovijit', 'someone');
// number-2 function
function fullName(firstName, lastName) {
    return firstName + ' ' + lastName;
}
const user = fullName('Ben', 'Adam');
// number-3 function
function doubleItAndConsole(number) {
    const result = number * 2;
}
const digit = doubleItAndConsole(29);
// number-4 function
let multiply2;
multiply2 = (x, y) => x * y;
// number-5 function
const multiply = (x, y) => x * y;
console.log(multiply(2, 45));
// number-6 array
const numbers = [2, 3, 4, 56, 7, 8, 10, 34];
numbers.push(93);
const friends = ['Sun', 'Moon', 'Water', 'River', 'Sea'];
let megaName = '';
for (let i = 0; i < friends.length; i++) {
    const friend = friends[i];
    if (friends.length > megaName.length) {
        megaName = friend;
    }
}
console.log('Friend with the largest name: ', megaName);
// object
let player;
player = {
    club: 'Barcelona',
    salary: 34000000
};
const friend = {
    name: 'Leonel Messy',
    age: 33
};
const messy = {
    club: 'Barcelona',
    name: 'messy',
    salary: 45000000,
    wife: 'Some one',
    isPlaying: true
};
const ronaldo = {
    club: 'Juventus',
    name: 'Ronaldo',
    salary: 450000000,
    isPlaying: true
};
function getBonus(player, friends) {
    return player.salary * 0.2;
}
const juniorPlayer = { age: 26, salary: 1000000 };
getBonus(messy, ['Sun', 'Moon']);
class Person {
    constructor(name) {
        this.name = name;
        this._partner = name;
        this.fatherName = name;
    }
    getName() {
        return this.name + ' ' + this._partner;
    }
}
const sam = new Person('Samuel');
console.log('name', sam.name, sam.fatherName);
const samName = sam.getName();
sam.name = 'Ben';
// sam.fatherName = 'Ben Carson';
