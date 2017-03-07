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
var employee_form_service_component_1 = require('../services/employee-form-service.component');
var EmployeeFormComponent = (function () {
    function EmployeeFormComponent(_employeeService) {
        this._employeeService = _employeeService;
        this.model = { name: '', id: 1 };
    }
    EmployeeFormComponent.prototype.newEmployee = function () {
        var _this = this;
        this._employeeService.addEmployee(this.model.name)
            .subscribe(function (employee) { return _this.model = employee; }, function (error) { return _this.errorMessage = error; });
        window.history.back();
    };
    EmployeeFormComponent.prototype.onKey = function (event) {
        this.model.name = event.target.value;
    };
    EmployeeFormComponent = __decorate([
        core_1.Component({
            selector: 'employee-form',
            templateUrl: 'src/pages/employee-form.component.html',
            providers: [employee_form_service_component_1.EmployeeFormServiceComponent]
        }), 
        __metadata('design:paramtypes', [employee_form_service_component_1.EmployeeFormServiceComponent])
    ], EmployeeFormComponent);
    return EmployeeFormComponent;
})();
exports.EmployeeFormComponent = EmployeeFormComponent;
//# sourceMappingURL=employee-form.component.js.map