const userName ='Braydon';
userName ? console.log(`Hello, ${userName}`) : console.log('Hello!');

const userQuestion = 'Will I pass the Parsity coding challenge?';
console.log(`"${userQuestion}", asked ${userName} `);

const randomNumber = Math.floor(Math.random() * 8);
const eightBall = randomNumber;

if (randomNumber === 0) {
    console.log('It is certain!');

} else if (randomNumber === 1) {
    console.log('It is decidedly so!');

} else if (randomNumber === 2) {
    console.log('Reply hazy try again!');

} else if (randomNumber === 3) {
    console.log('Cannot predict now!');

} else if (randomNumber === 4) {
    console.log('Do not count on it!');

} else if (randomNumber === 5) {
    console.log('My sources say NO!');

} else if (randomNumber === 6) {
    console.log('Outlook not so good!');

} else if (randomNumber === 7) {
    console.log('Signs point to yes!');

} else {
    console.log('You need to shake me again!');

}

console.log(eightBall);

