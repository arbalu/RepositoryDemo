var testing_1 = require("angular2/testing");
var employee_1 = require('./employee');
testing_1.describe('Tests for Employee Model', function () {
    var employee;
    beforeEach(function () {
        employee = new employee_1.Employee(1, 'Abhinav Mishra');
    });
    testing_1.it('should have name as assigned', function () {
        testing_1.expect(employee.name).toEqual('Abhinav Mishra');
    });
    testing_1.it('should have id as assigned', function () {
        testing_1.expect(employee.id).toEqual(1);
    });
});
//# sourceMappingURL=employee.spec.js.map