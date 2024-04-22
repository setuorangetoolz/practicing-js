const FactorialOfNum = (num) => {
  //with recursion method
  // if(num === 0 ) return 1;
  // if(num < 0 ) return false;
  // return num*FactorialOfNum(num - 1);

  //with for loop
  let fact = 1
  for(let i = 1; i <= num; i++){
    fact = fact * i;
  }
  return fact

}

console.log(FactorialOfNum(0))
console.log(FactorialOfNum(5))
console.log(FactorialOfNum(10))