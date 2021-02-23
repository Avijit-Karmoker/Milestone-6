// let myMoney = 50;
// myMoney = 10;
// myMoney = 0;

let age: number = 50;
let club: string = 'Barcelona';
const isFamous: boolean = false;
let famous: boolean;
famous = true;


// number-1 function
function add(num1: any, num2: number | string) {
      return num1 + num2;
}
add(23, 43);
add('Ovijit', 'someone');


// number-2 function
function fullName(firstName: string, lastName: string): string {
      return firstName + ' ' + lastName;
}
const user = fullName('Ben', 'Adam');


// number-3 function
function doubleItAndConsole(number: number): void {
      const result = number * 2;
}
const digit = doubleItAndConsole(29);


// number-4 function
let multiply2: (x: number, y: number) => number;
multiply2 = (x, y) => x * y;

// number-5 function
const multiply = (x: number, y: number): number => x * y;
console.log(multiply(2, 45));


// number-6 array
const numbers: number[] = [2, 3, 4, 56, 7, 8, 10, 34];
numbers.push(93);


const friends: string[] = ['Sun', 'Moon', 'Water', 'River', 'Sea'];
let megaName: string = '';
for (let i = 0; i < friends.length; i++) {
      const friend: string = friends[i];
      if (friends.length > megaName.length) {
            megaName = friend;
      }
}
console.log('Friend with the largest name: ', megaName);



// object
let player: {
      club: string
      salary: number
}

player = {
      club: 'Barcelona',
      salary: 34000000
}

const friend: { name: string, age: number } = {
      name: 'Leonel Messy',
      age: 33
}

interface Player {
      club: string,
      name: string,
      salary: number,
      wife?: string,
      isPlaying: boolean
}

const messy: Player = {
      club: 'Barcelona',
      name: 'messy',
      salary: 45000000,
      wife: 'Some one',
      isPlaying: true
}

const ronaldo: Player = {
      club: 'Juventus',
      name: 'Ronaldo',
      salary: 450000000,
      isPlaying: true
}

function getBonus(player: Player, friends: string[]) {
      return player.salary * 0.2;
}


const juniorPlayer = { age: 26, salary: 1000000 }

getBonus(messy, ['Sun', 'Moon']);

class Person {
      name: string;
      private _partner: string;
      readonly fatherName: string;
      constructor(name: string) {
            this.name = name;
            this._partner = name;
            this.fatherName = name;
      }
      getName() {
            return this.name + ' ' + this._partner;
      }
}

const sam = new Person('Samuel')
console.log('name', sam.name, sam.fatherName)
const samName: string = sam.getName();
sam.name = 'Ben';
// sam.fatherName = 'Ben Carson';
