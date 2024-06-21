const numbers = [1,2,3,1,3,2,3,5,4,6,]

let counts = {};

for (let number of numbers) {
  counts[number] = (counts[number] || 0) + 1 // in object count[1] represents key. exp: "key" = value...in array it represents index
}


console.log(counts)