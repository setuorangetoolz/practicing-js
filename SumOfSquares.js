const SumofSquares = (arr) => {
    return arr.reduce((accum,curr)=>accum = accum + curr*curr,0)
}

console.log(SumofSquares([1,2,3])) // 1*1 + 2*2 + 3*3 = 14
