//function returning another function
const greet = () => (name) => `hello ${name}`;
const sayHello = greet();
console.log(sayHello("mina"));

// function composition
const add = (x) => x + 2;
const addSecondTime = (x) => x + 3;

const compose = (f, g) => (x) => f(g(x));

const addThreeNum = compose(addSecondTime, add);

const addThreeNumRes = addThreeNum(4);

//Create a curried function that adds three numbers.
const addThreeNumCurr = (a) => (b) => (c) => a + b + c;
console.log(addThreeNumCurr(4)(3)(4));

//Write a debounce function using arrow syntax.
const debounce = (func, delay) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, delay);
  };
};
const debounceMsg = (msg) => console.log("debounced!", msg);
const debounceLog = debounce(debounceMsg, 1000);
debounceLog("hello");

//throttling function
const throttle = (func, limit) => {
  let lastRun = 0;
  return (...args) => {
    const now = Date.now();
    if (now - lastRun >= limit) {
      lastRun = now;
      func(...args);
    }
  };
};

// Implement a custom map function using arrow callbacks.
const customMap = (arr, callback) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i], i, arr));
  }
  return result;
};
const numbers = [1, 2, 3, 4, 5];
const doubled = customMap(numbers, (num) => num * num);
console.log(doubled);
