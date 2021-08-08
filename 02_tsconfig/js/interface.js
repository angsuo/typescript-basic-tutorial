(function () {
    function getNames(person) {
        return person.fName + " " + person.lName;
    }
    var thisPerson = { fName: "angsuo", lName: "angsuo" };
    console.log(getNames(thisPerson));
})();
