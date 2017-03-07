var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var testing_1 = require("angular2/testing");
var core_1 = require("angular2/core");
var browser_1 = require("angular2/platform/testing/browser");
var router_1 = require('angular2/router');
var router_2 = require("angular2/src/router/router");
var location_mock_1 = require("angular2/src/mock/location_mock");
var location_1 = require("angular2/src/router/location/location");
var http_1 = require("angular2/http");
var mock_application_ref_1 = require('angular2/src/mock/mock_application_ref');
var mock_backend_1 = require("angular2/src/http/backends/mock_backend");
var browser_adapter_1 = require('angular2/src/platform/browser/browser_adapter');
require('rxjs/Rx');
var app_component_1 = require('../app.component');
var list_component_1 = require('./list.component');
var employee_list_service_component_1 = require('../services/employee-list-service.component');
var MockEmployeeListServiceComponent = (function () {
    function MockEmployeeListServiceComponent() {
    }
    return MockEmployeeListServiceComponent;
})();
var TestMyList = (function () {
    function TestMyList() {
    }
    TestMyList = __decorate([
        core_1.Component({
            template: '<employee-list></employee-list>',
            directives: [list_component_1.EmployeeListComponent],
            providers: [MockEmployeeListServiceComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], TestMyList);
    return TestMyList;
})();
testing_1.describe('Employee List Tests', function () {
    testing_1.resetBaseTestProviders();
    testing_1.setBaseTestProviders(browser_1.TEST_BROWSER_PLATFORM_PROVIDERS, browser_1.TEST_BROWSER_APPLICATION_PROVIDERS);
    testing_1.beforeEachProviders(function () {
        return [
            router_1.ROUTER_DIRECTIVES,
            router_1.ROUTER_PROVIDERS,
            http_1.HTTP_PROVIDERS,
            employee_list_service_component_1.EmployeeListServiceComponent,
            core_1.provide(http_1.XHRBackend, { useClass: mock_backend_1.MockBackend }),
            core_1.provide(router_1.APP_BASE_HREF, { useValue: '/' }),
            core_1.provide(router_1.ROUTER_PRIMARY_COMPONENT, { useValue: app_component_1.AppComponent }),
            core_1.provide(core_1.ApplicationRef, { useClass: mock_application_ref_1.MockApplicationRef }),
            router_1.RouteRegistry,
            core_1.provide(location_1.Location, { useClass: location_mock_1.SpyLocation }),
            core_1.provide(router_1.Router, { useClass: router_2.RootRouter })
        ];
    });
    testing_1.it('Should display the list of employees', testing_1.injectAsync([http_1.XHRBackend, testing_1.TestComponentBuilder], function (backend, tcb) {
        backend.connections.subscribe(function (connection) {
            var options = new http_1.ResponseOptions({
                body: [
                    {
                        "id": 1,
                        "name": "Abhinav Mishra"
                    },
                    {
                        "id": 2,
                        "name": "Roshan Shrestha"
                    }
                ]
            });
            var response = new http_1.Response(options);
            connection.mockRespond(response);
        });
        return tcb
            .createAsync(TestMyList)
            .then(function (fixture) {
            fixture.detectChanges();
            var compiled = fixture.nativeElement;
            var listCount = compiled.querySelectorAll('a').length;
            testing_1.expect(listCount).toBe(2);
            testing_1.expect(compiled.innerHTML).toContain('Abhinav Mishra');
            var src = (new browser_adapter_1.BrowserDomAdapter()).getProperty(compiled.querySelector('a'), 'href');
            testing_1.expect(src).toBe('http://localhost:9876/employee/1');
        });
    }));
});
//# sourceMappingURL=list.component.spec.js.map