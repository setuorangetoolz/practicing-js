function createCounter() {
  let count = 0;
  return () => {
    count++;
    return count;
  };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2

//curried functions
const multiply = (a, b) => a * b;
console.log(multiply(2, 3)); // 6

const curriedMultiply = (a) => (b) => a * b;
const double = curriedMultiply(2);
console.log(double(3)); // 6

//function composition
const add = (x) => x + 3;
const multiplyByTwo = (x) => x * 2;

const compose = (f, g) => (x) => f(g(x));

// const addThenMultiply =  compose(multiplyByTwo, add);

const addThenMultiply = (x) => multiplyByTwo(add(x));

console.log(addThenMultiply(5));

//debounce function and throttle function

function debounce(func, delay) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  };
}
const log = debounce(() => console.log("Debounced!"), 500);
// window.addEventListener("resize", log);
log();
log();
log();
setTimeout(log, 200);
setTimeout(log, 400);

//fetch data with async/await
async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Fetch error:", error);
  }
}
fetchData("https://jsonplaceholder.typicode.com/posts/1")
  .then((res) => res.json())
  .then((data) => console.log("Data fetched successfully", data))
  .catch((error) => console.error("Error fetching data:", error));
