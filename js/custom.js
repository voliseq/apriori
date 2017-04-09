(function () {


    function 

    var combinations = [];
    var data = objToArray(iris);
    var uniqArr = getUniqueValues(data);
    var occ = countOccurances(data, uniqArr);
    var supported = checkSupport(occ, data, 0.04);
    Util.getAllPossibleCombinations(supported,2,combinations);


    var occ2 = countOccurances(data, combinations);
    var supported2 = checkSupport(occ2, data, 0.04);
    console.log(occ2, supported2);



})();
