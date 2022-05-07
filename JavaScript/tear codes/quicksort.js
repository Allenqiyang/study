function quicksort(arr) {
    if(arr.length < 2) return arr
    const left = [], right = []
    const pivotIndex = arr.length >> 1
    const pivot = arr.splice(pivotIndex, 1)[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return quicksort(left).concat(pivot, quicksort(right))
}

console.log(quicksort([4, 3, 5, 2, 1, 6]))