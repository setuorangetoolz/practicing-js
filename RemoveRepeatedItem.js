const RemoveRepeatedItem = (arr) => [...new Set(arr)];

console.log(RemoveRepeatedItem([1,2,3,4,3,2,1,4]))