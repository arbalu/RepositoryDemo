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
var router_1 = require('angular2/router');
var employee_list_service_component_1 = require('../services/employee-list-service.component');
var EmployeeListComponent = (function () {
    function EmployeeListComponent(_listingService) {
        this._listingService = _listingService;
    }
    EmployeeListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._listingService.getEmployees().subscribe(function (employees) { return _this.employees = employees; }, function (error) { return _this.errorMessage = error; });
    };
    EmployeeListComponent = __decorate([
        core_1.Component({
            selector: 'employee-list',
            templateUrl: 'src/pages/employee-list.component.html',
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [employee_list_service_component_1.EmployeeListServiceComponent]
        }), 
        __metadata('design:paramtypes', [employee_list_service_component_1.EmployeeListServiceComponent])
    ], EmployeeListComponent);
    return EmployeeListComponent;
})();
exports.EmployeeListComponent = EmployeeListComponent;
//# sourceMappingURL=list.component.js.map