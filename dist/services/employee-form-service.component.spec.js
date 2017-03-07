var testing_1 = require("angular2/testing");
var http_1 = require("angular2/http");
var mock_backend_1 = require("angular2/src/http/backends/mock_backend");
var core_1 = require("angular2/core");
require('rxjs/Rx');
var employee_form_service_component_1 = require('./employee-form-service.component');
testing_1.describe('Employee Detail Service Tests', function () {
    testing_1.beforeEachProviders(function () {
        return [
            http_1.HTTP_PROVIDERS,
            core_1.provide(http_1.XHRBackend, { useClass: mock_backend_1.MockBackend }),
            employee_form_service_component_1.EmployeeFormServiceComponent
        ];
    });
    testing_1.it('should create an employee', testing_1.inject([http_1.XHRBackend, employee_form_service_component_1.EmployeeFormServiceComponent], function (backend, service) {
        backend.connections.subscribe(function (connection) {
            var options = new http_1.ResponseOptions({
                body: {
                    "name": "Abhinav Mishra",
                    "id": 1
                }
            });
            var response = new http_1.Response(options);
            connection.mockRespond(response);
        });
        service.addEmployee('Abhinav Mishra').subscribe(function (employee) {
            testing_1.expect(employee.name).toBe('Abhinav Mishra');
        });
    }));
});
//# sourceMappingURL=employee-form-service.component.spec.js.map