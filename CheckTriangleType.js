const CheckTriangleType = (a,b,c) => {
    if (a === b && b === c) return "equilateral"
    if (a === b || b === c || a === c) return "isosceles"
    return 'scalene'
}

console.log(CheckTriangleType(2,2,2))
console.log(CheckTriangleType(4,5,4))
console.log(CheckTriangleType(5,6,3))