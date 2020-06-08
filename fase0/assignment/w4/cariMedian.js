function cariMedian(arr) {
    var result = 0

    var indexMedian = 0

    if (arr.length % 2 !== 0) {
        indexMedian = (arr.length + 1) / 2
        result = arr[indexMedian-1]

    } else {
        indexMedian = arr.length / 2
        for (var i = 0; i < arr.length; i++) {
            if (i === indexMedian) {
                result = (arr[i] + arr[i - 1]) / 2
            }
        }
    }

    return result;

}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5