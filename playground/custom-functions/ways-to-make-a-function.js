// function doctorize(firstName) {
//   return `Dr. ${firstName}`;
// }

// Anonymous function
// function (firstName) {
//   return `Dr. ${firstName}`;
// }

// Function expression
// const doctorize = function(firstName) {
//   return `Dr. ${firstName}`;
// }

// Arrow function (anonymous functions)
// Implicit return allows you to return a keyword without having to type 'return'
const inchtoCM = inches => inches * 2.54;

// function add(a, b = 3) {
//   const total = a + b;
//   return total;
// }

// add function converted to arrow function
const add = (a, b = 3) => a + b;

// returning an object
// function makeABaby(first, last) {
//   const baby = {
//     name: `${first} ${last}`,
//     age: 0,
//   };
//   return baby;
// }

// makeABaby function converted to arrow function to return an object
const makeABaby = (first, last) => ({
  name: `${first} ${last}`,
  age: 0,
});

// IIFE (Immediately Invoked Function Expression)
(function(age) {
  // console.log('Running the anon function');
  return `You are cool and age ${age}`;
})(27);

/* eslint-disable */
// Methods (function which lives inside an object)
const britt = {
  name: 'Brittany Franklin',
  // Method
  sayHi: function() {
    console.log('Hey Britt');
    return 'Hey Britt';
  },
  // Short hand method
  yellHi() {
    console.log('HEY BRITT!!!');
  },
  // Arrow function
  whisperHi: () => {
    console.log('hi britt');
  }
};

// Callback functions
// Click callback
const button = document.querySelector('.click-me');
// console.log(button);
function handleClick(){
  console.log('Great Clicking!!');
}
button.addEventListener('click', handleClick);
button.addEventListener('click', function() {
  console.log('Nice job!!!');
})

// Timer callback
setTimeout(britt.yellHi, 1000);
setTimeout(function() {
  console.log('DONE!');
}, 1000);
setTimeout (() => {
  console.log('YEET!!!');
}, 1000);