// WEEK 1 JS Foundation


console.log('Hello World');
console.log('Welcome to 100xDevs');

let firstName = "Harsh";
let age = 21;
let isMarried = false;

console.log("This Person name is " + firstName + " age is " + age);

if (isMarried) {
    console.log(firstName + ' Is married');
} else {
    console.log(firstName + ' Is not married');
}

let countAns = 0;

for (let count = 0; count <= 1000; count++) {
    countAns = countAns + count;
}

console.log(countAns);


function sumOfTwo(a, b) {
    return a + b;
}


function sum(num1, num2, callbackFn) {
    let result = num1 + num2;
    callbackFn(result);
}

function displayResult(data) {
    console.log("Result of the sum is : " + data);
}

function displayResultPassive(data) {
    console.log("Sum's result is : " + data);
}

let ans = sum(10, 20, displayResult);
console.log(ans);

console.log('Harsh'.slice(0, 1));

console.log(parseFloat('24.2222'));
console.log(parseInt('24px'));

const initialArr = [1, 2, 3, 4];
initialArr.pop(5);
initialArr.push(10);
console.log(initialArr);

initialArr.forEach((index, num) => {
    console.log('index: ' + index, 'num: ' + num);

})


class Animal {
    constructor(name, legCount) {
        this.name = name
        this.legCount = legCount
    }
    describe() {
        return `${this.name} has ${this.legCount}`
    }

}
const dog = new Animal('Dog', 4);
console.log(dog);


const currentDate = new Date();
console.log(`${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`)

currentDate.setDate(25);
currentDate.setMonth(1);
currentDate.setFullYear(2002);
console.log(`${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`)
console.log("Time in milliseconds since 1970: ", currentDate.getTime());
// setInterval(() => {
//     console.log(currentDate.getTime() / 1000);
// }, 1000);

// You are only allowed to call one function after this
// How will you displayResult of a sum

// Async and Sync
function findSum(n) {
    let ans = 0;
    for (let i = 0; i < n; i++) {
        ans += i
    }
    return ans;
}
console.log(findSum(10));
setTimeout(() => {
    console.log(findSum(100))
}, 1000)
console.log('Running');
// Busy waiting
// function syncSleep() {
//     let a = 1;
//     for (let i = 0; i < 10000000000; i++) {
//         a++;
//     }
// }
// syncSleep();

// Async and Sync

// WEEK 1 JS Foundation