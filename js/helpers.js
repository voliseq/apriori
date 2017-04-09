/**
 * Created by Maciej on 2017-04-03.
 */


function objToArray(data) {
    return data.map(function (obj) {

        return Object.keys(obj).sort().filter(function (key) {
            return key != "class";
        }).map(function (key) {
            return obj[key].replace(",", ".");
        });
    });
}

function getUniqueValues(data) {
    var uniqArr = [];
    data.map(function (arr) {
        arr.map(function (elem) {
            if (uniqArr.indexOf(elem) == -1) {
                uniqArr.push(elem);
            }
        })
    });

    return uniqArr;

}

// u - unique values, data - dataset to look for occurances into
function countOccurances(data) {
    var occ = {}; // occurances table for example [{'A': 2(times)}]

    data.map(function (obj) {
        obj.map(function (elem) {
            elem = String(elem);
            if (!occ[elem]) {
                occ[elem] = 1;
            }
            else {
                occ[elem]++;
            }
        })
    });

    return occ;

}

function checkSupport(occ, data, s) {

    var supported = [];
    var dataLength = data.length;
    for (var key in occ) {
        if (occ[key] / dataLength >= s) {
            supported.push(key);
        }
    }
    return supported;

}

function combine(arra, arra_size) {
    var result_set = [],
        result;


    for (var x = 0; x < Math.pow(2, arra.length); x++) {
        result = [];
        i = arra.length - 1;
        do
        {
            if ((x & (1 << i)) !== 0) {
                result.push(arra[i]);
            }
        } while (i--);

        if (result.length == arra_size) {
            result_set.push(result);
        }
    }

    return result_set;
}
