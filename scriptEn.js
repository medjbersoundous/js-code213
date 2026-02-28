"use strict"; // enables strict mode: helps catch common mistakes like using undeclared variables
// 'var' is the old way to declare variables
var old = "avoid me";

// 'let' is for variables whose value can change later (mutable)
let jhghcg = 0;

// 'const' is for variables that should never be changed (reassigned / immutable)
// great for fixed values like math constants
const PI = 3.14159;

// updating a 'let' variable, this is allowed
jhghcg = jhghcg + 1;

// =====================================================================

let str = "soundous"; // string  => text, always writed in quotes
let num = 42; // number  => integers and decimals use the same type in JS
let bool = true; // boolean => only two possible values: true or false
let empty = null; // null    => intentionally empty / no value
let undef; // undefined => declared but not yet assigned
undef = "defined"; // now it has a value so it's no longer undefined

// =====================================================================

let age = 20;

// a method to use if/else on one line:
// condition ? valueIfTrue : valueIfFalse
let go = age > 20 ? "You can go" : "You cannot go";
// age is 20, not greater than 20, so go = "You cannot go"
console.log(go); // output: "You cannot go"

// =====================================================================

let hasID = true;

// && (and) => both sides must be true to return true
console.log(age > 18 && hasID); // true && true => true

// || (or)  => at least one side must be true to return true
console.log(age > 18 || false); // true || false => true

// !  (not) => flips the boolean value
console.log(!hasID); // !true => false

// =====================================================================

let numbers = [1, 2, 3, 4, 15, 20, 14];

// .filter(): keeps only elements that pass a condition (returns a new array)
// here we keep only numbers greater than 10
let even = numbers.filter((num) => num > 10);
console.log(even); // output: [15, 20, 14]

// .sort():  sorts in place (modifies the original array)
// (a, b) => a - b means sort in ascending order (smallest to largest)
// if the result is negative, a comes first. If positive, b comes first.
numbers.sort((a, b) => a - b);
console.log(numbers); // output: [1, 2, 3, 4, 14, 15, 20]

// .reduce(): combines all elements into a single value
// it takes a callback(accumulator, currentValue) and a starting value (0 here)
// each iteration adds the current number to the running total
let sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum); // output: 59 (1+2+3+4+14+15+20)

// .reduce() can also work on strings
// here we start with " " (a space) and concatenate each letter
let letters = ["H", "i", "!"];
let word = letters.reduce((rslt, letter) => rslt + letter, " ");
console.log(word); // output: " Hi!"

// Array.from(): creates an array from any "iterable" (like a string)
// each character becomes an element
let letters1 = Array.from("soundous");
console.log(letters1); // output: ['s','o','u','n','d','o','u','s']

let numbers2 = [5, 10, 15, 20];

// .find(): returns the first element only that matches the condition
// stops searching as soon as it finds a match
let result = numbers2.find((num) => num > 10);
console.log(result); // output: 15

// .findIndex(): same idea but returns the index (position) instead of the value
let index = numbers2.findIndex((num) => num > 10);
console.log(index); // output: 2 (15 is at position 2)

// =====================================================================

let names = ["adem", "sara", "ali"];

// .includes() is case-sensitive! "Adem" ≠ "adem"
console.log(names.includes("Adem")); // output: false

let nom = "soundous";

// two ways to concatenate strings:
let hey = "hello" + nom; // old way using +
let hey2 = `hello ${nom}`; // modern way using template literals
console.log(hey2, hey); // output: "hello soundous" "hellosoundous"
// checking membership before allowing a username
if (names.includes(nom)) {
  console.log("change your name, this name is already used");
} else {
  console.log("welcome " + nom); // output: "welcome soundous"
}

// =====================================================================

// here we create a queue, which is a data structure that works like a line:
// first in first out (FIFO), the first item added is the first to be removed.

class Queue {
  constructor() {
    // 'this.items' is the internal array that stores the queue's elements
    this.items = [];
  }

  // enqueue → adds an element to the end of the queue
  enqueue(element) {
    this.items.push(element);
  }

  // dequeue => removes and returns the element at the front
  dequeue() {
    return this.items.shift(); // .shift() removes the first element
  }

  // peek => looks at the front element WITHOUT removing it
  peek() {
    return this.items[0];
  }

  // isEmpty => returns true if there are no elements in the queue
  isEmpty() {
    return this.items.length === 0;
  }
}

// =====================================================================

// in array the late in is first out
let arr = [];
arr.push(1); // [1]
console.log(arr); // output: [1]
arr.push(2); // [1, 2]
console.log(arr); // output: [1, 2]
arr.push(3); // [1, 2, 3]
console.log(arr); // output: [1, 2, 3]
arr.pop(); // removes 3 (the LAST element)
console.log(arr); // output: [1, 2]

//======================================================================
// in queue the first in is the first out
let newarray = new Queue(); // creates a new queue instance
console.log(newarray.items); // output: [] (empty at start)

newarray.enqueue(10); // queue: [10]
newarray.enqueue(20); // queue: [10, 20]
newarray.enqueue(30); // queue: [10, 20, 30]
console.log(newarray.items); // output: [10, 20, 30]

// note: dequeue() ignores any argument you pass to it!
// yhe argument 20 here has no effect, it always removes the first element
newarray.dequeue(20); // removes 10 (the first element), not 20
newarray.dequeue(); // removes the first element which is 10.
console.log(newarray.items); // Output: [20, 30]

console.log(newarray.peek()); // output: 20 (front of the queue)
console.log(newarray.items); // output: [20, 30] (peek does not remove anything)



// functions part 

function bubbleSort(arr) {
  // thee first loop controls how many complete passes we make
  // if the array has n elements, we may need up to n passes to guarantee that everything is sorted
  for (let i = 0; i < arr.length; i++) {
    // the second loop compares elements two by two, we compare arr[j] with arr[j + 1], that's why we stop at arr.length - 1
    for (let j = 0; j < arr.length - 1; j++) {
      // if the left number is bigger than the right number, they are in the wrong order => we swap them
      if (arr[j] > arr[j + 1]) {
        // step 1: store the left value temporarily
        let temp = arr[j];
        // step 2: move the smaller value to the left
        arr[j] = arr[j + 1];
        // step 3: put the bigger value on the right
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}
console.log(bubbleSort([3, 5, 1, 0, 2]));

function selectionSort(arr) {
  // we move position by position, at each position i, we try to put the correct smallest element there
  for (let i = 0; i < arr.length; i++) {
    // assume current index is the smallest
    let min = i;

    // search for smaller value in the rest of the array
    for (let j = i + 1; j < arr.length; j++) {
      // if we find a smaller number, update min index
      if (arr[j] < arr[min]) {
        min = j;
      }
    }

    // after searching, we now know where the smallest element is
    // swap it with position i
    let temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
  }

  return arr;
}

console.log(selectionSort([5, 3, 8, 4]));

function insertionSort(arr) {
  // we start from index 1 because consider that the index 0 is already sorted
  for (let i = 1; i < arr.length; i++) {
    // the element we want to insert
    let key = arr[i];

    // compare with previous elements
    let j = i - 1;

    // while we are not at the beginning and previous element is bigger than key
    while (j >= 0 && arr[j] > key) {
      // shift element one position to the right
      arr[j + 1] = arr[j];
      // move left
      j--;
    }
    // insert key in the correct position
    arr[j + 1] = key;
  }

  return arr;
}

console.log(insertionSort([5, 3, 8, 4]));

function linearSearch(arr, target) {
  // start from beginning
  for (let i = 0; i < arr.length; i++) {
    // compare each element with target
    if (arr[i] === target) {
      // if found, return index
      return i;
    }
  }

  // if we reach here, target doesn't exist
  return -1;
}

console.log(linearSearch([10, 20, 30], 20));

function binarySearch(arr, target) {
  // binary search works only on sorted arrays, it divides the search area in half each time
  let left = 0; // start index
  let right = arr.length - 1; // end index

  while (left <= right) {
    // find middle position
    let mid = Math.floor((left + right) / 2);

    // if middle equals target
    if (arr[mid] === target) {
      return mid;
    }

    // if middle value is smaller than target => ignore left half
    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      // else ignore right half
      right = mid - 1;
    }
  }

  return -1;
}
console.log(binarySearch([1, 2, 3, 4, 5], 4));

// fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13...
// each number = sum of the two previous numbers
function fibonacci(n) {

  // base case (stopping condition) without this => recursion never stops
  if (n <= 1) return n;

  // recursive case: break the problem into smaller problems
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(6));
