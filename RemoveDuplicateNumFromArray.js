const RemoveDuplicateNumFromArray = (arr) => {
    return [...new Set(arr)];
}
console.log(RemoveDuplicateNumFromArray([1,2,3,2,3,4,4,5]))