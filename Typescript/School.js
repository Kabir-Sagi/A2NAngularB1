"use strict";
exports.__esModule = true;
var Student1_1 = require("./Student1");
var School = /** @class */ (function () {
    function School() {
        this.student = [new Student1_1.Student("Adam", "Banglore", 9999), new Student1_1.Student("Chris", "Delhi", 8888)];
    }
    School.prototype.display = function () {
        for (var i = 0; i < this.student.length; i++) {
            //     console.log(this.student[i].name)
            //   console.log(this.student[i].city)
            //   console.log(this.student[i].phn)
            this.student[i].displayData();
            console.log("-----------------------------------------");
        }
    };
    return School;
}());
var school = new School();
school.display();
