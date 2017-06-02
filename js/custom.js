(function () {



    let supp = 0.05,
        size = 2,
        maxSize = 2,
        lastOcc,
        supportedComb,
        lastSupportedComb;

    let combinations = [],
        data = objToArray(wine),
        // data = stringToArray(grimm),
        uniqArr = getUniqueValues(data).filter(x => x!=""),
        occ = countOccurances(data, uniqArr),
        supported = checkSupport(occ, data, supp);

    supportedComb = supported;

    while (supported.length > 0 && size <= maxSize) {
        Util.getAllPossibleCombinations(supported, size, combinations);
        lastOcc = occ;
        occ = countOccurances(data, combinations);
        lastSupportedComb = supportedComb;
        supportedComb = checkSupport(occ, data, supp);
        combinations = [];
        size++;
    }

    console.log(supportedComb, occ);

})();
