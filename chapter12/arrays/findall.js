/**
 * Returns an array of indexes of occurences
 * of a value x in array arr.
 * 
 * @param {Array} arr - the source of the array 
 * @param {*Number} x - the element of the array to be found 
 */
function findAll(arr, x) {
    if (!arr || !x) return []

    const results = []   // the array of indexes to return
    let len = arr.length // the length of the source array
    let pos = 0 // the position to start search from

    while (pos < len) {
        pos = arr.indexOf(x, pos) // pos updates to first occurence of x
        if (pos === -1) break
        results.push(pos++)  // if found push and increase pos to start next search // at next element 
        // results.push(pos) 
        // pos++                 
        //the above 2 lines equal to line: results.push(pos++)                         
    }

    return results         //return the array of indexes
}

console.log(findAll([1, 2, 3, 2, 5, 6, 2], 2))