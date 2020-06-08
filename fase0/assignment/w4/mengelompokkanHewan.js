function groupAnimals(animals) {

    // var result = []

    var isSorted = false
    while (isSorted === false) {
        var isSwapping = false
        for (var i = 0; i < animals.length - 1; i++) {
            if (animals[i][0] > animals[i + 1][0]) {
                var tmp = animals[i + 1]
                animals[i + 1] = animals[i]
                animals[i] = tmp
                isSwapping = true
            }
        } if (isSwapping === false) {
            isSorted = true
        }
    }
    let realResult = []
    let result = {}
    for (var i = 0; i < animals.length; i++) {
        if (result[animals[i][0]] === undefined) {
            result[animals[i][0]] = []
        }
        result[animals[i][0]].push(animals[i])

    }
    for (var key in result) {
        realResult.push(result[key])
    }
    // var group = []
    // for (var i = 0; i < animals.length; i++) {
    //     if (i === (animals.length - 1)) {
    //         group.push(animals[i])
    //         result.push(group)
    //     } else if (animals[i][0] === animals[i + 1][0]) {
    //         group.push(animals[i])
    //     } else if (animals[i][0] !== animals[i + 1][0] && animals[i][0] === animals[i - 1][0]) {
    //         group.push(animals[i])
    //         result.push(group)
    //         group = []
    //     } else if (animals[i][0] !== animals[i + 1][0] && animals[i][0] !== animals[i - 1][0]) {
    //         group.push(animals[i])
    //         result.push(group)
    //         group = []
    //     }

    // }

    return realResult;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]