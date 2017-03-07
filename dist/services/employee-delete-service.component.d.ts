/// <reference path="../../node_modules/angular2/typings/browser.d.ts" />
import { Http } from 'angular2/http';
import { Observable } from 'rxjs/Observable';
import { Employee } from '../models/employee';
export declare class EmployeeDeleteServiceComponent {
    private http;
    currentEmployee: Employee;
    errorMessage: string;
    constructor(http: Http);
    private _employeesUrl;
    deleteEmployee(id: number): Observable<Employee>;
    private _handleError(error);
}
