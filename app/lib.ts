var five = require('five');

console.log("five", five);


export function sayHello() {
    return 'Hello ' + five();
}

export function error() {
  throw new Error('Error here');
}