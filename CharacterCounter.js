const CharacterCounter = (str,char) => {
    str = str.toLowerCase()
    char = char.toLowerCase()

    let letters = str.split("")

    return letters.reduce((accum, curr) => {  //Local variable totalCount is redundant
        if (curr === char) {
            accum++
        }
        return accum
    }, 0)
}
console.log(CharacterCounter("Assessors",'S'))