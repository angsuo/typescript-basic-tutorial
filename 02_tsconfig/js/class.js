(function () {
    var Person = /** @class */ (function () {
        function Person(fName, lName) {
            this.fName = fName;
            this.lName = lName;
            this.fullName = this.fName + " " + this.lName;
        }
        Person.prototype.showName = function () {
            console.log("This person's fullname is: " + this.fullName);
        };
        return Person;
    }());
    var angsuo = new Person("angsuo", "angsuo");
    angsuo.showName();
})();
