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
var http_1 = require('angular2/http');
var list_component_1 = require('./components/list.component');
var employee_form_component_1 = require('./components/employee-form.component');
var employee_detail_component_1 = require('./components/employee-detail.component');
var employee_edit_form_component_1 = require('./components/employee-edit-form.component');
var course_component_1 = require('./components/course.component');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'src/pages/app.component.html',
            styleUrls: ['src/assets/stylesheets/style.css'],
            directives: [
                router_1.ROUTER_DIRECTIVES, course_component_1.CourseComponent
            ],
            providers: [http_1.HTTP_PROVIDERS]
        }),
        router_1.RouteConfig([
            {
                path: '/employee',
                name: 'EmployeeList',
                component: list_component_1.EmployeeListComponent
            },
            {
                path: '/employee/new',
                name: 'NewEmployee',
                component: employee_form_component_1.EmployeeFormComponent
            },
            {
                path: '/employee/:id',
                name: 'EmployeeDetail',
                component: employee_detail_component_1.EmployeeDetailComponent
            },
            {
                path: '/employee/:id/edit',
                name: 'EditEmployee',
                component: employee_edit_form_component_1.EmployeeEditFormComponent
            }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
})();
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map