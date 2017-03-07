var testing_1 = require("angular2/testing");
var http_1 = require("angular2/http");
require('rxjs/Rx');
var employee_list_service_component_1 = require('./employee-list-service.component');
var mock_backend_1 = require("angular2/src/http/backends/mock_backend");
var core_1 = require("angular2/core");
testing_1.describe('Employee List Service Tests', function () {
    testing_1.beforeEachProviders(function () {
        return [
            http_1.HTTP_PROVIDERS,
            core_1.provide(http_1.XHRBackend, { useClass: mock_backend_1.MockBackend }),
            employee_list_service_component_1.EmployeeListServiceComponent
        ];
    });
    testing_1.it('should return a list of employees', testing_1.inject([http_1.XHRBackend, employee_list_service_component_1.EmployeeListServiceComponent], function (backend, service) {
        backend.connections.subscribe(function (connection) {
            var options = new http_1.ResponseOptions({
                body: [
                    {
                        "name": "Abhinav Mishra",
                        "id": 1
                    }
                ]
            });
            var response = new http_1.Response(options);
            connection.mockRespond(response);
        });
        service.getEmployees().subscribe(function (employees) {
            testing_1.expect(employees[0].name).toBe('Abhinav Mishra');
        });
        service.getEmployees().subscribe(function (employees) {
            testing_1.expect(employees[0].id).toBe(1);
        });
    }));
});
//# sourceMappingURL=employee-list-service.component.spec.js.map