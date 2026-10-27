// // let number = Number(prompt("number"));

// // function fizzBuzz() {
// //     if (number % 3 === 0 && number % 5 === 0) {
// //         console.log("FizzBuzz");
// //     } else if (number % 3 === 0) {
// //         console.log("Fizz");
// //     } else if (number % 5 === 0) {
// //         console.log("Buzz");
// //     } else {
// //         console.log(number);
// //     }
// // }

// // fizzBuzz();
// // let hamburger = document.querySelector(".hamburger");
// // let menu = document.querySelector(".menu");

// // hamburger.addEventListener("click", function () {
// //   menu.classList.toggle("show");
// // });
// // let hamburger = document.getElementById("hamburger");
// // let menu = document.getElementById("menu");

// // hamburger.addEventListener("click", function () {
// //   menu.classList.toggle("active");
// // }); 
// const systemRandomNumber = Math.floor(Math.random() * 100);
// console.log(systemRandomNumber);

// const guessForm = document.querySelector("#guessForm");
// const resultText = document.querySelector(".result");
// const hpElement = document.querySelector(".hp");

// let userHp = 10;

// function getUserGuess(e) {
//     const userGuess = e.target.userGuess.value;

//     if (userGuess > systemRandomNumber) {
//         resultText.innerHTML = "your number is bigger than answer";
//     } else if (userGuess < systemRandomNumber) {
//         resultText.innerHTML = "your number is smaller than answer";
//     } else if (userGuess == systemRandomNumber) {
//         resultText.innerHTML = "you win";
//     } else {
//         resultText.innerHTML = "invalid answer";
//     }
// }

// guessForm.addEventListener("submit", (e) => {
//     if (userHp <= 1) {
//         resultText.innerHTML = "you lose";
//         return;
//     } else {
//         getUserGuess(e);
//     }

//     userHp--;
//     hpElement.innerHTML = userHp;
//     guessForm.reset();
//     e.preventDefault();
// });
const systemRandomNumber = Math.floor(Math.random() * 100);
console.log(systemRandomNumber);

const guessForm = document.querySelector("#guessForm");
const resultText = document.querySelector(".result");
const hpElement = document.querySelector(".hp");

let userHp = 10;

function getUserGuess(e) {
    const userGuess = Number(e.target.userGuess.value);

    if (userGuess > systemRandomNumber) {
        resultText.innerHTML = "Your number is bigger than answer";
    } else if (userGuess < systemRandomNumber) {
        resultText.innerHTML = "Your number is smaller than answer";
    } else {
        resultText.innerHTML = "You win!";
    }
}

guessForm.addEventListener("submit", (e) => {
    e.preventDefault();

    if (userHp <= 0) {
        resultText.innerHTML = "You lose!";
        return;
    }

    getUserGuess(e);

    userHp--;
    hpElement.innerHTML = userHp;

    guessForm.reset();
});