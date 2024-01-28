function countZeroes(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === 1) {
            // Move to the right half
            left = mid+1 ;
        } else {
            // Move to the left half (including the current mid element)
            right = mid-1;
        }
    }

    // At this point, 'left' is the first occurrence of 0 in the array
    // The count of zeroes is the length of the array minus the index of the first 0
    return arr.length - left;
}


module.exports = countZeroes