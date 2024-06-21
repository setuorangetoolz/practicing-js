const FactorialWithRecursion = (num)=>{
  if (num === 1) {
    return 1
  }else{
    return num * FactorialWithRecursion(num - 1)
  }
}

console.log(FactorialWithRecursion(5))