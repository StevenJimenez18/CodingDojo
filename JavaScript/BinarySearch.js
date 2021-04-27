// Given a sorted array and a value, return whether the array contains that value. Do not sequentially iterate the array. Instead, ‘divide and conquer’, taking advantage of the fact that the array is sorted. As always, only use built-in functions that you are prepared to recreate (write yourself) on demand!

const binarySearch = (list, item) => {
    let low = 0
    let high = list.length - 1

    while (low <= high) {
        const mid = Math.floor((low + high) / 2)
        const guess = list[mid]

        if (guess === item) {
        return mid
        }

        if (guess > item) {
        high = mid - 1
        } else {
        low = mid + 1
        }
    }

return null //if not found
}
  console.log(binarySearch([1, 2, 3, 4, 5], 1)) //0
  console.log(binarySearch([1, 2, 3, 4, 5], 5)) //4
  console.log(binarySearch([1, 2, 3, 4, 5], 6)) //null