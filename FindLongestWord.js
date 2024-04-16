const FindLongestWord = (word) => {
    if(word.trim().length === 0){
        return false
    }
    let words = word.split(" ").sort((a, b) => b.length - a.length)

    return words[0]
}

console.log(FindLongestWord("the longest word in English is pneumonoultramicroscopicsilicovolcanoconiosis"))