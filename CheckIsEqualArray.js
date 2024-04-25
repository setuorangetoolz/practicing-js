const CheckIsEqualArray = (arr1,arr2) =>{
    if(arr1.length !== arr2.length){
        return false
    }
    return arr1.every((curr,index)=>curr === arr2[index])
}

console.log(CheckIsEqualArray([1,2,3,4],[1,2,3,4]));
console.log(CheckIsEqualArray([1,2,4],[1,2,3,4]));
console.log(CheckIsEqualArray([1,2,4],[]));
console.log(CheckIsEqualArray([],[]));