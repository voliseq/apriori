/**
 * Created by Maciej on 2017-04-03.
 */
function getUniqueValues(data) {
    var uniqArr = [];
    data.map(function (elem) {
        for (var key in elem) {
            if (uniqArr.indexOf(elem[key]) == -1 && key != "class") {
                uniqArr.push(elem[key]);
            }
        }
    });
    uniqArr.sort();
    return uniqArr;

}

// u - unique values, data - dataset to look for occurances into
function countOccurances(data) {
    var occ = {}; // occurances table for example [{'A': 2(times)}]

    for (var i = 0; i < data.length; i++) {
        for (var key in data[i]) {
            if (key != "class") {
                if (!occ[data[i][key]]) {
                    occ[data[i][key]] = 1;
                }
                else {
                    occ[data[i][key]]++;
                }
            }
        }
    }
    return occ;
}

function checkSupport(occ, data, s) {

    var supported = [];
    var dataLength = data.length;
    for (var key in occ) {
        if (occ[key] / dataLength >= s) {
            console.log(key);
            supported.push(key);
        }
    }
    return supported;

}
