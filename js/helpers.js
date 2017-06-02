/**
 * Created by Maciej on 2017-04-03.
 */


let Util = function() {
};

Util.getCombinations = function(array, size, start, initialStuff, output) {
    if (initialStuff.length >= size) {
        output.push(initialStuff);
    } else {
        let i;

        for (i = start; i < array.length; ++i) {
            Util.getCombinations(array, size, i + 1, initialStuff.concat(array[i]), output);
        }
    }
}

Util.getAllPossibleCombinations = function(array, size, output) {
    Util.getCombinations(array, size, 0, [], output);
}

function stringToArray(data){

    let sentences = [],
        words = [],
        temp;

    temp = data.replace(/\,/g,'')
        .replace(/\;/g, '')
        .replace(/\:/g, '')
        .replace(/\'/g, '')
        .replace(/\`/g, '')
        .replace("?", "")
        .replace(/\!/g,'');

    temp = temp.split("\n")
        .map(function(elem){
        return elem.split(".");
    });

    temp.map(function(elem){
        return elem.map(function(elem){
            return elem.split(" ");
        })
    });

    temp.map(function(elem){
        elem.map(function(elem){
            sentences.push(elem);
        })
    });

    sentences.forEach(function(e, i){
        words.push(e.split(" "));
    });

    return words;
}

function subArray(arr, comb) {
    return _(comb).difference(arr).length === 0;

}

function objToArray(data) {
    return data.map(function (obj) {

        return Object.keys(obj).sort().filter(function (key) {
            return key != "class";
        }).map(function (key) {
            if(typeof obj[key] != "string"){
                obj[key] = String(obj[key]);
            }

            return obj[key].replace(",", ".");
        });
    });
}

function getUniqueValues(data) {
    let uniqArr = [];
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
function countOccurances(data, uniqArr) {
    let occ = {}; // occurances table for example [{'A': 2(times)}]
    data.map(function (obj) {
        uniqArr.map(function (elem) {
            if(typeof(elem) != "object"){
                elem = [elem];
            }
            let key = String(elem);
            if (!occ[key] && subArray(obj, elem)) {
                occ[key] = 1;
            }
            else if(subArray(obj, elem)){
                occ[key]++;
            }
        })
    });

    return occ;

}

function checkSupport(occ, data, s) {

    let supported = [];
    let dataLength = data.length;
    for (let key in occ) {
        if (occ[key] / dataLength >= s) {
            supported.push(key);
        }
    }
    return supported;

}

function combine(arra, arra_size) {
    let result_set = [],
        result;


    for (let x = 0; x < Math.pow(2, arra.length); x++) {
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
