var testing_1 = require("angular2/testing");
var http_1 = require("angular2/http");
require('rxjs/Rx');
var employee_delete_service_component_1 = require('./employee-delete-service.component');
var mock_backend_1 = require("angular2/src/http/backends/mock_backend");
var core_1 = require("angular2/core");
testing_1.describe('Employee Delete Service Tests', function () {
    testing_1.beforeEachProviders(function () {
        return [
            http_1.HTTP_PROVIDERS,
            core_1.provide(http_1.XHRBackend, { useClass: mock_backend_1.MockBackend }),
            employee_delete_service_component_1.EmployeeDeleteServiceComponent
        ];
    });
    testing_1.it('should delete an employee', testing_1.inject([http_1.XHRBackend, employee_delete_service_component_1.EmployeeDeleteServiceComponent], function (backend, service) {
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
        service.deleteEmployee(1).subscribe(function (employee) {
            testing_1.expect(employee.name).toBe('Abhinav Mishra');
        });
        service.deleteEmployee(1).subscribe(function (employee) {
            testing_1.expect(employee.id).toBe(1);
        });
    }));
});
//# sourceMappingURL=employee-delete-service.component.spec.js.map