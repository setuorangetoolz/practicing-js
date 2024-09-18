const objectData = {
    name:'this',
    age:'20',
    job:'programmer'
}
// to array
let entries = Object.entries(objectData)

console.log(entries)
console.log(entries.flat())

// to object
let newObj = Object.fromEntries(entries)
console.log(newObj)