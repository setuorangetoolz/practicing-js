const findMinWithMath = (arr) => {
  if(arr.length === 0) return "Array is empty"
  return Math.min(...arr) // ...arr -> 4, 2, 7, 5
}

console.log(findMinWithMath([4,2,7,5]))
console.log(findMinWithMath([]))