"use strict";
exports.__esModule = true;
exports.Student = void 0;
var Student = /** @class */ (function () {
    function Student(name, city, phn) {
        this.name = name;
        this.city = city;
        this.phn = phn;
    }
    Student.prototype.displayData = function () {
        console.log(this.name, this.city, this.phn);
    };
    return Student;
}());
exports.Student = Student;
