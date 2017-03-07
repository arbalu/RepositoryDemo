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
var employee_detail_service_component_1 = require('../services/employee-detail-service.component');
var employee_edit_form_service_component_1 = require('../services/employee-edit-form-service.component');
var EmployeeEditFormComponent = (function () {
    function EmployeeEditFormComponent(_router, _routeParams, _detailService, _editService) {
        this._router = _router;
        this._routeParams = _routeParams;
        this._detailService = _detailService;
        this._editService = _editService;
    }
    EmployeeEditFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = parseInt(this._routeParams.get('id'));
        this._detailService.getEmployee(id).subscribe(function (employee) { return _this.currentEmployee = employee; });
    };
    EmployeeEditFormComponent.prototype.editEmployee = function () {
        var _this = this;
        this._editService.editEmployee(this.currentEmployee)
            .subscribe(function (employee) { return _this.currentEmployee = employee; }, function (error) { return _this.errorMessage = error; }, function () { return _this._router.navigate(['EmployeeDetail', { id: _this.currentEmployee.id }]); });
    };
    EmployeeEditFormComponent = __decorate([
        core_1.Component({
            selector: 'employee-edit-form',
            templateUrl: 'src/pages/employee-edit-form.component.html',
            providers: [
                employee_detail_service_component_1.EmployeeDetailServiceComponent,
                employee_edit_form_service_component_1.EmployeeEditFormServiceComponent
            ]
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.RouteParams, employee_detail_service_component_1.EmployeeDetailServiceComponent, employee_edit_form_service_component_1.EmployeeEditFormServiceComponent])
    ], EmployeeEditFormComponent);
    return EmployeeEditFormComponent;
})();
exports.EmployeeEditFormComponent = EmployeeEditFormComponent;
//# sourceMappingURL=employee-edit-form.component.js.map