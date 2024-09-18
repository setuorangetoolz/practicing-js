const IsEmptyObject = (obj) =>{
    // for (let key in obj) {
    //     if(obj.hasOwnProperty(key)){
    //         return `it's not empty.`
    //     }
    // }
    // return "it's empty."

    return Object.keys(obj).length === 0;
}

console.log(IsEmptyObject({name:'mina'}))
console.log(IsEmptyObject({}))
console.log(IsEmptyObject({value:null}))
console.log(IsEmptyObject({value:undefined}))