var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var http_1 = require('angular2/http');
var Observable_1 = require('rxjs/Observable');
var EmployeeListServiceComponent = (function () {
    function EmployeeListServiceComponent(http) {
        this.http = http;
        this._employeesUrl = 'http://localhost:3000/employees';
    }
    EmployeeListServiceComponent.prototype.getEmployees = function () {
        return this.http.get(this._employeesUrl)
            .map(function (res) { return res.json(); })
            .catch(this._handleError);
    };
    EmployeeListServiceComponent.prototype._handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    EmployeeListServiceComponent = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], EmployeeListServiceComponent);
    return EmployeeListServiceComponent;
})();
exports.EmployeeListServiceComponent = EmployeeListServiceComponent;
//# sourceMappingURL=employee-list-service.component.js.map