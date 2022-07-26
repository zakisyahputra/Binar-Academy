let is_even = function (number) {
  return number % 2 === 0;
};

console.log(is_even(2));
console.log(typeof is_even);

// function my_function(x) {
//     return x + 1;
// }

// generate odd numbers between min and max
function odd_numbers(min, max) {
  let odd_array = [];
  for (let i = min; i <= max; i++) {
    if (i % 2 !== 0) {
      odd_array.push(i);
    }
  }
  return odd_array;
}

console.log(odd_numbers(1, 10));

let say_my_name = (name) => {
  console.log(`Hello ${name}`);
};

// same as:
/*
  let say_my_name = function (name) {
      console.log(`Hello ${name}`);
  }
  */

say_my_name("John");
