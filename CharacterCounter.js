const CharacterCounter = (str,char) => {
    str = str.toLowerCase()
    char = char.toLowerCase()

    letters = str.split("")

    totalCount = letters.reduce((accum,curr)=>{
        if (curr === char){
            accum++
        }
        return accum
    },0)

    return totalCount
}
console.log(CharacterCounter("Assessors",'S'))