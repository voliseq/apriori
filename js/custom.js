(function () {


    var uniqArr = getUniqueValues(iris);
    var occ = countOccurances(iris);
    checkSupport(occ, iris, 0.1);
})();
