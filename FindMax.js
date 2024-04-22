const FindMax = (arr) => {
  return Math.max(...arr); // Math.max(Array) returns Nan...does not work with array...thats why spreading it..
}

console.log(FindMax([1,24,3,4,5]))
console.log(FindMax([-1,-24,-3,-4,-5]))
console.log(FindMax([5]))