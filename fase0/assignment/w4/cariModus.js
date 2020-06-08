function cariModus(arr) {
    var result = 0
    var modus = 0
    var modusCount = 0

    for (var i = 0; i < arr.length; i++) {
        var counter = 0
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                counter += 1
            }
        }
        if (counter > modusCount) {
            modusCount = counter
            modus = arr[i]
        }
    }
    if (modus === 0) {
        result = -1
    } else if (modusCount >= arr.length - 1) {
        result = -1
    } else {
        result = modus
    }
    return result;
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1