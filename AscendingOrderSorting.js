const AscendingOrderSorting = (arr) => {

    // with build in sort method (asc order) low > high
    //    return arr.sort((a,b)=> a - b)

    // with build in sort method (desc order) high > low
    //    return arr.sort((a,b)=> b - a)


    //without built in method
    for(let i = 0; i < arr.length; i++ ){
        for (let j = i; j < arr.length; j++){
            if (arr[i] > arr[j]){ //checks element index of i is greater than element index of j
                let ref = arr[i]; // temporary store i index value in a variable called 'ref'
                arr[i] = arr[j];  // swap i index value to j index
                arr[j] = ref;  // j index value to 'ref' variable which is temporary storing i index value
            }
        }
    }
    return arr
}
console.log(AscendingOrderSorting([4,2,8,6,10]))


// let len = arr.length;
// for (let i = 0; i < len; i++) {
//     for (let j = i +1; j < len ; j++) {
//         if(arr[i]>arr[j]){
//             let ref = arr[i];
//             arr[i] = arr[j];         arr[j] = ref;       }
//     }
// }  return arr;