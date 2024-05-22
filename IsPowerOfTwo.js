const isPowerOfTwo = (num) => {
  let stat = false;
  for (let i = 0; i < num ; i++){
      if(2**i === num){
          stat = true
      }
  }
  return stat;
}

console.log(isPowerOfTwo(8))
console.log(isPowerOfTwo(7))