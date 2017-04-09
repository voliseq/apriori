(function () {




    var data = objToArray(iris);

    var uniqArr = getUniqueValues(data);
    var occ = countOccurances(data);
    var supported = checkSupport(occ, iris, 0.1);

    console.log(supported);

    var combinations = combine(supported, 2);

    console.log(combinations);


})();
