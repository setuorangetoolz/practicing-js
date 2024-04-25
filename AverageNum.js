const findEvg = (arr) =>{
    const total = arr.reduce((accum,curr)=>accum+curr,0)
    return total/arr.length
}

console.log(findEvg([3,4,5,6]))
