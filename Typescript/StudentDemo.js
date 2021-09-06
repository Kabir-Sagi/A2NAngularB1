"use strict";
exports.__esModule = true;
var School = /** @class */ (function () {
    function School() {
        this.id = 1;
        this.name = "A2N";
        this.isPresent = true;
    }
    School.prototype.getMarks = function () {
        console.log(this.id, this.name, this.isPresent);
    };
    return School;
}());
var s = new School();
s.getMarks();
