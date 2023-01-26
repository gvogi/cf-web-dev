const arr = [5, 7, 1, 9, 4]

// function getMAxValue(arr) {
//     if (!arr || !arr.length) return -1
//     let maxValue = 0

//     while (arr.length !== 0) {
//         // let maxValue = 0
//         for (let i = 0; i < arr.length; i++) {
//             if (arr[i] > arr[i + 1]) {
//                 arr[i] = maxValue
//             }
//             arr[i + 1] = maxValue
//         }
//     }
//     console.log(maxValue)
//     return maxValue
// }

function getMaxValue(arr) {
    let maxValue = -Infinity

    for (let item of arr) {
        if (item > maxValue) {
            maxValue = item
        }
    }
    // console.log(item)
    return maxValue
}



