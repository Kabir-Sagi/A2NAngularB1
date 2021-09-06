var Information = /** @class */ (function () {
    function Information(name, phn, status) {
        this.name = name;
        this.phn = phn;
        this.status = status;
    }
    Information.prototype.getData = function () {
        console.log(this.name, this.phn, this.status);
    };
    return Information;
}());
var info = new Information("A2N", 99999, true);
var info1 = new Information("Rahul", 89999, false);
info.getData();
info1.getData();
