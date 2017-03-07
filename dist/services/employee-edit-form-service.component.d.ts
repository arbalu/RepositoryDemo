import { Http } from 'angular2/http';
import { Observable } from 'rxjs/Observable';
import { Employee } from '../models/employee';
export declare class EmployeeEditFormServiceComponent {
    private http;
    constructor(http: Http);
    private _employeesUrl;
    editEmployee(employee: Employee): Observable<Employee>;
    private _handleError(error);
}
