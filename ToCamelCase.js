const toCamelCase = (str) => {
  return str.trim().split(' ').map((eachWord,index)=>{
    if(index === 0 ) return eachWord;
    return eachWord.charAt(0).toUpperCase() + eachWord.slice(1).toLowerCase()
  }).join('')
}

const toSnakeCase = (str) => {
  return str.trim().split(' ').map((eachWord,index)=>{
    return eachWord.toLowerCase()
  }).join('_')
}

console.log(toCamelCase('to cAmel case'))
console.log(toSnakeCase('to cAmel case'))