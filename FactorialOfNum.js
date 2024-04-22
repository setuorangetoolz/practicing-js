const FactorialOfNum = (num) => {
  if(num === 0 ) return 1;
  if(num < 0 ) return false;
  return num*FactorialOfNum(num - 1);
}

console.log(FactorialOfNum(0))
console.log(FactorialOfNum(5))
console.log(FactorialOfNum(10))