const HashTagGenerator = (str) => {
    if (str > 150 || str.trim().length === 0){
        return false
    }

    str = str.split(" ")
    str = str.map((each)=>
        // each.replace(each[0],each[0].toUpperCase())
        each.charAt(0).toUpperCase() + each.slice(1) // 0 index + slice from 1 to rest.... S+imple
    )
    str = `#${str.join("")}`
    return str
}
console.log(HashTagGenerator("simple string to hash tag"))