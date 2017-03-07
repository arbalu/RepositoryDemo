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
var employee_edit_form_component_1 = require('./employee-edit-form.component');
var employee_detail_service_component_1 = require('../services/employee-detail-service.component');
var employee_delete_service_component_1 = require('../services/employee-delete-service.component');
var EmployeeDetailComponent = (function () {
    function EmployeeDetailComponent(_router, _routeParams, _detailService, _deleteService) {
        this._router = _router;
        this._routeParams = _routeParams;
        this._detailService = _detailService;
        this._deleteService = _deleteService;
    }
    EmployeeDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = parseInt(this._routeParams.get('id'));
        this._detailService.getEmployee(id).subscribe(function (employee) { return _this.currentEmployee = employee; }, function (error) { return _this.errorMessage = error; });
    };
    EmployeeDetailComponent.prototype.deleteHandler = function (id) {
        var _this = this;
        this._deleteService.deleteEmployee(id).subscribe(function (employee) { return _this.currentEmployee = employee; }, function (errorMessage) { return _this.errorMessage = errorMessage; }, function () { return _this._router.navigate(['EmployeeList']); });
    };
    EmployeeDetailComponent = __decorate([
        core_1.Component({
            selector: 'employee-detail',
            templateUrl: 'src/pages/employee-detail.component.html',
            providers: [
                employee_detail_service_component_1.EmployeeDetailServiceComponent,
                employee_delete_service_component_1.EmployeeDeleteServiceComponent
            ],
            directives: [router_1.ROUTER_DIRECTIVES, employee_edit_form_component_1.EmployeeEditFormComponent]
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.RouteParams, employee_detail_service_component_1.EmployeeDetailServiceComponent, employee_delete_service_component_1.EmployeeDeleteServiceComponent])
    ], EmployeeDetailComponent);
    return EmployeeDetailComponent;
})();
exports.EmployeeDetailComponent = EmployeeDetailComponent;
//# sourceMappingURL=employee-detail.component.js.map