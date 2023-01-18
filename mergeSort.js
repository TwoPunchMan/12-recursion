function mergeSort(arr) {
    if (arr.length == 1) {
        return arr;
    }

    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
    let leftArr = mergeSort(left);
    let rightArr = mergeSort(right);

    return merge(leftArr, rightArr);
}

function merge(left, right) {
    let mergedArr = [];

    while (left.length && right.length) {
        if (left[0] < right[0]) {
            mergedArr.push(left.shift());
        } else {
            mergedArr.push(right.shift());
        }
    }

    return [...mergedArr, ...left, ...right];
}

console.log(mergeSort([48, 80, 59, 58, 40, 62, 24, 7, 11, 18, 22, 93, 43, 74, 86]));
