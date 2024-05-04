const CountingVowels = (str) => {
    const vowels = ['a','e','i','o','u'];
    const letters = str.replace(/\s/g, "").split("")

    let count = 0;
   for(let char of letters){
       if(vowels.includes(char.toLowerCase())){
           count++
       }
   }
    return count
}

console.log(CountingVowels("this is it."))