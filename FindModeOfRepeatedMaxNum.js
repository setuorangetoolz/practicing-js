const numbers = [1,2,3,1,2,2,3,5,4,6,]

let counts = {};
let maxNumber = 0;
let mode ;

for (let number of numbers) {
  counts[number] = (counts[number] || 0) + 1 // in object count[1] represents key. exp: "key" = value...in array it represents index
  if(counts[number] > maxNumber) {
    maxNumber = counts[number];
    mode = number
  }

}


console.log(counts)
console.log(mode)